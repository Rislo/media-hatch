/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpParams } from '@angular/common/http';
import { JsonToTypedHelper } from '../../utils/json-to-typed-helper';
import { catchError, map, mapTo } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ResponseHeadersRetrieverHelper } from '../response-headers-retriever';
import { DataListQueryHelper } from './data-list-query-helper';
import { isNullOrUndefined } from 'util';
/**
 * @abstract
 */
export class HttpJsonToObjectService {
    /**
     * @param {?} http
     * @param {?} logger
     * @param {?=} startsUrl
     * @param {?=} dataListQueryHelperConfig
     */
    constructor(http, logger, startsUrl = '', dataListQueryHelperConfig = DataListQueryHelper.defaultConfig) {
        this.http = http;
        this.logger = logger;
        this.startsUrl = startsUrl;
        this.dataListQueryHelper = new DataListQueryHelper(dataListQueryHelperConfig);
    }
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    get(route, options) {
        return this.http.get(this.startsUrl + route, options).pipe(catchError(this.handleError()));
    }
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    getArrayBuffer(route, options) {
        return (/** @type {?} */ (this.http
            .get(this.startsUrl + route, Object.assign({}, options, { responseType: 'arraybuffer' }))
            .pipe(catchError(this.handleError()))));
    }
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    getBlob(route, options) {
        return (/** @type {?} */ (this.http
            .get(this.startsUrl + route, Object.assign({}, options, { responseType: 'blob' }))
            .pipe(catchError(this.handleError()))));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    post(route, body, options) {
        return this.http.post(this.startsUrl + route, body, options).pipe(catchError(this.handleError()));
    }
    /**
     * @protected
     * @template TBody, TId
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    postAndReturnId(route, body, options) {
        return this.http.post(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => (/** @type {?} */ (x)))), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    postAndReturnObject(route, body, options) {
        // TODO QNS : Map avec un deserialize
        return this.http.post(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    postAndReturnJson(route, body, type, options) {
        return this.post(route, body, options).pipe(map((/**
         * @param {?} r
         * @return {?}
         */
        r => JsonToTypedHelper.deserialize(r, type))), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    put(route, body, options) {
        return this.http.put(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(mapTo(void 0), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    putAndReturnObject(route, body, options) {
        return this.http.put(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => (/** @type {?} */ (x)))), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    patch(route, body, options) {
        return this.http.patch(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(catchError(this.handleError()));
    }
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    deleteFromRoute(route, options) {
        return this.http.delete(this.startsUrl + route, options).pipe(mapTo(void 0), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    deleteAndReturnObject(route, options) {
        return this.http.delete(this.startsUrl + route, options).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        x => (/** @type {?} */ (x)))), catchError(this.handleError()));
    }
    // protected postJson<T>(
    //     route: string,
    //     value: T,
    //     type: new () => T,
    //     options?: BasicOptions
    // ): Observable<T> {
    //     return this.http.post<T>(this.startsUrl + route, , options)
    // }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    getJson(route, type, options) {
        return this.http.get(this.startsUrl + route, options).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            const obj = JsonToTypedHelper.deserialize(res, type);
            return obj;
        })), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @param {?=} tableParams
     * @return {?}
     */
    getJsonArray(route, type, options, tableParams) {
        return this.http.get(this.startsUrl + route, { params: this.getMergedHttpParams(options, tableParams) }).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => JsonToTypedHelper.deserializeArray((/** @type {?} */ (res)), type))), catchError(this.handleError()));
    }
    /**
     * @protected
     * @template T
     * @param {?} paginationParams
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    getJsonArrayPagination(paginationParams, route, type, options) {
        return this.getArrayBodyWithHeaders(route, [TablePaginationParams.httpPaginationHeader], type, Object.assign({ params: this.dataListQueryHelper.getTablePaginationRequestParameters(paginationParams) }, options)).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            return {
                pagination: (/** @type {?} */ (res.headers.get(TablePaginationParams.httpPaginationHeader))),
                collection: (/** @type {?} */ (res.body))
            };
        })), catchError(this.handleError()));
    }
    /**
     * Get a response with an extraction of the header and the body of the type T
     * @protected
     * @template T
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?=} bodyType type of the http response body
     * @param {?=} options http options
     * @return {?}
     */
    getJsonBodyWithHeaders(route, headerKeys, bodyType, options) {
        return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => this.extractBodyWithHeaders(res, headerKeys, bodyType))), catchError(this.handleError()));
    }
    /**
     * Get a response with an extraction of the header and the body raw
     * @protected
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?=} options http options
     * @return {?}
     */
    getRawBodyWithHeaders(route, headerKeys, options) {
        return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => this.extractBodyWithHeaders(res, headerKeys))), catchError(this.handleError()));
    }
    /**
     * Get a response with an extraction of the header and the body of the type T
     * @protected
     * @template T
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?} bodyType type of the http response body
     * @param {?=} options http options
     * @return {?}
     */
    getArrayBodyWithHeaders(route, headerKeys, bodyType, options) {
        return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => this.extractArrayBodyWithHeaders(res, headerKeys, bodyType))), catchError(this.handleError()));
    }
    /**
     * @protected
     * @param {?} response
     * @param {?} headerKeys
     * @return {?}
     */
    extractHeaders(response, headerKeys) {
        /** @type {?} */
        const headers = new Map();
        for (const key of headerKeys) {
            headers.set(key, ResponseHeadersRetrieverHelper.getJsonHeaderValue(response, key));
        }
        return headers;
    }
    /**
     * @protected
     * @template T
     * @param {?} response
     * @param {?} headerKeys
     * @param {?=} bodyType
     * @return {?}
     */
    extractBodyWithHeaders(response, headerKeys, bodyType) {
        /** @type {?} */
        const result = new BodyWithHeaders();
        result.headers = this.extractHeaders(response, headerKeys);
        if (bodyType) {
            result.body = JsonToTypedHelper.deserialize(response.body, bodyType);
        }
        else {
            result.body = response.body;
        }
        return result;
    }
    /**
     * @protected
     * @template T
     * @param {?} response
     * @param {?} headerKeys
     * @param {?} bodyType
     * @return {?}
     */
    extractArrayBodyWithHeaders(response, headerKeys, bodyType) {
        /** @type {?} */
        const result = new ArrayBodyWithHeaders();
        result.headers = this.extractHeaders(response, headerKeys);
        result.body = JsonToTypedHelper.deserializeArray((/** @type {?} */ (response.body)), bodyType);
        return result;
    }
    /**
     * @protected
     * @template T
     * @param {?} name
     * @param {?} value
     * @param {?=} httpParams
     * @return {?}
     */
    setHttpParams(name, value, httpParams) {
        if (isNullOrUndefined(httpParams)) {
            httpParams = new HttpParams();
        }
        if (!isNullOrUndefined(value)) {
            if (value instanceof Date) {
                return httpParams.set(name, value.toISOString());
            }
            else if (value instanceof Array) {
                if (value.length > 0 && value[0] instanceof Object) {
                    return httpParams.set(name, JSON.stringify(JsonToTypedHelper.serializeArray(value)));
                }
                else {
                    return httpParams.set(name, JSON.stringify(value));
                }
            }
            else if (value instanceof Object) {
                return httpParams.set(name, JSON.stringify(JsonToTypedHelper.serialize(value)));
            }
            else if (typeof value === 'string') {
                return httpParams.set(name, value);
            }
            else {
                return httpParams.set(name, JSON.stringify(value));
            }
        }
        return httpParams;
    }
    /**
     * @protected
     * @param {?=} options
     * @param {?=} tableParams
     * @return {?}
     */
    getMergedHttpParams(options, tableParams) {
        /** @type {?} */
        let mergedHttpParams = this.dataListQueryHelper.getTableRequestParameters(tableParams);
        if (!isNullOrUndefined(options) && !isNullOrUndefined(options.params)) {
            if (options.params instanceof HttpParams) {
                for (const key of options.params.keys()) {
                    for (const value of options.params.getAll(key)) {
                        mergedHttpParams = mergedHttpParams.append(key, value);
                    }
                }
            }
            else {
                for (const key of Object.keys(options.params)) {
                    if (options.params[key] instanceof Array) {
                        for (const value of options.params[key]) {
                            mergedHttpParams = mergedHttpParams.append(key, value);
                        }
                    }
                    else {
                        mergedHttpParams = mergedHttpParams.append(key, (/** @type {?} */ (options.params[key])));
                    }
                }
            }
        }
        return mergedHttpParams;
    }
    /**
     * @protected
     * @return {?}
     */
    handleError() {
        return (/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                this.logger.error(`An error occurred: ${error.error.message}`);
            }
            else if (error instanceof TypeError) {
                // A type conversion occur.
                this.logger.error(`Type convertion: ${error.message}`);
            }
            else {
                this.logger.error(error.message);
            }
            return throwError(error.name);
        });
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    HttpJsonToObjectService.prototype.dataListQueryHelper;
    /**
     * @type {?}
     * @protected
     */
    HttpJsonToObjectService.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    HttpJsonToObjectService.prototype.logger;
    /**
     * @type {?}
     * @protected
     */
    HttpJsonToObjectService.prototype.startsUrl;
}
/**
 * options type for get/set/delete/put/post/patch
 * @record
 */
