import { WoopsaValue } from './woopsaValue';
import { WoopsaValueType } from './woopsaType';
import { WoopsaSubscriptionChannel, WoopsaSubscription } from './woopsaSubscription';
import { WoopsaRequest } from './woopsaRequest';

import * as WebRequest from 'web-request';
import { LiteEvent, ILiteEvent } from '../event/lite-event';

export class WoopsaClient {
  public readonly verbRead: string = 'read';
  public readonly verbWrite: string = 'write';
  public readonly verbInvoke: string = 'invoke';
  public readonly verbMeta: string = 'meta';
  private baseUrl: string;
  private username: string;
  private password: string;
  private offline = false;
  private _isLastCommunicationSuccessful = true;
  private readonly _onIsLastCommunicationSuccessfulChange = new LiteEvent<boolean>();

  static mapValue(readResult: WoopsaReadResult): WoopsaValue {
    let value: WoopsaValue;
    const valueType: WoopsaValueType = WoopsaValueType[readResult.Type];
    const timeStamp: number = readResult.TimeStamp !== null ? NaN : Date.parse(readResult.TimeStamp);

    if (valueType === WoopsaValueType.JsonData) {
      value = WoopsaValue.CreateChecked(readResult.Value, valueType, timeStamp);
    } else {
      value = WoopsaValue.CreateChecked(String(readResult.Value), valueType, timeStamp);
    }

    return value;
  }

  private updateIsLastCommunicationSuccessful(value: boolean) {
    if (this._isLastCommunicationSuccessful !== value) {
      this._isLastCommunicationSuccessful = value;
      this._onIsLastCommunicationSuccessfulChange.trigger(value);
    }
  }

  public get onIsLastCommunicationSuccessfulChange(): ILiteEvent<boolean> {
    return this._onIsLastCommunicationSuccessfulChange.expose();
  }

  public get isLastCommunicationSuccessful(): boolean {
    return this._isLastCommunicationSuccessful;
  }

  public goOffline() {
    this.offline = true;
  }

  public goOnline() {
    this.offline = false;
  }

  setUrl(path: string): void {
    this.baseUrl = path;
    console.log('url set');
  }

  setAuthorization(username: string, password: string): void {
    this.username = username;
    this.password = password;
  }

  meta(path: string = ''): Promise<WoopsaMetaResult> {
    return this.sendRequest(this.getMetaRequest(path));
  }

  getMetaRequest(path: string = ''): WoopsaRequest {
    return this.getRequest(path, this.verbMeta);
  }

  sendMetaRequest(metaRequest: WoopsaRequest): Promise<WoopsaMetaResult> {
    return this.sendRequest(metaRequest);
  }

  read(path: string): Promise<WoopsaValue> {
    return this.sendReadRequest(this.getReadRequest(path));
  }

  getReadRequest(path: string): WoopsaRequest {
    return this.getRequest(path, this.verbRead);
  }

  sendReadRequest(readRequest: WoopsaRequest): Promise<WoopsaValue> {
    return this.sendRequest(readRequest).then(readResult => WoopsaClient.mapValue(<WoopsaReadResult>readResult));
  }

  invoke(path: string, args: any = {}, forceNoArgsSerialize = false): Promise<WoopsaValue> {
    return this.sendInvokeRequest(this.getInvokeRequest(path, args, forceNoArgsSerialize));
  }

  getInvokeRequest(path: string, args: any = {}, forceNoArgsSerialize = false): WoopsaRequest {
    return this.getRequest(path, this.verbInvoke, args, forceNoArgsSerialize);
  }

  sendInvokeRequest(invokeRequest: WoopsaRequest): Promise<WoopsaValue> {
    return this.sendRequest(invokeRequest).then(response => {
      const readResult = <WoopsaReadResult>JSON.parse((<any>response).body);
      if (readResult != null) {
        return WoopsaClient.mapValue(readResult);
      }
      return null;
    });
  }

  subscribe(
    channel: WoopsaSubscriptionChannel,
    path: string,
    monitorInterval: number = 0.02,
    publishInterval: number = 0.05
  ): Promise<WoopsaSubscription> {
    const subscription = new WoopsaSubscription(path, monitorInterval, publishInterval);
    return channel.create().then(channelId => channel.register(subscription));
  }

  unsubscribe(channel: WoopsaSubscriptionChannel, subscription: WoopsaSubscription): Promise<void> {
    return channel.unregister(subscription);
  }

  unsubscribeOffline(channel: WoopsaSubscriptionChannel, subscription: WoopsaSubscription) {
    channel.unregisterOffline(subscription);
  }

  private getRequest(path: string, verb: string, args: any = {}, forceNoArgsSerialize = false): WoopsaRequest {
    const headers = new Headers();
    let body = '';
    if (verb === this.verbInvoke) {
      headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
      if (!forceNoArgsSerialize) {
        let first = true;
        for (const propertyKey in args) {
          if (!args.hasOwnProperty(propertyKey)) {
            continue;
          }

          if (first) {
            first = false;
          } else {
            body += '&';
          }

          body += `${propertyKey}=${encodeURIComponent(args[propertyKey])}`;
        }
      } else {
        body = args;
      }
    } else if (verb === this.verbWrite) {
      body = args;
    }
    this.addAuthorizationHeader(headers);
    return new WoopsaRequest(`${this.baseUrl}/${verb}/${path}`, verb, headers, body);
  }

  private sendRequest(request: WoopsaRequest): Promise<any> {
    if (this.offline) {
      this.updateIsLastCommunicationSuccessful(false);
      const errorMessage = 'Network is offline [simulation]';
      return Promise.reject(errorMessage);
    }
    if (request.verb === this.verbRead || request.verb === this.verbMeta) {
      return WebRequest.json<any>(request.url, { headers: request.headers, throwResponseError: true })
        .then(response => {
          this.updateIsLastCommunicationSuccessful(true);
          return response;
        })
        .catch(error => {
          this.updateIsLastCommunicationSuccessful(false);
          throw error;
        });
    } else if (request.verb === this.verbInvoke || request.verb === this.verbWrite) {
      return WebRequest.post(request.url, { headers: request.headers, throwResponseError: true }, request.body)
        .then(response => {
          this.updateIsLastCommunicationSuccessful(true);
          return response;
        })
        .catch(error => {
          this.updateIsLastCommunicationSuccessful(false);
          throw error;
        });
    }
  }

  private addAuthorizationHeader(headers: Headers) {
    if (this.username) {
      headers['Authorization'] = 'Basic ' + btoa(`${this.username}:${this.password}`);
    }
  }
}

export class WoopsaMetaResult {
  Name: string;
  Items: string[];
  Properties: WoopsaPropertyMeta[];
  Methods: WoopsaMethodMeta[];
}

export class WoopsaPropertyMeta {
  Name: string;
  Type: string;
  ReadOnly: boolean;
}

export class WoopsaMethodMeta {
  Name: string;
  ReturnType: string;
  ArgumentInfos: WoopsaMethodArgumentInfoMeta[];
}

export class WoopsaMethodArgumentInfoMeta {
  Name: string;
  Type: string;
}

export class WoopsaReadResult {
  Value: any;
  Type: string;
  TimeStamp: string;
}
