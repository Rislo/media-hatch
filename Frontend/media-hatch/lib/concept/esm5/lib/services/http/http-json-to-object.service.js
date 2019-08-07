/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * @abstract
 */
HttpJsonToObjectService = /** @class */ (function () {
    function HttpJsonToObjectService(http, logger, startsUrl, dataListQueryHelperConfig) {
        if (startsUrl === void 0) { startsUrl = ''; }
        if (dataListQueryHelperConfig === void 0) { dataListQueryHelperConfig = DataListQueryHelper.defaultConfig; }
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
    HttpJsonToObjectService.prototype.get = /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    function (route, options) {
        return this.http.get(this.startsUrl + route, options).pipe(catchError(this.handleError()));
    };
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.getArrayBuffer = /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    function (route, options) {
        return (/** @type {?} */ (this.http
            .get(this.startsUrl + route, Object.assign({}, options, { responseType: 'arraybuffer' }))
            .pipe(catchError(this.handleError()))));
    };
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.getBlob = /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    function (route, options) {
        return (/** @type {?} */ (this.http
            .get(this.startsUrl + route, Object.assign({}, options, { responseType: 'blob' }))
            .pipe(catchError(this.handleError()))));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.post = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (route, body, options) {
        return this.http.post(this.startsUrl + route, body, options).pipe(catchError(this.handleError()));
    };
    /**
     * @protected
     * @template TBody, TId
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.postAndReturnId = /**
     * @protected
     * @template TBody, TId
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (route, body, options) {
        return this.http.post(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (/** @type {?} */ (x)); })), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.postAndReturnObject = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (route, body, options) {
        // TODO QNS : Map avec un deserialize
        return this.http.post(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.postAndReturnJson = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    function (route, body, type, options) {
        return this.post(route, body, options).pipe(map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return JsonToTypedHelper.deserialize(r, type); })), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.put = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (route, body, options) {
        return this.http.put(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(mapTo(void 0), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.putAndReturnObject = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (route, body, options) {
        return this.http.put(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (/** @type {?} */ (x)); })), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.patch = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (route, body, options) {
        return this.http.patch(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(catchError(this.handleError()));
    };
    /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.deleteFromRoute = /**
     * @protected
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    function (route, options) {
        return this.http.delete(this.startsUrl + route, options).pipe(mapTo(void 0), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.deleteAndReturnObject = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?=} options
     * @return {?}
     */
    function (route, options) {
        return this.http.delete(this.startsUrl + route, options).pipe(map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return (/** @type {?} */ (x)); })), catchError(this.handleError()));
    };
    // protected postJson<T>(
    //     route: string,
    //     value: T,
    //     type: new () => T,
    //     options?: BasicOptions
    // ): Observable<T> {
    //     return this.http.post<T>(this.startsUrl + route, , options)
    // }
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
    HttpJsonToObjectService.prototype.getJson = 
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
    function (route, type, options) {
        return this.http.get(this.startsUrl + route, options).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var obj = JsonToTypedHelper.deserialize(res, type);
            return obj;
        })), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @param {?=} tableParams
     * @return {?}
     */
    HttpJsonToObjectService.prototype.getJsonArray = /**
     * @protected
     * @template T
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @param {?=} tableParams
     * @return {?}
     */
    function (route, type, options, tableParams) {
        return this.http.get(this.startsUrl + route, { params: this.getMergedHttpParams(options, tableParams) }).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return JsonToTypedHelper.deserializeArray((/** @type {?} */ (res)), type); })), catchError(this.handleError()));
    };
    /**
     * @protected
     * @template T
     * @param {?} paginationParams
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.getJsonArrayPagination = /**
     * @protected
     * @template T
     * @param {?} paginationParams
     * @param {?} route
     * @param {?} type
     * @param {?=} options
     * @return {?}
     */
    function (paginationParams, route, type, options) {
        return this.getArrayBodyWithHeaders(route, [TablePaginationParams.httpPaginationHeader], type, Object.assign({ params: this.dataListQueryHelper.getTablePaginationRequestParameters(paginationParams) }, options)).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            return {
                pagination: (/** @type {?} */ (res.headers.get(TablePaginationParams.httpPaginationHeader))),
                collection: (/** @type {?} */ (res.body))
            };
        })), catchError(this.handleError()));
    };
    /**
     * Get a response with an extraction of the header and the body of the type T
     * @param route http route
     * @param headerKeys keys to extract inside the http response header
     * @param bodyType type of the http response body
     * @param options http options
     */
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
    HttpJsonToObjectService.prototype.getJsonBodyWithHeaders = /**
     * Get a response with an extraction of the header and the body of the type T
     * @protected
     * @template T
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?=} bodyType type of the http response body
     * @param {?=} options http options
     * @return {?}
     */
    function (route, headerKeys, bodyType, options) {
        var _this = this;
        return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.extractBodyWithHeaders(res, headerKeys, bodyType); })), catchError(this.handleError()));
    };
    /**
     * Get a response with an extraction of the header and the body raw
     * @param route http route
     * @param headerKeys keys to extract inside the http response header
     * @param options http options
     */
    /**
     * Get a response with an extraction of the header and the body raw
     * @protected
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?=} options http options
     * @return {?}
     */
    HttpJsonToObjectService.prototype.getRawBodyWithHeaders = /**
     * Get a response with an extraction of the header and the body raw
     * @protected
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?=} options http options
     * @return {?}
     */
    function (route, headerKeys, options) {
        var _this = this;
        return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.extractBodyWithHeaders(res, headerKeys); })), catchError(this.handleError()));
    };
    /**
     * Get a response with an extraction of the header and the body of the type T
     * @param route http route
     * @param headerKeys keys to extract inside the http response header
     * @param bodyType type of the http response body
     * @param options http options
     */
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
    HttpJsonToObjectService.prototype.getArrayBodyWithHeaders = /**
     * Get a response with an extraction of the header and the body of the type T
     * @protected
     * @template T
     * @param {?} route http route
     * @param {?} headerKeys keys to extract inside the http response header
     * @param {?} bodyType type of the http response body
     * @param {?=} options http options
     * @return {?}
     */
    function (route, headerKeys, bodyType, options) {
        var _this = this;
        return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return _this.extractArrayBodyWithHeaders(res, headerKeys, bodyType); })), catchError(this.handleError()));
    };
    /**
     * @protected
     * @param {?} response
     * @param {?} headerKeys
     * @return {?}
     */
    HttpJsonToObjectService.prototype.extractHeaders = /**
     * @protected
     * @param {?} response
     * @param {?} headerKeys
     * @return {?}
     */
    function (response, headerKeys) {
        var e_1, _a;
        /** @type {?} */
        var headers = new Map();
        try {
            for (var headerKeys_1 = tslib_1.__values(headerKeys), headerKeys_1_1 = headerKeys_1.next(); !headerKeys_1_1.done; headerKeys_1_1 = headerKeys_1.next()) {
                var key = headerKeys_1_1.value;
                headers.set(key, ResponseHeadersRetrieverHelper.getJsonHeaderValue(response, key));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (headerKeys_1_1 && !headerKeys_1_1.done && (_a = headerKeys_1.return)) _a.call(headerKeys_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return headers;
    };
    /**
     * @protected
     * @template T
     * @param {?} response
     * @param {?} headerKeys
     * @param {?=} bodyType
     * @return {?}
     */
    HttpJsonToObjectService.prototype.extractBodyWithHeaders = /**
     * @protected
     * @template T
     * @param {?} response
     * @param {?} headerKeys
     * @param {?=} bodyType
     * @return {?}
     */
    function (response, headerKeys, bodyType) {
        /** @type {?} */
        var result = new BodyWithHeaders();
        result.headers = this.extractHeaders(response, headerKeys);
        if (bodyType) {
            result.body = JsonToTypedHelper.deserialize(response.body, bodyType);
        }
        else {
            result.body = response.body;
        }
        return result;
    };
    /**
     * @protected
     * @template T
     * @param {?} response
     * @param {?} headerKeys
     * @param {?} bodyType
     * @return {?}
     */
    HttpJsonToObjectService.prototype.extractArrayBodyWithHeaders = /**
     * @protected
     * @template T
     * @param {?} response
     * @param {?} headerKeys
     * @param {?} bodyType
     * @return {?}
     */
    function (response, headerKeys, bodyType) {
        /** @type {?} */
        var result = new ArrayBodyWithHeaders();
        result.headers = this.extractHeaders(response, headerKeys);
        result.body = JsonToTypedHelper.deserializeArray((/** @type {?} */ (response.body)), bodyType);
        return result;
    };
    /**
     * @protected
     * @template T
     * @param {?} name
     * @param {?} value
     * @param {?=} httpParams
     * @return {?}
     */
    HttpJsonToObjectService.prototype.setHttpParams = /**
     * @protected
     * @template T
     * @param {?} name
     * @param {?} value
     * @param {?=} httpParams
     * @return {?}
     */
    function (name, value, httpParams) {
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
    };
    /**
     * @protected
     * @param {?=} options
     * @param {?=} tableParams
     * @return {?}
     */
    HttpJsonToObjectService.prototype.getMergedHttpParams = /**
     * @protected
     * @param {?=} options
     * @param {?=} tableParams
     * @return {?}
     */
    function (options, tableParams) {
        var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
        /** @type {?} */
        var mergedHttpParams = this.dataListQueryHelper.getTableRequestParameters(tableParams);
        if (!isNullOrUndefined(options) && !isNullOrUndefined(options.params)) {
            if (options.params instanceof HttpParams) {
                try {
                    for (var _e = tslib_1.__values(options.params.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var key = _f.value;
                        try {
                            for (var _g = tslib_1.__values(options.params.getAll(key)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                var value = _h.value;
                                mergedHttpParams = mergedHttpParams.append(key, value);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_a = _e.return)) _a.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            else {
                try {
                    for (var _j = tslib_1.__values(Object.keys(options.params)), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var key = _k.value;
                        if (options.params[key] instanceof Array) {
                            try {
                                for (var _l = tslib_1.__values(options.params[key]), _m = _l.next(); !_m.done; _m = _l.next()) {
                                    var value = _m.value;
                                    mergedHttpParams = mergedHttpParams.append(key, value);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                        else {
                            mergedHttpParams = mergedHttpParams.append(key, (/** @type {?} */ (options.params[key])));
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        return mergedHttpParams;
    };
    /**
     * @protected
     * @return {?}
     */
    HttpJsonToObjectService.prototype.handleError = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            if (error.error instanceof ErrorEvent) {
                // A client-side or network error occurred. Handle it accordingly.
                _this.logger.error("An error occurred: " + error.error.message);
            }
            else if (error instanceof TypeError) {
                // A type conversion occur.
                _this.logger.error("Type convertion: " + error.message);
            }
            else {
                _this.logger.error(error.message);
            }
            return throwError(error.name);
        });
    };
    return HttpJsonToObjectService;
}());
/**
 * @abstract
 */
export { HttpJsonToObjectService };
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
var /**
 * @template T
 */
BodyWithHeaders = /** @class */ (function () {
    function BodyWithHeaders() {
    }
    return BodyWithHeaders;
}());
/**
 * @template T
 */
export { BodyWithHeaders };
if (false) {
    /** @type {?} */
    BodyWithHeaders.prototype.headers;
    /** @type {?} */
    BodyWithHeaders.prototype.body;
}
/**
 * @template T
 */
var /**
 * @template T
 */
ArrayBodyWithHeaders = /** @class */ (function () {
    function ArrayBodyWithHeaders() {
    }
    return ArrayBodyWithHeaders;
}());
/**
 * @template T
 */
export { ArrayBodyWithHeaders };
if (false) {
    /** @type {?} */
    ArrayBodyWithHeaders.prototype.headers;
    /** @type {?} */
    ArrayBodyWithHeaders.prototype.body;
}
var TableParams = /** @class */ (function () {
    function TableParams() {
    }
    return TableParams;
}());
export { TableParams };
if (false) {
    /** @type {?} */
    TableParams.prototype.sort;
    /** @type {?} */
    TableParams.prototype.orderDesc;
    /** @type {?} */
    TableParams.prototype.filters;
}
var TablePaginationParams = /** @class */ (function (_super) {
    tslib_1.__extends(TablePaginationParams, _super);
    function TablePaginationParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TablePaginationParams.httpPaginationHeader = 'x-pagination';
    return TablePaginationParams;
}(TableParams));
export { TablePaginationParams };
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
var /**
 * @template T
 */
PaginationCollection = /** @class */ (function () {
    function PaginationCollection() {
    }
    return PaginationCollection;
}());
/**
 * @template T
 */
export { PaginationCollection };
if (false) {
    /** @type {?} */
    PaginationCollection.prototype.pagination;
    /** @type {?} */
    PaginationCollection.prototype.collection;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC1qc29uLXRvLW9iamVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29uY2VwdC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwL2h0dHAtanNvbi10by1vYmplY3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBYyxVQUFVLEVBQWdELE1BQU0sc0JBQXNCLENBQUM7QUFDNUcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQWtELE1BQU0sMEJBQTBCLENBQUM7QUFDL0csT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBR3pDOzs7O0lBR0UsaUNBQ1ksSUFBZ0IsRUFDaEIsTUFBcUIsRUFDckIsU0FBYyxFQUN4Qix5QkFBd0Y7UUFEOUUsMEJBQUEsRUFBQSxjQUFjO1FBQ3hCLDBDQUFBLEVBQUEsNEJBQXVELG1CQUFtQixDQUFDLGFBQWE7UUFIOUUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixXQUFNLEdBQU4sTUFBTSxDQUFlO1FBQ3JCLGNBQVMsR0FBVCxTQUFTLENBQUs7UUFHeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksbUJBQW1CLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNoRixDQUFDOzs7Ozs7O0lBRVMscUNBQUc7Ozs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLE9BQXNCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEVBQUUsT0FB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LDRCQUFDO0NBQUEsQUFMRCxDQUEyQyxXQUFXLEdBS3JEO1NBTFkscUJBQXFCOzs7SUFDaEMsMkNBQXNEOztJQUV0RCx5Q0FBaUI7O0lBQ2pCLDRDQUFvQjs7Ozs7QUFHdEIsc0NBS0M7OztJQUpDLG9DQUFpQjs7SUFDakIsdUNBQW9COztJQUNwQixzQ0FBbUI7O0lBQ25CLHNDQUFtQjs7Ozs7QUFHckI7Ozs7SUFBQTtJQUdBLENBQUM7SUFBRCwyQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7Ozs7O0lBRkMsMENBQTZCOztJQUM3QiwwQ0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zLCBIdHRwSGVhZGVycywgSHR0cEVycm9yUmVzcG9uc2UsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSnNvblRvVHlwZWRIZWxwZXIgfSBmcm9tICcuLi8uLi91dGlscy9qc29uLXRvLXR5cGVkLWhlbHBlcic7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUmVzcG9uc2VIZWFkZXJzUmV0cmlldmVySGVscGVyIH0gZnJvbSAnLi4vcmVzcG9uc2UtaGVhZGVycy1yZXRyaWV2ZXInO1xyXG5pbXBvcnQgeyBEYXRhTGlzdFF1ZXJ5SGVscGVyLCBEYXRhTGlzdFF1ZXJ5RmlsdGVyLCBEYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnIH0gZnJvbSAnLi9kYXRhLWxpc3QtcXVlcnktaGVscGVyJztcclxuaW1wb3J0IHsgaXNOdWxsT3JVbmRlZmluZWQgfSBmcm9tICd1dGlsJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZy9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSHR0cEpzb25Ub09iamVjdFNlcnZpY2Uge1xyXG4gIHByb3RlY3RlZCBkYXRhTGlzdFF1ZXJ5SGVscGVyOiBEYXRhTGlzdFF1ZXJ5SGVscGVyO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJvdGVjdGVkIGxvZ2dlcjogTG9nZ2VyU2VydmljZSxcclxuICAgIHByb3RlY3RlZCBzdGFydHNVcmwgPSAnJyxcclxuICAgIGRhdGFMaXN0UXVlcnlIZWxwZXJDb25maWc6IERhdGFMaXN0UXVlcnlIZWxwZXJDb25maWcgPSBEYXRhTGlzdFF1ZXJ5SGVscGVyLmRlZmF1bHRDb25maWdcclxuICApIHtcclxuICAgIHRoaXMuZGF0YUxpc3RRdWVyeUhlbHBlciA9IG5ldyBEYXRhTGlzdFF1ZXJ5SGVscGVyKGRhdGFMaXN0UXVlcnlIZWxwZXJDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldChyb3V0ZTogc3RyaW5nLCBvcHRpb25zPzogQmFzaWNPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBvcHRpb25zKS5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0QXJyYXlCdWZmZXIocm91dGU6IHN0cmluZywgb3B0aW9ucz86IEJhc2ljT3B0aW9ucyk6IE9ic2VydmFibGU8QXJyYXlCdWZmZXI+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IHJlc3BvbnNlVHlwZTogJ2FycmF5YnVmZmVyJyB9KSlcclxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpKSBhcyBPYnNlcnZhYmxlPEFycmF5QnVmZmVyPjtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRCbG9iKHJvdXRlOiBzdHJpbmcsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpOiBPYnNlcnZhYmxlPEJsb2I+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgLmdldCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7IHJlc3BvbnNlVHlwZTogJ2Jsb2InIH0pKVxyXG4gICAgICAucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSkpIGFzIE9ic2VydmFibGU8QmxvYj47XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdDxUPihyb3V0ZTogc3RyaW5nLCBib2R5OiBULCBvcHRpb25zPzogQmFzaWNPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgYm9keSwgb3B0aW9ucykucGlwZShjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHBvc3RBbmRSZXR1cm5JZDxUQm9keSwgVElkPihyb3V0ZTogc3RyaW5nLCBib2R5OiBUQm9keSwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIEpzb25Ub1R5cGVkSGVscGVyLnNlcmlhbGl6ZShib2R5KSwgb3B0aW9ucykucGlwZShcclxuICAgICAgbWFwKHggPT4geCBhcyBUSWQpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdEFuZFJldHVybk9iamVjdDxUPihyb3V0ZTogc3RyaW5nLCBib2R5OiBULCBvcHRpb25zPzogQmFzaWNPcHRpb25zKSB7XHJcbiAgICAvLyBUT0RPIFFOUyA6IE1hcCBhdmVjIHVuIGRlc2VyaWFsaXplXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgSnNvblRvVHlwZWRIZWxwZXIuc2VyaWFsaXplKGJvZHkpLCBvcHRpb25zKS5waXBlKGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcG9zdEFuZFJldHVybkpzb248VD4ocm91dGU6IHN0cmluZywgYm9keTogVCwgdHlwZTogbmV3ICgpID0+IFQsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpIHtcclxuICAgIHJldHVybiB0aGlzLnBvc3Qocm91dGUsIGJvZHksIG9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1hcChyID0+IEpzb25Ub1R5cGVkSGVscGVyLmRlc2VyaWFsaXplKHIsIHR5cGUpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHB1dDxUPihyb3V0ZTogc3RyaW5nLCBib2R5OiBULCBvcHRpb25zPzogQmFzaWNPcHRpb25zKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBKc29uVG9UeXBlZEhlbHBlci5zZXJpYWxpemUoYm9keSksIG9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1hcFRvKHZvaWQgMCksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBwdXRBbmRSZXR1cm5PYmplY3Q8VD4ocm91dGU6IHN0cmluZywgYm9keTogVCwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucyk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQodGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgSnNvblRvVHlwZWRIZWxwZXIuc2VyaWFsaXplKGJvZHkpLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICBtYXAoeCA9PiB4IGFzIFQpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcGF0Y2g8VD4ocm91dGU6IHN0cmluZywgYm9keTogVCwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBKc29uVG9UeXBlZEhlbHBlci5zZXJpYWxpemUoYm9keSksIG9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBkZWxldGVGcm9tUm91dGUocm91dGU6IHN0cmluZywgb3B0aW9ucz86IEJhc2ljT3B0aW9ucyk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgb3B0aW9ucykucGlwZShcclxuICAgICAgbWFwVG8odm9pZCAwKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGRlbGV0ZUFuZFJldHVybk9iamVjdDxUPihyb3V0ZTogc3RyaW5nLCBvcHRpb25zPzogQmFzaWNPcHRpb25zKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBvcHRpb25zKS5waXBlKFxyXG4gICAgICBtYXAoeCA9PiB4IGFzIFQpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBwcm90ZWN0ZWQgcG9zdEpzb248VD4oXHJcbiAgLy8gICAgIHJvdXRlOiBzdHJpbmcsXHJcbiAgLy8gICAgIHZhbHVlOiBULFxyXG4gIC8vICAgICB0eXBlOiBuZXcgKCkgPT4gVCxcclxuICAvLyAgICAgb3B0aW9ucz86IEJhc2ljT3B0aW9uc1xyXG4gIC8vICk6IE9ic2VydmFibGU8VD4ge1xyXG4gIC8vICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VD4odGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgLCBvcHRpb25zKVxyXG4gIC8vIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEpzb248VD4ocm91dGU6IHN0cmluZywgdHlwZTogbmV3ICgpID0+IFQsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIG9wdGlvbnMpLnBpcGUoXHJcbiAgICAgIG1hcChyZXMgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IEpzb25Ub1R5cGVkSGVscGVyLmRlc2VyaWFsaXplKHJlcywgdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgfSksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRKc29uQXJyYXk8VD4ocm91dGU6IHN0cmluZywgdHlwZTogbmV3ICgpID0+IFQsIG9wdGlvbnM/OiBCYXNpY09wdGlvbnMsIHRhYmxlUGFyYW1zPzogVGFibGVQYXJhbXMpOiBPYnNlcnZhYmxlPFRbXT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5zdGFydHNVcmwgKyByb3V0ZSwgeyBwYXJhbXM6IHRoaXMuZ2V0TWVyZ2VkSHR0cFBhcmFtcyhvcHRpb25zLCB0YWJsZVBhcmFtcykgfSkucGlwZShcclxuICAgICAgbWFwKHJlcyA9PiBKc29uVG9UeXBlZEhlbHBlci5kZXNlcmlhbGl6ZUFycmF5KHJlcyBhcyBvYmplY3RbXSwgdHlwZSkpLFxyXG4gICAgICBjYXRjaEVycm9yKHRoaXMuaGFuZGxlRXJyb3IoKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0SnNvbkFycmF5UGFnaW5hdGlvbjxUIGV4dGVuZHMgb2JqZWN0PihcclxuICAgIHBhZ2luYXRpb25QYXJhbXM6IFRhYmxlUGFnaW5hdGlvblBhcmFtcyxcclxuICAgIHJvdXRlOiBzdHJpbmcsXHJcbiAgICB0eXBlOiBuZXcgKCkgPT4gVCxcclxuICAgIG9wdGlvbnM/OiBCYXNpY09wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPFBhZ2luYXRpb25Db2xsZWN0aW9uPFQ+PiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRBcnJheUJvZHlXaXRoSGVhZGVycyhcclxuICAgICAgcm91dGUsXHJcbiAgICAgIFtUYWJsZVBhZ2luYXRpb25QYXJhbXMuaHR0cFBhZ2luYXRpb25IZWFkZXJdLFxyXG4gICAgICB0eXBlLFxyXG4gICAgICBPYmplY3QuYXNzaWduKHsgcGFyYW1zOiB0aGlzLmRhdGFMaXN0UXVlcnlIZWxwZXIuZ2V0VGFibGVQYWdpbmF0aW9uUmVxdWVzdFBhcmFtZXRlcnMocGFnaW5hdGlvblBhcmFtcykgfSwgb3B0aW9ucylcclxuICAgICkucGlwZShcclxuICAgICAgbWFwKHJlcyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHBhZ2luYXRpb246IHJlcy5oZWFkZXJzLmdldChUYWJsZVBhZ2luYXRpb25QYXJhbXMuaHR0cFBhZ2luYXRpb25IZWFkZXIpIGFzIFBhZ2luYXRpb25IZWFkZXIsXHJcbiAgICAgICAgICBjb2xsZWN0aW9uOiByZXMuYm9keSBhcyBUW11cclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgcmVzcG9uc2Ugd2l0aCBhbiBleHRyYWN0aW9uIG9mIHRoZSBoZWFkZXIgYW5kIHRoZSBib2R5IG9mIHRoZSB0eXBlIFRcclxuICAgKiBAcGFyYW0gcm91dGUgaHR0cCByb3V0ZVxyXG4gICAqIEBwYXJhbSBoZWFkZXJLZXlzIGtleXMgdG8gZXh0cmFjdCBpbnNpZGUgdGhlIGh0dHAgcmVzcG9uc2UgaGVhZGVyXHJcbiAgICogQHBhcmFtIGJvZHlUeXBlIHR5cGUgb2YgdGhlIGh0dHAgcmVzcG9uc2UgYm9keVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIGh0dHAgb3B0aW9uc1xyXG4gICAqL1xyXG4gIHByb3RlY3RlZCBnZXRKc29uQm9keVdpdGhIZWFkZXJzPFQgZXh0ZW5kcyBvYmplY3Q+KFxyXG4gICAgcm91dGU6IHN0cmluZyxcclxuICAgIGhlYWRlcktleXM6IHN0cmluZ1tdLFxyXG4gICAgYm9keVR5cGU/OiBuZXcgKCkgPT4gVCxcclxuICAgIG9wdGlvbnM/OiBCYXNpY09wdGlvbnNcclxuICApOiBPYnNlcnZhYmxlPEJvZHlXaXRoSGVhZGVyczxUPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SHR0cFJlc3BvbnNlPG9iamVjdD4+KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIE9iamVjdC5hc3NpZ24ob3B0aW9ucyA/IG9wdGlvbnMgOiB7fSwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pKS5waXBlKFxyXG4gICAgICBtYXAocmVzID0+IHRoaXMuZXh0cmFjdEJvZHlXaXRoSGVhZGVycyhyZXMsIGhlYWRlcktleXMsIGJvZHlUeXBlKSksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHJlc3BvbnNlIHdpdGggYW4gZXh0cmFjdGlvbiBvZiB0aGUgaGVhZGVyIGFuZCB0aGUgYm9keSByYXdcclxuICAgKiBAcGFyYW0gcm91dGUgaHR0cCByb3V0ZVxyXG4gICAqIEBwYXJhbSBoZWFkZXJLZXlzIGtleXMgdG8gZXh0cmFjdCBpbnNpZGUgdGhlIGh0dHAgcmVzcG9uc2UgaGVhZGVyXHJcbiAgICogQHBhcmFtIG9wdGlvbnMgaHR0cCBvcHRpb25zXHJcbiAgICovXHJcbiAgcHJvdGVjdGVkIGdldFJhd0JvZHlXaXRoSGVhZGVycyhyb3V0ZTogc3RyaW5nLCBoZWFkZXJLZXlzOiBzdHJpbmdbXSwgb3B0aW9ucz86IEJhc2ljT3B0aW9ucyk6IE9ic2VydmFibGU8Qm9keVdpdGhIZWFkZXJzPGFueT4+IHtcclxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PEh0dHBSZXNwb25zZTxhbnk+Pih0aGlzLnN0YXJ0c1VybCArIHJvdXRlLCBPYmplY3QuYXNzaWduKG9wdGlvbnMgPyBvcHRpb25zIDoge30sIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KSkucGlwZShcclxuICAgICAgbWFwKHJlcyA9PiB0aGlzLmV4dHJhY3RCb2R5V2l0aEhlYWRlcnMocmVzLCBoZWFkZXJLZXlzKSksXHJcbiAgICAgIGNhdGNoRXJyb3IodGhpcy5oYW5kbGVFcnJvcigpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIHJlc3BvbnNlIHdpdGggYW4gZXh0cmFjdGlvbiBvZiB0aGUgaGVhZGVyIGFuZCB0aGUgYm9keSBvZiB0aGUgdHlwZSBUXHJcbiAgICogQHBhcmFtIHJvdXRlIGh0dHAgcm91dGVcclxuICAgKiBAcGFyYW0gaGVhZGVyS2V5cyBrZXlzIHRvIGV4dHJhY3QgaW5zaWRlIHRoZSBodHRwIHJlc3BvbnNlIGhlYWRlclxyXG4gICAqIEBwYXJhbSBib2R5VHlwZSB0eXBlIG9mIHRoZSBodHRwIHJlc3BvbnNlIGJvZHlcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBodHRwIG9wdGlvbnNcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgZ2V0QXJyYXlCb2R5V2l0aEhlYWRlcnM8VCBleHRlbmRzIG9iamVjdD4oXHJcbiAgICByb3V0ZTogc3RyaW5nLFxyXG4gICAgaGVhZGVyS2V5czogc3RyaW5nW10sXHJcbiAgICBib2R5VHlwZTogbmV3ICgpID0+IFQsXHJcbiAgICBvcHRpb25zPzogQmFzaWNPcHRpb25zXHJcbiAgKTogT2JzZXJ2YWJsZTxBcnJheUJvZHlXaXRoSGVhZGVyczxUPj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8SHR0cFJlc3BvbnNlPG9iamVjdD4+KHRoaXMuc3RhcnRzVXJsICsgcm91dGUsIE9iamVjdC5hc3NpZ24ob3B0aW9ucyA/IG9wdGlvbnMgOiB7fSwgeyBvYnNlcnZlOiAncmVzcG9uc2UnIH0pKS5waXBlKFxyXG4gICAgICBtYXAocmVzID0+IHRoaXMuZXh0cmFjdEFycmF5Qm9keVdpdGhIZWFkZXJzKHJlcywgaGVhZGVyS2V5cywgYm9keVR5cGUpKSxcclxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKCkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGV4dHJhY3RIZWFkZXJzKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PiwgaGVhZGVyS2V5czogc3RyaW5nW10pOiBNYXA8c3RyaW5nLCBvYmplY3Q+IHtcclxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgTWFwPHN0cmluZywgb2JqZWN0PigpO1xyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgaGVhZGVyS2V5cykge1xyXG4gICAgICBoZWFkZXJzLnNldChrZXksIFJlc3BvbnNlSGVhZGVyc1JldHJpZXZlckhlbHBlci5nZXRKc29uSGVhZGVyVmFsdWUocmVzcG9uc2UsIGtleSkpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZXh0cmFjdEJvZHlXaXRoSGVhZGVyczxUIGV4dGVuZHMgb2JqZWN0PihcclxuICAgIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55PixcclxuICAgIGhlYWRlcktleXM6IHN0cmluZ1tdLFxyXG4gICAgYm9keVR5cGU/OiBuZXcgKCkgPT4gVFxyXG4gICk6IEJvZHlXaXRoSGVhZGVyczxUPiB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBuZXcgQm9keVdpdGhIZWFkZXJzPFQ+KCk7XHJcbiAgICByZXN1bHQuaGVhZGVycyA9IHRoaXMuZXh0cmFjdEhlYWRlcnMocmVzcG9uc2UsIGhlYWRlcktleXMpO1xyXG4gICAgaWYgKGJvZHlUeXBlKSB7XHJcbiAgICAgIHJlc3VsdC5ib2R5ID0gSnNvblRvVHlwZWRIZWxwZXIuZGVzZXJpYWxpemUocmVzcG9uc2UuYm9keSwgYm9keVR5cGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0LmJvZHkgPSByZXNwb25zZS5ib2R5O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBleHRyYWN0QXJyYXlCb2R5V2l0aEhlYWRlcnM8VCBleHRlbmRzIG9iamVjdD4oXHJcbiAgICByZXNwb25zZTogSHR0cFJlc3BvbnNlPGFueT4sXHJcbiAgICBoZWFkZXJLZXlzOiBzdHJpbmdbXSxcclxuICAgIGJvZHlUeXBlOiBuZXcgKCkgPT4gVFxyXG4gICk6IEFycmF5Qm9keVdpdGhIZWFkZXJzPFQ+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheUJvZHlXaXRoSGVhZGVyczxUPigpO1xyXG4gICAgcmVzdWx0LmhlYWRlcnMgPSB0aGlzLmV4dHJhY3RIZWFkZXJzKHJlc3BvbnNlLCBoZWFkZXJLZXlzKTtcclxuICAgIHJlc3VsdC5ib2R5ID0gSnNvblRvVHlwZWRIZWxwZXIuZGVzZXJpYWxpemVBcnJheShyZXNwb25zZS5ib2R5IGFzIG9iamVjdFtdLCBib2R5VHlwZSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldEh0dHBQYXJhbXM8VCA9IGFueT4obmFtZTogc3RyaW5nLCB2YWx1ZTogVCB8IFRbXSwgaHR0cFBhcmFtcz86IEh0dHBQYXJhbXMpOiBIdHRwUGFyYW1zIHtcclxuICAgIGlmIChpc051bGxPclVuZGVmaW5lZChodHRwUGFyYW1zKSkge1xyXG4gICAgICBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIH1cclxuICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpKSB7XHJcbiAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICByZXR1cm4gaHR0cFBhcmFtcy5zZXQobmFtZSwgdmFsdWUudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlWzBdIGluc3RhbmNlb2YgT2JqZWN0KSB7XHJcbiAgICAgICAgICByZXR1cm4gaHR0cFBhcmFtcy5zZXQobmFtZSwgSlNPTi5zdHJpbmdpZnkoSnNvblRvVHlwZWRIZWxwZXIuc2VyaWFsaXplQXJyYXk8VD4odmFsdWUpKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBodHRwUGFyYW1zLnNldChuYW1lLCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG4gICAgICAgIHJldHVybiBodHRwUGFyYW1zLnNldChuYW1lLCBKU09OLnN0cmluZ2lmeShKc29uVG9UeXBlZEhlbHBlci5zZXJpYWxpemU8VD4odmFsdWUpKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHJldHVybiBodHRwUGFyYW1zLnNldChuYW1lLCB2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGh0dHBQYXJhbXMuc2V0KG5hbWUsIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBodHRwUGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldE1lcmdlZEh0dHBQYXJhbXMob3B0aW9ucz86IEJhc2ljT3B0aW9ucywgdGFibGVQYXJhbXM/OiBUYWJsZVBhcmFtcyk6IEh0dHBQYXJhbXMge1xyXG4gICAgbGV0IG1lcmdlZEh0dHBQYXJhbXMgPSB0aGlzLmRhdGFMaXN0UXVlcnlIZWxwZXIuZ2V0VGFibGVSZXF1ZXN0UGFyYW1ldGVycyh0YWJsZVBhcmFtcyk7XHJcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWZpbmVkKG9wdGlvbnMpICYmICFpc051bGxPclVuZGVmaW5lZChvcHRpb25zLnBhcmFtcykpIHtcclxuICAgICAgaWYgKG9wdGlvbnMucGFyYW1zIGluc3RhbmNlb2YgSHR0cFBhcmFtcykge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIG9wdGlvbnMucGFyYW1zLmtleXMoKSkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiBvcHRpb25zLnBhcmFtcy5nZXRBbGwoa2V5KSkge1xyXG4gICAgICAgICAgICBtZXJnZWRIdHRwUGFyYW1zID0gbWVyZ2VkSHR0cFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKG9wdGlvbnMucGFyYW1zKSkge1xyXG4gICAgICAgICAgaWYgKG9wdGlvbnMucGFyYW1zW2tleV0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIG9wdGlvbnMucGFyYW1zW2tleV0pIHtcclxuICAgICAgICAgICAgICBtZXJnZWRIdHRwUGFyYW1zID0gbWVyZ2VkSHR0cFBhcmFtcy5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lcmdlZEh0dHBQYXJhbXMgPSBtZXJnZWRIdHRwUGFyYW1zLmFwcGVuZChrZXksIG9wdGlvbnMucGFyYW1zW2tleV0gYXMgc3RyaW5nKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtZXJnZWRIdHRwUGFyYW1zO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhbmRsZUVycm9yKCkge1xyXG4gICAgcmV0dXJuIChlcnJvcjogSHR0cEVycm9yUmVzcG9uc2UpID0+IHtcclxuICAgICAgaWYgKGVycm9yLmVycm9yIGluc3RhbmNlb2YgRXJyb3JFdmVudCkge1xyXG4gICAgICAgIC8vIEEgY2xpZW50LXNpZGUgb3IgbmV0d29yayBlcnJvciBvY2N1cnJlZC4gSGFuZGxlIGl0IGFjY29yZGluZ2x5LlxyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnJvci5lcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XHJcbiAgICAgICAgLy8gQSB0eXBlIGNvbnZlcnNpb24gb2NjdXIuXHJcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoYFR5cGUgY29udmVydGlvbjogJHtlcnJvci5tZXNzYWdlfWApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubG9nZ2VyLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yLm5hbWUpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBvcHRpb25zIHR5cGUgZm9yIGdldC9zZXQvZGVsZXRlL3B1dC9wb3N0L3BhdGNoXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEJhc2ljT3B0aW9ucyB7XHJcbiAgaGVhZGVycz86XHJcbiAgICB8IEh0dHBIZWFkZXJzXHJcbiAgICB8IHtcclxuICAgICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuICAgICAgfTtcclxuICBvYnNlcnZlPzogJ2JvZHknO1xyXG4gIHBhcmFtcz86XHJcbiAgICB8IEh0dHBQYXJhbXNcclxuICAgIHwge1xyXG4gICAgICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgICAgIH07XHJcbiAgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuO1xyXG4gIHJlc3BvbnNlVHlwZT86ICdqc29uJztcclxuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9keVdpdGhIZWFkZXJzPFQgZXh0ZW5kcyBvYmplY3Q+IHtcclxuICBoZWFkZXJzOiBNYXA8c3RyaW5nLCBvYmplY3Q+O1xyXG4gIGJvZHk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUJvZHlXaXRoSGVhZGVyczxUIGV4dGVuZHMgb2JqZWN0PiB7XHJcbiAgaGVhZGVyczogTWFwPHN0cmluZywgb2JqZWN0PjtcclxuICBib2R5OiBUW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVBhcmFtcyB7XHJcbiAgc29ydD86IHN0cmluZztcclxuICBvcmRlckRlc2M/OiBib29sZWFuO1xyXG4gIGZpbHRlcnM/OiBEYXRhTGlzdFF1ZXJ5RmlsdGVyW107XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVBhZ2luYXRpb25QYXJhbXMgZXh0ZW5kcyBUYWJsZVBhcmFtcyB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IGh0dHBQYWdpbmF0aW9uSGVhZGVyID0gJ3gtcGFnaW5hdGlvbic7XHJcblxyXG4gIHBhZ2VTaXplOiBudW1iZXI7XHJcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uSGVhZGVyIHtcclxuICBwYWdlU2l6ZTogbnVtYmVyO1xyXG4gIGN1cnJlbnRQYWdlOiBudW1iZXI7XHJcbiAgdG90YWxDb3VudDogbnVtYmVyO1xyXG4gIHRvdGFsUGFnZXM6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Db2xsZWN0aW9uPFQ+IHtcclxuICBwYWdpbmF0aW9uOiBQYWdpbmF0aW9uSGVhZGVyO1xyXG4gIGNvbGxlY3Rpb246IFRbXTtcclxufVxyXG4iXX0=