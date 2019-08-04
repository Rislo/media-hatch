import { NG_VALIDATORS } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { catchError, map, mapTo } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { throwError } from 'rxjs';
import { Component, Directive, Input, NgModule, Injectable, InjectionToken, Inject, defineInjectable, inject } from '@angular/core';
import { __decorate, __metadata } from 'tslib';
import { JsonConvert, ValueCheckingMode, JsonObject, JsonProperty, JsonConverter } from 'json2typescript';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BasicLayoutComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BasicLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'concept-basic-layout',
                template: "<div class=\"header\">\r\n  <ng-content select=\"header\"></ng-content>\r\n</div>\r\n<div class=\"nav\">\r\n  <ng-content select=\"nav\"></ng-content>\r\n</div>\r\n<div class=\"content\">\r\n  <ng-content select=\"content\"></ng-content>\r\n</div>",
                styles: [":host{display:-ms-grid;display:grid;grid-template-areas:\"side header\" \"side content\";-ms-grid-columns:auto 1fr;grid-template-columns:auto 1fr;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr;height:100vh}:host ::ng-deep>*>*{display:block}:host>.header{-ms-grid-row:1;-ms-grid-column:2;grid-area:header}:host>.nav{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;grid-area:side}:host>.content{-ms-grid-row:2;-ms-grid-column:2;grid-area:content}"]
            }] }
];
/** @nocollapse */
BasicLayoutComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields match
/**
 * @param {?} controlName
 * @param {?} matchingControlName
 * @return {?}
 */
function MustMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
class MustMatchDirective {
    constructor() {
        this.mustMatch = [];
    }
    /**
     * @param {?} control
     * @return {?}
     */
    static getConfirmPasswordErrorMessage(control) {
        if (control.errors) {
            if (control.errors.required) {
                return 'Required';
            }
            else {
                return 'Confirm password must match with new password';
            }
        }
        else {
            return null;
        }
    }
    /**
     * @param {?} formGroup
     * @return {?}
     */
    validate(formGroup) {
        return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
    }
}
MustMatchDirective.decorators = [
    { type: Directive, args: [{
                selector: '[conceptMustMatch]',
                providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
            },] }
];
MustMatchDirective.propDecorators = {
    mustMatch: [{ type: Input, args: ['conceptMustMatch',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConceptModule {
}
ConceptModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BasicLayoutComponent, MustMatchDirective],
                imports: [],
                exports: [BasicLayoutComponent, MustMatchDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields match
/**
 * @param {?} matchingControl
 * @return {?}
 */
function mustMatch(matchingControl) {
    return (/**
     * @param {?} control
     * @return {?}
     */
    (control) => {
        // return null if controls haven't initialised yet
        if (!control || !matchingControl) {
            return null;
        }
        // return null if another validator has already found an error on the matchingControl
        if (control.errors && !control.errors.mustMatch) {
            return null;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            control.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
/**
 * @param {?} control
 * @param {?} controlName
 * @param {?} matchControlName
 * @return {?}
 */
function getMustMatchError(control, controlName, matchControlName) {
    if (control.errors && control.errors.mustMatch) {
        return `${controlName} must match with ${matchControlName}.`;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResponseHeadersRetrieverHelper {
    constructor() { }
    /**
     * @param {?} response
     * @param {?} key
     * @return {?}
     */
    static getJsonHeaderValue(response, key) {
        /** @type {?} */
        const headerValue = response.headers.get(key);
        if (headerValue) {
            return JSON.parse(headerValue);
        }
        else {
            return null;
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DataListQueryFilter {
    /**
     * @param {?} field
     * @param {?} value
     */
    constructor(field, value) {
        this.field = field;
        this.value = value;
    }
}
class DataListQueryHelper {
    /**
     * @param {?=} config
     */
    constructor(config = DataListQueryHelper.defaultConfig) {
        this.config = config;
    }
    /**
     * @param {?=} tableParams
     * @return {?}
     */
    getTableRequestParameters(tableParams) {
        /** @type {?} */
        let params = new HttpParams();
        if (tableParams) {
            params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
            params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
            for (const filter of tableParams.filters || []) {
                params = params.append(filter.field, filter.value);
            }
        }
        return params;
    }
    /**
     * @param {?} tableParams
     * @return {?}
     */
    getTablePaginationRequestParameters(tableParams) {
        /** @type {?} */
        let params = new HttpParams();
        params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
        params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
        params = tableParams.currentPage ? params.append(this.config.pageNbKey, tableParams.currentPage.toString()) : params;
        params = tableParams.pageSize ? params.append(this.config.pageSizeKey, tableParams.pageSize.toString()) : params;
        for (const filter of tableParams.filters || []) {
            params = params.append(filter.field, filter.value);
        }
        return params;
    }
}
DataListQueryHelper.defaultConfig = {
    pageSizeKey: '_limit',
    pageNbKey: '_page',
    sortKey: '_sort',
    orderKey: '_order'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class JsonToTypedHelper {
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    static serialize(value) {
        return JsonToTypedHelper.jsonConvert.serializeObject(value);
    }
    /**
     * @template T
     * @param {?} values
     * @return {?}
     */
    static serializeArray(values) {
        return JsonToTypedHelper.jsonConvert.serializeArray(values);
    }
    /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    static deserialize(json, type) {
        return JsonToTypedHelper.jsonConvert.deserializeObject(json, type);
    }
    /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    static deserializeArray(json, type) {
        return JsonToTypedHelper.jsonConvert.deserializeArray(json, type);
    }
}
JsonToTypedHelper.jsonConvert = new JsonConvert(undefined, ValueCheckingMode.ALLOW_NULL);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class HttpJsonToObjectService {
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
/**
 * @template T
 */
class BodyWithHeaders {
}
/**
 * @template T
 */
class ArrayBodyWithHeaders {
}
class TableParams {
}
class TablePaginationParams extends TableParams {
}
TablePaginationParams.httpPaginationHeader = 'x-pagination';
/**
 * @template T
 */
class PaginationCollection {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class ConceptError {
    /**
     *  ctor for a concept error
     * @param {?=} message
     */
    constructor(message) {
        this.name = 'concept error';
        this.message = message;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModelError extends ConceptError {
    /**
     * ctor for a model error
     * @param {?=} message
     */
    constructor(message) {
        super(message);
        this.name = 'model error';
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template TId, T
 */
class CrudService extends HttpJsonToObjectService {
    /**
     * @param {?} httpClient
     * @param {?} type
     * @param {?} logger
     * @param {?=} startsUrl
     * @param {?=} dataListQueryHelperConfig
     */
    constructor(httpClient, type, logger, startsUrl = '', dataListQueryHelperConfig = DataListQueryHelper.defaultConfig) {
        super(httpClient, logger, startsUrl, dataListQueryHelperConfig);
        this.httpClient = httpClient;
        this.type = type;
        this.logger = logger;
    }
    /**
     * Create a new item
     * @param {?} item
     * @return {?}
     */
    create(item) {
        if (!item) {
            return throwError(new ModelError('created user group mustn\'t be null.'));
        }
        return this.postAndReturnObject('', item);
    }
    /**
     * Get one item
     * @param {?} id
     * @return {?}
     */
    read(id) {
        if (!id) {
            return throwError(new ReferenceError('null reference user group id'));
        }
        return this.getJson(`/${id}`, this.type);
    }
    /**
     * Get all items
     * @return {?}
     */
    readAll() {
        return this.getJsonArray('', this.type);
    }
    /**
     * Update an item
     * @param {?} item
     * @return {?}
     */
    update(item) {
        if (!(item && item.id)) {
            return throwError(new ModelError('updated user group mustn\'t be null and must have an id.'));
        }
        return this.put(`/${item.id}`, item);
    }
    /**
     * Delete an item
     * @param {?} idOrItem
     * @return {?}
     */
    delete(idOrItem) {
        idOrItem = typeof idOrItem === 'object' ? idOrItem.id : idOrItem;
        if (!idOrItem) {
            return throwError(new ReferenceError('null reference user group id'));
        }
        return this.deleteFromRoute(`/${idOrItem}`);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class LoggerService {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleLoggerService extends LoggerService {
    /**
     * @param {?} message
     * @return {?}
     */
    trace(message) {
        this.log("Trace" /* Trace */, message);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    debug(message) {
        this.log("Debug" /* Debug */, message);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    info(message) {
        this.log("Info" /* Info */, message);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    warning(message) {
        this.log("Warning" /* Warning */, message);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    error(message) {
        this.log("Error" /* Error */, message);
    }
    /**
     * @param {?} message
     * @return {?}
     */
    fatal(message) {
        this.log("Fatal" /* Fatal */, message);
    }
    /**
     * @param {?} level
     * @param {?} message
     * @return {?}
     */
    log(level, message) {
        /** @type {?} */
        const messageFormatted = `[${level}] ${new Date().toISOString()}: ${message}`;
        switch (level) {
            case "Trace" /* Trace */:
            case "Debug" /* Debug */:
            case "Info" /* Info */:
                console.log(messageFormatted);
                break;
            case "Warning" /* Warning */:
                console.warn(messageFormatted);
                break;
            case "Error" /* Error */:
            case "Fatal" /* Fatal */:
                console.error(messageFormatted);
                break;
        }
    }
}
ConsoleLoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ ConsoleLoggerService.ngInjectableDef = defineInjectable({ factory: function ConsoleLoggerService_Factory() { return new ConsoleLoggerService(); }, token: ConsoleLoggerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MULTI_LOGGER_SERVICES = new InjectionToken('multi-logger logger services');
/**
 * @requires MULTI_LOGGER_SERVICES
 */
class MultiLoggerService extends LoggerService {
    /**
     * @param {?} loggerServices
     */
    constructor(loggerServices) {
        super();
        this.loggerServices = loggerServices;
    }
    /**
     * @param {?} message
     * @return {?}
     */
    trace(message) {
        for (const logger of this.loggerServices) {
            logger.trace(message);
        }
    }
    /**
     * @param {?} message
     * @return {?}
     */
    debug(message) {
        for (const logger of this.loggerServices) {
            logger.debug(message);
        }
    }
    /**
     * @param {?} message
     * @return {?}
     */
    info(message) {
        for (const logger of this.loggerServices) {
            logger.info(message);
        }
    }
    /**
     * @param {?} message
     * @return {?}
     */
    warning(message) {
        for (const logger of this.loggerServices) {
            logger.warning(message);
        }
    }
    /**
     * @param {?} message
     * @return {?}
     */
    error(message) {
        for (const logger of this.loggerServices) {
            logger.error(message);
        }
    }
    /**
     * @param {?} message
     * @return {?}
     */
    fatal(message) {
        for (const logger of this.loggerServices) {
            logger.fatal(message);
        }
    }
    /**
     * @param {?} level
     * @param {?} message
     * @return {?}
     */
    log(level, message) {
        for (const logger of this.loggerServices) {
            logger.log(level, message);
        }
    }
}
MultiLoggerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
MultiLoggerService.ctorParameters = () => [
    { type: Array, decorators: [{ type: Inject, args: [MULTI_LOGGER_SERVICES,] }] }
];
/** @nocollapse */ MultiLoggerService.ngInjectableDef = defineInjectable({ factory: function MultiLoggerService_Factory() { return new MultiLoggerService(inject(MULTI_LOGGER_SERVICES)); }, token: MultiLoggerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const NotifyKind = {
    Info: 0,
    Warning: 1,
    Error: 2,
    Success: 3,
};
NotifyKind[NotifyKind.Info] = 'Info';
NotifyKind[NotifyKind.Warning] = 'Warning';
NotifyKind[NotifyKind.Error] = 'Error';
NotifyKind[NotifyKind.Success] = 'Success';
/**
 * @abstract
 */
class NotifyService {
    /**
     * Notify a message for the specified type if the service is defined
     * @param {?} notifyService service use for notification if defined
     * @param {?} message message
     * @param {?} kind kind of notification
     * @return {?}
     */
    static notify(notifyService, message, kind) {
        // tslint:disable-next-line:no-unused-expression
        notifyService && notifyService.notify(message, kind);
    }
    constructor() { }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let KeyValuePair = class KeyValuePair {
    /**
     * @param {?=} key
     * @param {?=} value
     */
    constructor(key, value) {
        this.key = null;
        this.value = null;
        this.key = key;
        this.value = value;
    }
};
__decorate([
    JsonProperty('key'),
    __metadata("design:type", Object)
], KeyValuePair.prototype, "key", void 0);
__decorate([
    JsonProperty('value'),
    __metadata("design:type", Object)
], KeyValuePair.prototype, "value", void 0);
KeyValuePair = __decorate([
    JsonObject(),
    __metadata("design:paramtypes", [Object, Object])
], KeyValuePair);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} control
 * @param {...?} functions
 * @return {?}
 */
function controlErrorMessage(control, ...functions) {
    for (const func of functions) {
        /** @type {?} */
        const message = func[0](control, func[1]);
        if (message) {
            return message;
        }
    }
    return 'Unknown error';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} control
 * @return {?}
 */
function getRequiredError(control) {
    if (control.errors && control.errors.required) {
        return `Required.`;
    }
    return null;
}
/**
 * @param {?} control
 * @return {?}
 */
function getEmailError(control) {
    if (control.errors && control.errors.email) {
        return `No valid email.`;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let JsonDateConverter = class JsonDateConverter {
    /**
     * @param {?} date
     * @return {?}
     */
    serialize(date) {
        return date.toISOString();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    deserialize(date) {
        return date ? new Date(date) : null;
    }
};
JsonDateConverter = __decorate([
    JsonConverter
], JsonDateConverter);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/* tslint:disable */
/**
 * Determines if two objects or two values are equivalent.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `equals`.
 *
 * @param {?} o1 Object or value to compare.
 * @param {?} o2 Object or value to compare.
 * @return {?} true if arguments are equal.
 */
function equals(o1, o2) {
    if (o1 === o2)
        return true;
    if (o1 === null || o2 === null)
        return false;
    if (o1 !== o1 && o2 !== o2)
        return true; // NaN === NaN
    // NaN === NaN
    /** @type {?} */
    let t1 = typeof o1;
    /** @type {?} */
    let t2 = typeof o2;
    /** @type {?} */
    let length;
    /** @type {?} */
    let key;
    /** @type {?} */
    let keySet;
    if (t1 == t2 && t1 == 'object') {
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2))
                return false;
            if ((length = o1.length) == o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key]))
                        return false;
                }
                return true;
            }
        }
        else {
            if (Array.isArray(o2)) {
                return false;
            }
            keySet = Object.create(null);
            for (key in o1) {
                if (!equals(o1[key], o2[key])) {
                    return false;
                }
                keySet[key] = true;
            }
            for (key in o2) {
                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
/* tslint:enable */
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return typeof value !== 'undefined' && value !== null;
}
/**
 * @param {?} item
 * @return {?}
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * @param {?} target
 * @param {?} source
 * @return {?}
 */
function mergeDeep(target, source) {
    /** @type {?} */
    const output = Object.assign({}, target);
    if (isObject(target) && isObject(source)) {
        Object.keys(source).forEach((/**
         * @param {?} key
         * @return {?}
         */
        (key) => {
            if (isObject(source[key])) {
                if (!(key in target)) {
                    Object.assign(output, { [key]: source[key] });
                }
                else {
                    output[key] = mergeDeep(target[key], source[key]);
                }
            }
            else {
                Object.assign(output, { [key]: source[key] });
            }
        }));
    }
    return output;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ConceptModule, mustMatch, getMustMatchError, ResponseHeadersRetrieverHelper, DataListQueryFilter, DataListQueryHelper, HttpJsonToObjectService, BodyWithHeaders, ArrayBodyWithHeaders, TableParams, TablePaginationParams, PaginationCollection, CrudService, LoggerService, ConsoleLoggerService, MULTI_LOGGER_SERVICES, MultiLoggerService, NotifyKind, NotifyService, KeyValuePair, ConceptError, ModelError, controlErrorMessage, getRequiredError, getEmailError, MustMatch, MustMatchDirective, JsonDateConverter, JsonToTypedHelper, equals, isDefined, isObject, mergeDeep, BasicLayoutComponent as ɵa };

//# sourceMappingURL=concept.js.map