export function BasicOptions() { }
if (false) {
    /** @type {?|undefined} */
    BasicOptions.prototype.headers;
    /** @type {?|undefined} */
    BasicOptions.prototype.observe;
    /** @type {?|undefined} */
    BasicOptions.prototype.params;
    /** @type {?|undefined} */
    BasicOptions.prototype.reportProgress;
    /** @type {?|undefined} */
    BasicOptions.prototype.responseType;
    /** @type {?|undefined} */
    BasicOptions.prototype.withCredentials;
}
/**
 * @template T
 */
export class BodyWithHeaders {
}
if (false) {
    /** @type {?} */
    BodyWithHeaders.prototype.headers;
    /** @type {?} */
    BodyWithHeaders.prototype.body;
}
/**
 * @template T
 */
export class ArrayBodyWithHeaders {
}
if (false) {
    /** @type {?} */
    ArrayBodyWithHeaders.prototype.headers;
    /** @type {?} */
    ArrayBodyWithHeaders.prototype.body;
}
export class TableParams {
}
if (false) {
    /** @type {?} */
    TableParams.prototype.sort;
    /** @type {?} */
    TableParams.prototype.orderDesc;
    /** @type {?} */
    TableParams.prototype.filters;
}
export class TablePaginationParams extends TableParams {
}
TablePaginationParams.httpPaginationHeader = 'x-pagination';
if (false) {
    /** @type {?} */
    TablePaginationParams.httpPaginationHeader;
    /** @type {?} */
    TablePaginationParams.prototype.pageSize;
    /** @type {?} */
    TablePaginationParams.prototype.currentPage;
}
/**
 * @record
 */
