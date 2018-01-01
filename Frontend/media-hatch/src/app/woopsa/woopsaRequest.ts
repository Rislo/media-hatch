export class WoopsaRequest {
  constructor(private _url: string, private _verb: string, private _headers: Headers, private _body: string) {}

  public get url() {
    return this._url;
  }

  public get verb() {
    return this._verb;
  }

  public get headers() {
    return this._headers;
  }

  public get body() {
    return this._body;
  }
}
