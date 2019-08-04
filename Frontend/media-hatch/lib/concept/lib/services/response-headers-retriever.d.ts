import { HttpResponse } from '@angular/common/http';
export declare class ResponseHeadersRetrieverHelper {
    constructor();
    static getJsonHeaderValue(response: HttpResponse<object>, key: string): any;
}