export function PaginationHeader() { }
if (false) {
    /** @type {?} */
    PaginationHeader.prototype.pageSize;
    /** @type {?} */
    PaginationHeader.prototype.currentPage;
    /** @type {?} */
    PaginationHeader.prototype.totalCount;
    /** @type {?} */
    PaginationHeader.prototype.totalPages;
}
/**
 * @template T
 */
export class PaginationCollection {
}
if (false) {
    /** @type {?} */
    PaginationCollection.prototype.pagination;
    /** @type {?} */
    PaginationCollection.prototype.collection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1qc29uLXRvLW9iamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29uY2VwdC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwL2h0dHAtanNvbi10by1vYmplY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFjLFVBQVUsRUFBZ0QsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxtQkFBbUIsRUFBa0QsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFHekMsTUFBTSxPQUFnQix1QkFBdUI7Ozs7Ozs7SUFHM0MsWUFDWSxJQUFnQixFQUNoQixNQUFxQixFQUNyQixZQUFZLEVBQUUsRUFDeEIsNEJBQXVELG1CQUFtQixDQUFDLGFBQWE7UUFIOUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFHeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7Ozs7O0lBRVMsR0FBRyxDQUFDLEtBQWEsRUFBRSxPQUFzQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMs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LHlDQUFpQjs7SUFDakIsNENBQW9COzs7OztBQUd0QixzQ0FLQzs7O0lBSkMsb0NBQWlCOztJQUNqQix1Q0FBb0I7O0lBQ3BCLHNDQUFtQjs7SUFDbkIsc0NBQW1COzs7OztBQUdyQixNQUFNLE9BQU8sb0JBQW9CO0NBR2hDOzs7SUFGQywwQ0FBNkI7O0lBQzdCLDBDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMsIEh0dHBIZWFkZXJzLCBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBKc29uVG9UeXBlZEhlbHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2pzb24tdG8tdHlwZWQtaGVscGVyJztcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSZXNwb25zZUhlYWRlcnNSZXRyaWV2ZXJIZWxwZXIgfSBmcm9tICcuLi9yZXNwb25zZS1oZWFkZXJzLXJldHJpZXZlcic7XHJcbmltcG9ydCB7IERhdGFMaXN0UXVlcnlIZWxwZXIsIERhdGFMaXN0UXVlcnlGaWx0ZXIsIERhdGFMaXN0UXVlcnlIZWxwZXJDb25maWcgfSBmcm9tICcuL2RhdGEtbGlzdC1xdWVyeS1oZWxwZXInO1xyXG5pbXBvcnQgeyBpc051bGxPclVuZGVmaW5lZCB9IGZyb20gJ3V0aWwnO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBIdHRwSnNvblRvT2JqZWN0U2VydmljZSB7XHJcbiAgcHJvdGVjdGVkIGRhdGFMaXN0UXVlcnlIZWxwZXI6IERhdGFMaXN0UXVlcnlIZWxwZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgcHJvdGVjdGVkIHN0YXJ0c1VybCA9ICcnLFxyXG4gICAgZGF0YUxpc3RRdWVyeUhlbHBlckNvbmZpZzogRGF0YUxpc3RRdWVyeUhlbHBlckNvbmZpZyA9IERhdGFMaXN0UXVlcnlIZWxwZXIuZGVmYXVsdENvbmZpZ1xyXG4gICkge1xyXG4gICAgdGhpcy5kYXRhTGlzdFF1ZXJ5SGVscGVyID0gbmV3IERhdGFMaXN0UXVlcnlIZWxwZXIoZGF0YUxpc3RRdWVyeUhlbHBlckNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0KHJvdXRlOiBzdHJpbmcsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIG9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRBcnJheUJ1ZmZlcihyb3V0ZTogc3RyaW5nLCBvcHRpb25zPzogQmFzaWNPcHRpb25zKTogT2JzZXJ2YWJsZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInIH0pKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSkpIGFzIE9ic2VydmFibGU8QXJyYXlCdWZmZXI+O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEJsb2Iocm91dGU6IHN0cmluZywgb3B0aW9ucz86IEJhc2ljT3B0aW9ucyk6IE9ic2VydmFibGU8QmxvYj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAuZ2V0KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSkpXHJcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKSkgYXMgT2JzZXJ2YWJsZTxCbG9iPjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwb3N0PFQ+KHJvdXRlOiBzdHJpbmcsIGJvZHk6IFQsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBib2R5LCBvcHRpb25zKS5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdEFuZFJldHVybklkPFRCb2R5LCBUSWQ+KHJvdXRlOiBzdHJpbmcsIGJvZHk6IFRCb2R5LCBvcHRpb25zPzogQmFzaWNPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgSnNvblRvVHlwZWRIZWxwZXIuc2VyaWFsaXplKGJvZHkpLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICBtYXAoeCA9PiB4IGFzIFRJZCksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwb3N0QW5kUmV0dXJuT2JqZWN0PFQ+KHJvdXRlOiBzdHJpbmcsIGJvZHk6IFQsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpIHtcclxuICAgIC8vIFRPRE8gUU5TIDogTWFwIGF2ZWMgdW4gZGVzZXJpYWxpemVcclxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBKc29uVG9UeXBlZEhlbHBlci5zZXJpYWxpemUoYm9keSksIG9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwb3N0QW5kUmV0dXJuSnNvbjxUPihyb3V0ZTogc3RyaW5nLCBib2R5OiBULCB0eXBlOiBuZXcgKCkgPT4gVCwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zdChyb3V0ZSwgYm9keSwgb3B0aW9ucykucGlwZShcclxuICAgICAgbWFwKHIgPT4gSnNvblRvVHlwZWRIZWxwZXIuZGVzZXJpYWxpemUociwgdHlwZSkpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHV0PFQ+KHJvdXRlOiBzdHJpbmcsIGJvZHk6IFQsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIEpzb25Ub1R5cGVkSGVscGVyLnNlcmlhbGl6ZShib2R5KSwgb3B0aW9ucykucGlwZShcclxuICAgICAgbWFwVG8odm9pZCAwKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHB1dEFuZFJldHVybk9iamVjdDxUPihyb3V0ZTogc3RyaW5nLCBib2R5OiBULCBvcHRpb25zPzogQmFzaWNPcHRpb25zKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBKc29uVG9UeXBlZEhlbHBlci5zZXJpYWxpemUoYm9keSksIG9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1hcCh4ID0+IHggYXMgVCksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwYXRjaDxUPihyb3V0ZTogc3RyaW5nLCBib2R5OiBULCBvcHRpb25zPzogQmFzaWNPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIEpzb25Ub1R5cGVkSGVscGVyLnNlcmlhbGl6ZShib2R5KSwgb3B0aW9ucykucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlbGV0ZUZyb21Sb3V0ZShyb3V0ZTogc3RyaW5nLCBvcHRpb25zPzogQmFzaWNPcHRpb25zKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICBtYXBUbyh2b2lkIDApLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZGVsZXRlQW5kUmV0dXJuT2JqZWN0PFQ+KHJvdXRlOiBzdHJpbmcsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIG9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1hcCh4ID0+IHggYXMgVCksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHByb3RlY3RlZCBwb3N0SnNvbjxUPihcclxuICAvLyAgICAgcm91dGU6IHN0cmluZyxcclxuICAvLyAgICAgdmFsdWU6IFQsXHJcbiAgLy8gICAgIHR5cGU6IG5ldyAoKSA9PiBULFxyXG4gIC8vICAgICBvcHRpb25zPzogQmFzaWNPcHRpb25zXHJcbiAgLy8gKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxUPih0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCAsIG9wdGlvbnMpXHJcbiAgLy8gfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0SnNvbjxUPihyb3V0ZTogc3RyaW5nLCB0eXBlOiBuZXcgKCkgPT4gVCwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucyk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgb3B0aW9ucykucGlwZShcclxuICAgICAgbWFwKHJlcyA9PiB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0gSnNvblRvVHlwZWRIZWxwZXIuZGVzZXJpYWxpemUocmVzLCB0eXBlKTtcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEpzb25BcnJheTxUPihyb3V0ZTogc3RyaW5nLCB0eXBlOiBuZXcgKCkgPT4gVCwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucywgdGFibGVQYXJhbXM/OiBUYWJsZVBhcmFtcyk6IE9ic2VydmFibGU8VFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCB7IHBhcmFtczogdGhpcy5nZXRNZXJnZWRIdHRwUGFyYW1zKG9wdGlvbnMsIHRhYmxlUGFyYW1zKSB9KS5waXBlKFxyXG4gICAgICBtYXAocmVzID0+IEpzb25Ub1R5cGVkSGVscGVyLmRlc2VyaWFsaXplQXJyYXkocmVzIGFzIG9iamVjdFtdLCB0eXBlKSksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRKc29uQXJyYXlQYWdpbmF0aW9uPFQgZXh0ZW5kcyBvYmplY3Q+KFxyXG4gICAgcGFnaW5hdGlvblBhcmFtczogVGFibGVQYWdpbmF0aW9uUGFyYW1zLFxyXG4gICAgcm91dGU6IHN0cmluZyxcclxuICAgIHR5cGU6IG5ldyAoKSA9PiBULFxyXG4gICAgb3B0aW9ucz86IEJhc2ljT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8UGFnaW5hdGlvbkNvbGxlY3Rpb248VD4+IHtcclxuICAgIHJldHVybiB0aGlzLmdldEFycmF5Qm9keVdpdGhIZWFkZXJzKFxyXG4gICAgICByb3V0ZSxcclxuICAgICAgW1RhYmxlUGFnaW5hdGlvblBhcmFtcy5odHRwUGFnaW5hdGlvbkhlYWRlcl0sXHJcbiAgICAgIHR5cGUsXHJcbiAgICAgIE9iamVjdC5hc3NpZ24oeyBwYXJhbXM6IHRoaXMuZGF0YUxpc3RRdWVyeUhlbHBlci5nZXRUYWJsZVBhZ2luYXRpb25SZXF1ZXN0UGFyYW1ldGVycyhwYWdpbmF0aW9uUGFyYW1zKSB9LCBvcHRpb25zKVxyXG4gICAgKS5waXBlKFxyXG4gICAgICBtYXAocmVzID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgcGFnaW5hdGlvbjogcmVzLmhlYWRlcnMuZ2V0KFRhYmxlUGFnaW5hdGlvblBhcmFtcy5odHRwUGFnaW5hdGlvbkhlYWRlcikgYXMgUGFnaW5hdGlvbkhlYWRlcixcclxuICAgICAgICAgIGNvbGxlY3Rpb246IHJlcy5ib2R5IGFzIFRbXVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0pLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSByZXNwb25zZSB3aXRoIGFuIGV4dHJhY3Rpb24gb2YgdGhlIGhlYWRlciBhbmQgdGhlIGJvZHkgb2YgdGhlIHR5cGUgVFxyXG4gICAqIEBwYXJhbSByb3V0ZSBodHRwIHJvdXRlXHJcbiAgICogQHBhcmFtIGhlYWRlcktleXMga2V5cyB0byBleHRyYWN0IGluc2lkZSB0aGUgaHR0cCByZXNwb25zZSBoZWFkZXJcclxuICAgKiBAcGFyYW0gYm9keVR5cGUgdHlwZSBvZiB0aGUgaHR0cCByZXNwb25zZSBib2R5XHJcbiAgICogQHBhcmFtIG9wdGlvbnMgaHR0cCBvcHRpb25zXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldEpzb25Cb2R5V2l0aEhlYWRlcnM8VCBleHRlbmRzIG9iamVjdD4oXHJcbiAgICByb3V0ZTogc3RyaW5nLFxyXG4gICAgaGVhZGVyS2V5czogc3RyaW5nW10sXHJcbiAgICBib2R5VHlwZT86IG5ldyAoKSA9PiBULFxyXG4gICAgb3B0aW9ucz86IEJhc2ljT3B0aW9uc1xyXG4gICk6IE9ic2VydmFibGU8Qm9keVdpdGhIZWFkZXJzPFQ+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIdHRwUmVzcG9uc2U8b2JqZWN0Pj4odGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgT2JqZWN0LmFzc2lnbihvcHRpb25zID8gb3B0aW9ucyA6IHt9LCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSkpLnBpcGUoXHJcbiAgICAgIG1hcChyZXMgPT4gdGhpcy5leHRyYWN0Qm9keVdpdGhIZWFkZXJzKHJlcywgaGVhZGVyS2V5cywgYm9keVR5cGUpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcmVzcG9uc2Ugd2l0aCBhbiBleHRyYWN0aW9uIG9mIHRoZSBoZWFkZXIgYW5kIHRoZSBib2R5IHJhd1xyXG4gICAqIEBwYXJhbSByb3V0ZSBodHRwIHJvdXRlXHJcbiAgICogQHBhcmFtIGhlYWRlcktleXMga2V5cyB0byBleHRyYWN0IGluc2lkZSB0aGUgaHR0cCByZXNwb25zZSBoZWFkZXJcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBodHRwIG9wdGlvbnNcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0UmF3Qm9keVdpdGhIZWFkZXJzKHJvdXRlOiBzdHJpbmcsIGhlYWRlcktleXM6IHN0cmluZ1tdLCBvcHRpb25zPzogQmFzaWNPcHRpb25zKTogT2JzZXJ2YWJsZTxCb2R5V2l0aEhlYWRlcnM8YW55Pj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SHR0cFJlc3BvbnNlPGFueT4+KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIE9iamVjdC5hc3NpZ24ob3B0aW9ucyA/IG9wdGlvbnMgOiB7fSwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pKS5waXBlKFxyXG4gICAgICBtYXAocmVzID0+IHRoaXMuZXh0cmFjdEJvZHlXaXRoSGVhZGVycyhyZXMsIGhlYWRlcktleXMpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcmVzcG9uc2Ugd2l0aCBhbiBleHRyYWN0aW9uIG9mIHRoZSBoZWFkZXIgYW5kIHRoZSBib2R5IG9mIHRoZSB0eXBlIFRcclxuICAgKiBAcGFyYW0gcm91dGUgaHR0cCByb3V0ZVxyXG4gICAqIEBwYXJhbSBoZWFkZXJLZXlzIGtleXMgdG8gZXh0cmFjdCBpbnNpZGUgdGhlIGh0dHAgcmVzcG9uc2UgaGVhZGVyXHJcbiAgICogQHBhcmFtIGJvZHlUeXBlIHR5cGUgb2YgdGhlIGh0dHAgcmVzcG9uc2UgYm9keVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIGh0dHAgb3B0aW9uc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRBcnJheUJvZHlXaXRoSGVhZGVyczxUIGV4dGVuZHMgb2JqZWN0PihcclxuICAgIHJvdXRlOiBzdHJpbmcsXHJcbiAgICBoZWFkZXJLZXlzOiBzdHJpbmdbXSxcclxuICAgIGJvZHlUeXBlOiBuZXcgKCkgPT4gVCxcclxuICAgIG9wdGlvbnM/OiBCYXNpY09wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPEFycmF5Qm9keVdpdGhIZWFkZXJzPFQ+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxIdHRwUmVzcG9uc2U8b2JqZWN0Pj4odGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgT2JqZWN0LmFzc2lnbihvcHRpb25zID8gb3B0aW9ucyA6IHt9LCB7IG9ic2VydmU6ICdyZXNwb25zZScgfSkpLnBpcGUoXHJcbiAgICAgIG1hcChyZXMgPT4gdGhpcy5leHRyYWN0QXJyYXlCb2R5V2l0aEhlYWRlcnMocmVzLCBoZWFkZXJLZXlzLCBib2R5VHlwZSkpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZXh0cmFjdEhlYWRlcnMocmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+LCBoZWFkZXJLZXlzOiBzdHJpbmdbXSk6IE1hcDxzdHJpbmcsIG9iamVjdD4ge1xyXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBNYXA8c3RyaW5nLCBvYmplY3Q+KCk7XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBoZWFkZXJLZXlzKSB7XHJcbiAgICAgIGhlYWRlcnMuc2V0KGtleSwgUmVzcG9uc2VIZWFkZXJzUmV0cmlldmVySGVscGVyLmdldEpzb25IZWFkZXJWYWx1ZShyZXNwb25zZSwga2V5KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaGVhZGVycztcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBleHRyYWN0Qm9keVdpdGhIZWFkZXJzPFQgZXh0ZW5kcyBvYmplY3Q+KFxyXG4gICAgcmVzcG9uc2U6IEh0dHBSZXNwb25zZTxhbnk+LFxyXG4gICAgaGVhZGVyS2V5czogc3RyaW5nW10sXHJcbiAgICBib2R5VHlwZT86IG5ldyAoKSA9PiBUXHJcbiAgKTogQm9keVdpdGhIZWFkZXJzPFQ+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBCb2R5V2l0aEhlYWRlcnM8VD4oKTtcclxuICAgIHJlc3VsdC5oZWFkZXJzID0gdGhpcy5leHRyYWN0SGVhZGVycyhyZXNwb25zZSwgaGVhZGVyS2V5cyk7XHJcbiAgICBpZiAoYm9keVR5cGUpIHtcclxuICAgICAgcmVzdWx0LmJvZHkgPSBKc29uVG9UeXBlZEhlbHBlci5kZXNlcmlhbGl6ZShyZXNwb25zZS5ib2R5LCBib2R5VHlwZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXN1bHQuYm9keSA9IHJlc3BvbnNlLmJvZHk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGV4dHJhY3RBcnJheUJvZHlXaXRoSGVhZGVyczxUIGV4dGVuZHMgb2JqZWN0PihcclxuICAgIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PixcclxuICAgIGhlYWRlcktleXM6IHN0cmluZ1tdLFxyXG4gICAgYm9keVR5cGU6IG5ldyAoKSA9PiBUXHJcbiAgKTogQXJyYXlCb2R5V2l0aEhlYWRlcnM8VD4ge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5Qm9keVdpdGhIZWFkZXJzPFQ+KCk7XHJcbiAgICByZXN1bHQuaGVhZGVycyA9IHRoaXMuZXh0cmFjdEhlYWRlcnMocmVzcG9uc2UsIGhlYWRlcktleXMpO1xyXG4gICAgcmVzdWx0LmJvZHkgPSBKc29uVG9UeXBlZEhlbHBlci5kZXNlcmlhbGl6ZUFycmF5KHJlc3BvbnNlLmJvZHkgYXMgb2JqZWN0W10sIGJvZHlUeXBlKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgc2V0SHR0cFBhcmFtczxUID0gYW55PihuYW1lOiBzdHJpbmcsIHZhbHVlOiBUIHwgVFtdLCBodHRwUGFyYW1zPzogSHR0cFBhcmFtcyk6IEh0dHBQYXJhbXMge1xyXG4gICAgaWYgKGlzTnVsbE9yVW5kZWZpbmVkKGh0dHBQYXJhbXMpKSB7XHJcbiAgICAgIGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFpc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcclxuICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgIHJldHVybiBodHRwUGFyYW1zLnNldChuYW1lLCB2YWx1ZS50b0lTT1N0cmluZygpKTtcclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsdWVbMF0gaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuICAgICAgICAgIHJldHVybiBodHRwUGFyYW1zLnNldChuYW1lLCBKU09OLnN0cmluZ2lmeShKc29uVG9UeXBlZEhlbHBlci5zZXJpYWxpemVBcnJheTxUPih2YWx1ZSkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGh0dHBQYXJhbXMuc2V0KG5hbWUsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGh0dHBQYXJhbXMuc2V0KG5hbWUsIEpTT04uc3RyaW5naWZ5KEpzb25Ub1R5cGVkSGVscGVyLnNlcmlhbGl6ZTxUPih2YWx1ZSkpKTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGh0dHBQYXJhbXMuc2V0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gaHR0cFBhcmFtcy5zZXQobmFtZSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0TWVyZ2VkSHR0cFBhcmFtcyhvcHRpb25zPzogQmFzaWNPcHRpb25zLCB0YWJsZVBhcmFtcz86IFRhYmxlUGFyYW1zKTogSHR0cFBhcmFtcyB7XHJcbiAgICBsZXQgbWVyZ2VkSHR0cFBhcmFtcyA9IHRoaXMuZGF0YUxpc3RRdWVyeUhlbHBlci5nZXRUYWJsZVJlcXVlc3RQYXJhbWV0ZXJzKHRhYmxlUGFyYW1zKTtcclxuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQob3B0aW9ucykgJiYgIWlzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMucGFyYW1zKSkge1xyXG4gICAgICBpZiAob3B0aW9ucy5wYXJhbXMgaW5zdGFuY2VvZiBIdHRwUGFyYW1zKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Ygb3B0aW9ucy5wYXJhbXMua2V5cygpKSB7XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG9wdGlvbnMucGFyYW1zLmdldEFsbChrZXkpKSB7XHJcbiAgICAgICAgICAgIG1lcmdlZEh0dHBQYXJhbXMgPSBtZXJnZWRIdHRwUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMob3B0aW9ucy5wYXJhbXMpKSB7XHJcbiAgICAgICAgICBpZiAob3B0aW9ucy5wYXJhbXNba2V5XSBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWUgb2Ygb3B0aW9ucy5wYXJhbXNba2V5XSkge1xyXG4gICAgICAgICAgICAgIG1lcmdlZEh0dHBQYXJhbXMgPSBtZXJnZWRIdHRwUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVyZ2VkSHR0cFBhcmFtcyA9IG1lcmdlZEh0dHBQYXJhbXMuYXBwZW5kKGtleSwgb3B0aW9ucy5wYXJhbXNba2V5XSBhcyBzdHJpbmcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1lcmdlZEh0dHBQYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaGFuZGxlRXJyb3IoKSB7XHJcbiAgICByZXR1cm4gKGVycm9yOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvckV2ZW50KSB7XHJcbiAgICAgICAgLy8gQSBjbGllbnQtc2lkZSBvciBuZXR3b3JrIGVycm9yIG9jY3VycmVkLiBIYW5kbGUgaXQgYWNjb3JkaW5nbHkuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYEFuIGVycm9yIG9jY3VycmVkOiAke2Vycm9yLmVycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuICAgICAgICAvLyBBIHR5cGUgY29udmVyc2lvbiBvY2N1ci5cclxuICAgICAgICB0aGlzLmxvZ2dlci5lcnJvcihgVHlwZSBjb252ZXJ0aW9uOiAke2Vycm9yLm1lc3NhZ2V9YCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyb3IubmFtZSk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIG9wdGlvbnMgdHlwZSBmb3IgZ2V0L3NldC9kZWxldGUvcHV0L3Bvc3QvcGF0Y2hcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFzaWNPcHRpb25zIHtcclxuICBoZWFkZXJzPzpcclxuICAgIHwgSHR0cEhlYWRlcnNcclxuICAgIHwge1xyXG4gICAgICAgIFtoZWFkZXI6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gICAgICB9O1xyXG4gIG9ic2VydmU/OiAnYm9keSc7XHJcbiAgcGFyYW1zPzpcclxuICAgIHwgSHR0cFBhcmFtc1xyXG4gICAgfCB7XHJcbiAgICAgICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgfTtcclxuICByZXBvcnRQcm9ncmVzcz86IGJvb2xlYW47XHJcbiAgcmVzcG9uc2VUeXBlPzogJ2pzb24nO1xyXG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb2R5V2l0aEhlYWRlcnM8VCBleHRlbmRzIG9iamVjdD4ge1xyXG4gIGhlYWRlcnM6IE1hcDxzdHJpbmcsIG9iamVjdD47XHJcbiAgYm9keTogVDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5Qm9keVdpdGhIZWFkZXJzPFQgZXh0ZW5kcyBvYmplY3Q+IHtcclxuICBoZWFkZXJzOiBNYXA8c3RyaW5nLCBvYmplY3Q+O1xyXG4gIGJvZHk6IFRbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlUGFyYW1zIHtcclxuICBzb3J0Pzogc3RyaW5nO1xyXG4gIG9yZGVyRGVzYz86IGJvb2xlYW47XHJcbiAgZmlsdGVycz86IERhdGFMaXN0UXVlcnlGaWx0ZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRhYmxlUGFnaW5hdGlvblBhcmFtcyBleHRlbmRzIFRhYmxlUGFyYW1zIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgaHR0cFBhZ2luYXRpb25IZWFkZXIgPSAneC1wYWdpbmF0aW9uJztcclxuXHJcbiAgcGFnZVNpemU6IG51bWJlcjtcclxuICBjdXJyZW50UGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25IZWFkZXIge1xyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICB0b3RhbENvdW50OiBudW1iZXI7XHJcbiAgdG90YWxQYWdlczogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbGxlY3Rpb248VD4ge1xyXG4gIHBhZ2luYXRpb246IFBhZ2luYXRpb25IZWFkZXI7XHJcbiAgY29sbGVjdGlvbjogVFtdO1xyXG59XHJcbiJdfQ==