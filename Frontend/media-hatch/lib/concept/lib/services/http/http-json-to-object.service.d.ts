import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataListQueryHelper, DataListQueryFilter, DataListQueryHelperConfig } from './data-list-query-helper';
import { LoggerService } from '../log/logger.service';
export declare abstract class HttpJsonToObjectService {
    protected http: HttpClient;
    protected logger: LoggerService;
    protected startsUrl: string;
    protected dataListQueryHelper: DataListQueryHelper;
    constructor(http: HttpClient, logger: LoggerService, startsUrl?: string, dataListQueryHelperConfig?: DataListQueryHelperConfig);
    protected get(route: string, options?: BasicOptions): Observable<Object>;
    protected getArrayBuffer(route: string, options?: BasicOptions): Observable<ArrayBuffer>;
    protected getBlob(route: string, options?: BasicOptions): Observable<Blob>;
    protected post<T>(route: string, body: T, options?: BasicOptions): Observable<Object>;
    protected postAndReturnId<TBody, TId>(route: string, body: TBody, options?: BasicOptions): Observable<TId>;
    protected postAndReturnObject<T>(route: string, body: T, options?: BasicOptions): Observable<T>;
    protected postAndReturnJson<T>(route: string, body: T, type: new () => T, options?: BasicOptions): Observable<T>;
    protected put<T>(route: string, body: T, options?: BasicOptions): Observable<void>;
    protected putAndReturnObject<T>(route: string, body: T, options?: BasicOptions): Observable<T>;
    protected patch<T>(route: string, body: T, options?: BasicOptions): Observable<Object>;
    protected deleteFromRoute(route: string, options?: BasicOptions): Observable<void>;
    protected deleteAndReturnObject<T>(route: string, options?: BasicOptions): Observable<T>;
    protected getJson<T>(route: string, type: new () => T, options?: BasicOptions): Observable<T>;
    protected getJsonArray<T>(route: string, type: new () => T, options?: BasicOptions, tableParams?: TableParams): Observable<T[]>;
    protected getJsonArrayPagination<T extends object>(paginationParams: TablePaginationParams, route: string, type: new () => T, options?: BasicOptions): Observable<PaginationCollection<T>>;
    /**
     * Get a response with an extraction of the header and the body of the type T
     * @param route http route
     * @param headerKeys keys to extract inside the http response header
     * @param bodyType type of the http response body
     * @param options http options
     */
    protected getJsonBodyWithHeaders<T extends object>(route: string, headerKeys: string[], bodyType?: new () => T, options?: BasicOptions): Observable<BodyWithHeaders<T>>;
    /**
     * Get a response with an extraction of the header and the body raw
     * @param route http route
     * @param headerKeys keys to extract inside the http response header
     * @param options http options
     */
    protected getRawBodyWithHeaders(route: string, headerKeys: string[], options?: BasicOptions): Observable<BodyWithHeaders<any>>;
    /**
     * Get a response with an extraction of the header and the body of the type T
     * @param route http route
     * @param headerKeys keys to extract inside the http response header
     * @param bodyType type of the http response body
     * @param options http options
     */
    protected getArrayBodyWithHeaders<T extends object>(route: string, headerKeys: string[], bodyType: new () => T, options?: BasicOptions): Observable<ArrayBodyWithHeaders<T>>;
    protected extractHeaders(response: HttpResponse<any>, headerKeys: string[]): Map<string, object>;
    protected extractBodyWithHeaders<T extends object>(response: HttpResponse<any>, headerKeys: string[], bodyType?: new () => T): BodyWithHeaders<T>;
    protected extractArrayBodyWithHeaders<T extends object>(response: HttpResponse<any>, headerKeys: string[], bodyType: new () => T): ArrayBodyWithHeaders<T>;
    protected setHttpParams<T = any>(name: string, value: T | T[], httpParams?: HttpParams): HttpParams;
    protected getMergedHttpParams(options?: BasicOptions, tableParams?: TableParams): HttpParams;
    protected handleError(): (error: HttpErrorResponse) => Observable<never>;
}
/**
 * options type for get/set/delete/put/post/patch
 */
export interface BasicOptions {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe?: 'body';
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
}
export declare class BodyWithHeaders<T extends object> {
    headers: Map<string, object>;
    body: T;
}
export declare class ArrayBodyWithHeaders<T extends object> {
    headers: Map<string, object>;
    body: T[];
}
export declare class TableParams {
    sort?: string;
    orderDesc?: boolean;
    filters?: DataListQueryFilter[];
}
export declare class TablePaginationParams extends TableParams {
    static readonly httpPaginationHeader = "x-pagination";
    pageSize: number;
    currentPage: number;
}
export interface PaginationHeader {
    pageSize: number;
    currentPage: number;
    totalCount: number;
    totalPages: number;
}
export declare class PaginationCollection<T> {
    pagination: PaginationHeader;
    collection: T[];
}
