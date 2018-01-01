import { WoopsaValue } from './woopsaValue';
import { WoopsaSubscriptionChannel, WoopsaSubscription } from './woopsaSubscription';
import { WoopsaClient, WoopsaMetaResult } from './woopsaClient';
import { Injectable } from '@angular/core';

@Injectable()
export class WoopsaService {
  private client: WoopsaClient;
  private defaultChannel: WoopsaSubscriptionChannel;

  constructor() {
    this.client = new WoopsaClient();
    this.defaultChannel = this.createChannel(200);
  }

  setUrl(path: string) {
    this.client.setUrl(path);
  }

  setAuthorization(username: string, password: string) {
    this.client.setAuthorization(username, password);
  }

  meta(path: string = ''): Promise<WoopsaMetaResult> {
    return this.client.meta(path);
  }

  read(path: string): Promise<WoopsaValue> {
    return this.client.read(path);
  }

  invoke(path: string, args: any = {}, forceNoArgsSerialize = false): Promise<WoopsaValue> {
    return this.client.invoke(path, args, forceNoArgsSerialize);
  }

  createChannel(size: number): WoopsaSubscriptionChannel {
    return new WoopsaSubscriptionChannel(this.client, size);
  }

  subscribe(
    path: string,
    channel: WoopsaSubscriptionChannel = this.defaultChannel,
    monitorInterval: number = 0.02,
    publishInterval: number = 0.05
  ): Promise<WoopsaSubscription> {
    return this.client.subscribe(channel, path, monitorInterval, publishInterval);
  }

  unsubscribe(subscription: WoopsaSubscription, channel: WoopsaSubscriptionChannel = this.defaultChannel) {
    return this.client.unsubscribe(channel, subscription);
  }
}
