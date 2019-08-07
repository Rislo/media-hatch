(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('@angular/common/http'), require('rxjs/operators'), require('util'), require('rxjs'), require('@angular/core'), require('json2typescript')) :
    typeof define === 'function' && define.amd ? define('concept', ['exports', '@angular/forms', '@angular/common/http', 'rxjs/operators', 'util', 'rxjs', '@angular/core', 'json2typescript'], factory) :
    (factory((global.concept = {}),global.ng.forms,global.ng.common.http,global.rxjs.operators,global.util,global.rxjs,global.ng.core,global.json2typescript));
}(this, (function (exports,forms,http,operators,util,rxjs,i0,json2typescript) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BasicLayoutComponent = /** @class */ (function () {
        function BasicLayoutComponent() {
        }
        /**
         * @return {?}
         */
        BasicLayoutComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        BasicLayoutComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'concept-basic-layout',
                        template: "<div class=\"header\">\r\n  <ng-content select=\"header\"></ng-content>\r\n</div>\r\n<div class=\"nav\">\r\n  <ng-content select=\"nav\"></ng-content>\r\n</div>\r\n<div class=\"content\">\r\n  <ng-content select=\"content\"></ng-content>\r\n</div>",
                        styles: [":host{display:-ms-grid;display:grid;grid-template-areas:\"side header\" \"side content\";-ms-grid-columns:auto 1fr;grid-template-columns:auto 1fr;-ms-grid-rows:auto 1fr;grid-template-rows:auto 1fr;height:100vh}:host ::ng-deep>*>*{display:block}:host>.header{-ms-grid-row:1;-ms-grid-column:2;grid-area:header}:host>.nav{-ms-grid-row:1;-ms-grid-row-span:2;-ms-grid-column:1;grid-area:side}:host>.content{-ms-grid-row:2;-ms-grid-column:2;grid-area:content}"]
                    }] }
        ];
        /** @nocollapse */
        BasicLayoutComponent.ctorParameters = function () { return []; };
        return BasicLayoutComponent;
    }());

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
        return ( /**
         * @param {?} formGroup
         * @return {?}
         */function (formGroup) {
            /** @type {?} */
            var control = formGroup.controls[controlName];
            /** @type {?} */
            var matchingControl = formGroup.controls[matchingControlName];
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
    var MustMatchDirective = /** @class */ (function () {
        function MustMatchDirective() {
            this.mustMatch = [];
        }
        /**
         * @param {?} control
         * @return {?}
         */
        MustMatchDirective.getConfirmPasswordErrorMessage = /**
         * @param {?} control
         * @return {?}
         */
            function (control) {
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
            };
        /**
         * @param {?} formGroup
         * @return {?}
         */
        MustMatchDirective.prototype.validate = /**
         * @param {?} formGroup
         * @return {?}
         */
            function (formGroup) {
                return MustMatch(this.mustMatch[0], this.mustMatch[1])(formGroup);
            };
        MustMatchDirective.decorators = [
            { type: i0.Directive, args: [{
                        selector: '[conceptMustMatch]',
                        providers: [{ provide: forms.NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
                    },] }
        ];
        MustMatchDirective.propDecorators = {
            mustMatch: [{ type: i0.Input, args: ['conceptMustMatch',] }]
        };
        return MustMatchDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConceptModule = /** @class */ (function () {
        function ConceptModule() {
        }
        ConceptModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [BasicLayoutComponent, MustMatchDirective],
                        imports: [],
                        exports: [BasicLayoutComponent, MustMatchDirective]
                    },] }
        ];
        return ConceptModule;
    }());

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
        return ( /**
         * @param {?} control
         * @return {?}
         */function (control) {
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
            return controlName + " must match with " + matchControlName + ".";
        }
        return null;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ResponseHeadersRetrieverHelper = /** @class */ (function () {
        function ResponseHeadersRetrieverHelper() {
        }
        /**
         * @param {?} response
         * @param {?} key
         * @return {?}
         */
        ResponseHeadersRetrieverHelper.getJsonHeaderValue = /**
         * @param {?} response
         * @param {?} key
         * @return {?}
         */
            function (response, key) {
                /** @type {?} */
                var headerValue = response.headers.get(key);
                if (headerValue) {
                    return JSON.parse(headerValue);
                }
                else {
                    return null;
                }
            };
        return ResponseHeadersRetrieverHelper;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataListQueryFilter = /** @class */ (function () {
        function DataListQueryFilter(field, value) {
            this.field = field;
            this.value = value;
        }
        return DataListQueryFilter;
    }());
    var DataListQueryHelper = /** @class */ (function () {
        function DataListQueryHelper(config) {
            if (config === void 0) {
                config = DataListQueryHelper.defaultConfig;
            }
            this.config = config;
        }
        /**
         * @param {?=} tableParams
         * @return {?}
         */
        DataListQueryHelper.prototype.getTableRequestParameters = /**
         * @param {?=} tableParams
         * @return {?}
         */
            function (tableParams) {
                var e_1, _a;
                /** @type {?} */
                var params = new http.HttpParams();
                if (tableParams) {
                    params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
                    params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
                    try {
                        for (var _b = __values(tableParams.filters || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var filter = _c.value;
                            params = params.append(filter.field, filter.value);
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                }
                return params;
            };
        /**
         * @param {?} tableParams
         * @return {?}
         */
        DataListQueryHelper.prototype.getTablePaginationRequestParameters = /**
         * @param {?} tableParams
         * @return {?}
         */
            function (tableParams) {
                var e_2, _a;
                /** @type {?} */
                var params = new http.HttpParams();
                params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
                params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
                params = tableParams.currentPage ? params.append(this.config.pageNbKey, tableParams.currentPage.toString()) : params;
                params = tableParams.pageSize ? params.append(this.config.pageSizeKey, tableParams.pageSize.toString()) : params;
                try {
                    for (var _b = __values(tableParams.filters || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var filter = _c.value;
                        params = params.append(filter.field, filter.value);
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
                return params;
            };
        DataListQueryHelper.defaultConfig = {
            pageSizeKey: '_limit',
            pageNbKey: '_page',
            sortKey: '_sort',
            orderKey: '_order'
        };
        return DataListQueryHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JsonToTypedHelper = /** @class */ (function () {
        function JsonToTypedHelper() {
        }
        /**
         * @template T
         * @param {?} value
         * @return {?}
         */
        JsonToTypedHelper.serialize = /**
         * @template T
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return JsonToTypedHelper.jsonConvert.serializeObject(value);
            };
        /**
         * @template T
         * @param {?} values
         * @return {?}
         */
        JsonToTypedHelper.serializeArray = /**
         * @template T
         * @param {?} values
         * @return {?}
         */
            function (values) {
                return JsonToTypedHelper.jsonConvert.serializeArray(values);
            };
        /**
         * @template T
         * @param {?} json
         * @param {?} type
         * @return {?}
         */
        JsonToTypedHelper.deserialize = /**
         * @template T
         * @param {?} json
         * @param {?} type
         * @return {?}
         */
            function (json, type) {
                return JsonToTypedHelper.jsonConvert.deserializeObject(json, type);
            };
        /**
         * @template T
         * @param {?} json
         * @param {?} type
         * @return {?}
         */
        JsonToTypedHelper.deserializeArray = /**
         * @template T
         * @param {?} json
         * @param {?} type
         * @return {?}
         */
            function (json, type) {
                return JsonToTypedHelper.jsonConvert.deserializeArray(json, type);
            };
        JsonToTypedHelper.jsonConvert = new json2typescript.JsonConvert(undefined, json2typescript.ValueCheckingMode.ALLOW_NULL);
        return JsonToTypedHelper;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ HttpJsonToObjectService = /** @class */ (function () {
        function HttpJsonToObjectService(http$$1, logger, startsUrl, dataListQueryHelperConfig) {
            if (startsUrl === void 0) {
                startsUrl = '';
            }
            if (dataListQueryHelperConfig === void 0) {
                dataListQueryHelperConfig = DataListQueryHelper.defaultConfig;
            }
            this.http = http$$1;
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
                return this.http.get(this.startsUrl + route, options).pipe(operators.catchError(this.handleError()));
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
                return ( /** @type {?} */(this.http
                    .get(this.startsUrl + route, Object.assign({}, options, { responseType: 'arraybuffer' }))
                    .pipe(operators.catchError(this.handleError()))));
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
                return ( /** @type {?} */(this.http
                    .get(this.startsUrl + route, Object.assign({}, options, { responseType: 'blob' }))
                    .pipe(operators.catchError(this.handleError()))));
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
                return this.http.post(this.startsUrl + route, body, options).pipe(operators.catchError(this.handleError()));
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
                return this.http.post(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(operators.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return ( /** @type {?} */(x)); })), operators.catchError(this.handleError()));
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
                return this.http.post(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(operators.catchError(this.handleError()));
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
                return this.post(route, body, options).pipe(operators.map(( /**
                 * @param {?} r
                 * @return {?}
                 */function (r) { return JsonToTypedHelper.deserialize(r, type); })), operators.catchError(this.handleError()));
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
                return this.http.put(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(operators.mapTo(void 0), operators.catchError(this.handleError()));
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
                return this.http.put(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(operators.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return ( /** @type {?} */(x)); })), operators.catchError(this.handleError()));
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
                return this.http.patch(this.startsUrl + route, JsonToTypedHelper.serialize(body), options).pipe(operators.catchError(this.handleError()));
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
                return this.http.delete(this.startsUrl + route, options).pipe(operators.mapTo(void 0), operators.catchError(this.handleError()));
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
                return this.http.delete(this.startsUrl + route, options).pipe(operators.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return ( /** @type {?} */(x)); })), operators.catchError(this.handleError()));
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
                return this.http.get(this.startsUrl + route, options).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var obj = JsonToTypedHelper.deserialize(res, type);
                    return obj;
                })), operators.catchError(this.handleError()));
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
                return this.http.get(this.startsUrl + route, { params: this.getMergedHttpParams(options, tableParams) }).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return JsonToTypedHelper.deserializeArray(( /** @type {?} */(res)), type); })), operators.catchError(this.handleError()));
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
                return this.getArrayBodyWithHeaders(route, [TablePaginationParams.httpPaginationHeader], type, Object.assign({ params: this.dataListQueryHelper.getTablePaginationRequestParameters(paginationParams) }, options)).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    return {
                        pagination: ( /** @type {?} */(res.headers.get(TablePaginationParams.httpPaginationHeader))),
                        collection: ( /** @type {?} */(res.body))
                    };
                })), operators.catchError(this.handleError()));
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
                return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return _this.extractBodyWithHeaders(res, headerKeys, bodyType); })), operators.catchError(this.handleError()));
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
                return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return _this.extractBodyWithHeaders(res, headerKeys); })), operators.catchError(this.handleError()));
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
                return this.http.get(this.startsUrl + route, Object.assign(options ? options : {}, { observe: 'response' })).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return _this.extractArrayBodyWithHeaders(res, headerKeys, bodyType); })), operators.catchError(this.handleError()));
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
                    for (var headerKeys_1 = __values(headerKeys), headerKeys_1_1 = headerKeys_1.next(); !headerKeys_1_1.done; headerKeys_1_1 = headerKeys_1.next()) {
                        var key = headerKeys_1_1.value;
                        headers.set(key, ResponseHeadersRetrieverHelper.getJsonHeaderValue(response, key));
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (headerKeys_1_1 && !headerKeys_1_1.done && (_a = headerKeys_1.return))
                            _a.call(headerKeys_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
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
                result.body = JsonToTypedHelper.deserializeArray(( /** @type {?} */(response.body)), bodyType);
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
                if (util.isNullOrUndefined(httpParams)) {
                    httpParams = new http.HttpParams();
                }
                if (!util.isNullOrUndefined(value)) {
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
                if (!util.isNullOrUndefined(options) && !util.isNullOrUndefined(options.params)) {
                    if (options.params instanceof http.HttpParams) {
                        try {
                            for (var _e = __values(options.params.keys()), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var key = _f.value;
                                try {
                                    for (var _g = __values(options.params.getAll(key)), _h = _g.next(); !_h.done; _h = _g.next()) {
                                        var value = _h.value;
                                        mergedHttpParams = mergedHttpParams.append(key, value);
                                    }
                                }
                                catch (e_3_1) {
                                    e_3 = { error: e_3_1 };
                                }
                                finally {
                                    try {
                                        if (_h && !_h.done && (_b = _g.return))
                                            _b.call(_g);
                                    }
                                    finally {
                                        if (e_3)
                                            throw e_3.error;
                                    }
                                }
                            }
                        }
                        catch (e_2_1) {
                            e_2 = { error: e_2_1 };
                        }
                        finally {
                            try {
                                if (_f && !_f.done && (_a = _e.return))
                                    _a.call(_e);
                            }
                            finally {
                                if (e_2)
                                    throw e_2.error;
                            }
                        }
                    }
                    else {
                        try {
                            for (var _j = __values(Object.keys(options.params)), _k = _j.next(); !_k.done; _k = _j.next()) {
                                var key = _k.value;
                                if (options.params[key] instanceof Array) {
                                    try {
                                        for (var _l = __values(options.params[key]), _m = _l.next(); !_m.done; _m = _l.next()) {
                                            var value = _m.value;
                                            mergedHttpParams = mergedHttpParams.append(key, value);
                                        }
                                    }
                                    catch (e_5_1) {
                                        e_5 = { error: e_5_1 };
                                    }
                                    finally {
                                        try {
                                            if (_m && !_m.done && (_d = _l.return))
                                                _d.call(_l);
                                        }
                                        finally {
                                            if (e_5)
                                                throw e_5.error;
                                        }
                                    }
                                }
                                else {
                                    mergedHttpParams = mergedHttpParams.append(key, ( /** @type {?} */(options.params[key])));
                                }
                            }
                        }
                        catch (e_4_1) {
                            e_4 = { error: e_4_1 };
                        }
                        finally {
                            try {
                                if (_k && !_k.done && (_c = _j.return))
                                    _c.call(_j);
                            }
                            finally {
                                if (e_4)
                                    throw e_4.error;
                            }
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
                return ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
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
                    return rxjs.throwError(error.name);
                });
            };
        return HttpJsonToObjectService;
    }());
    /**
     * @template T
     */
    var /**
     * @template T
     */ BodyWithHeaders = /** @class */ (function () {
        function BodyWithHeaders() {
        }
        return BodyWithHeaders;
    }());
    /**
     * @template T
     */
    var /**
     * @template T
     */ ArrayBodyWithHeaders = /** @class */ (function () {
        function ArrayBodyWithHeaders() {
        }
        return ArrayBodyWithHeaders;
    }());
    var TableParams = /** @class */ (function () {
        function TableParams() {
        }
        return TableParams;
    }());
    var TablePaginationParams = /** @class */ (function (_super) {
        __extends(TablePaginationParams, _super);
        function TablePaginationParams() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TablePaginationParams.httpPaginationHeader = 'x-pagination';
        return TablePaginationParams;
    }(TableParams));
    /**
     * @template T
     */
    var /**
     * @template T
     */ PaginationCollection = /** @class */ (function () {
        function PaginationCollection() {
        }
        return PaginationCollection;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ ConceptError = /** @class */ (function () {
        /**
         *  ctor for a concept error
         */
        function ConceptError(message) {
            this.name = 'concept error';
            this.message = message;
        }
        return ConceptError;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModelError = /** @class */ (function (_super) {
        __extends(ModelError, _super);
        /**
         * ctor for a model error
         */
        function ModelError(message) {
            var _this = _super.call(this, message) || this;
            _this.name = 'model error';
            return _this;
        }
        return ModelError;
    }(ConceptError));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     * @template TId, T
     */
    var /**
     * @abstract
     * @template TId, T
     */ CrudService = /** @class */ (function (_super) {
        __extends(CrudService, _super);
        function CrudService(httpClient, type, logger, startsUrl, dataListQueryHelperConfig) {
            if (startsUrl === void 0) {
                startsUrl = '';
            }
            if (dataListQueryHelperConfig === void 0) {
                dataListQueryHelperConfig = DataListQueryHelper.defaultConfig;
            }
            var _this = _super.call(this, httpClient, logger, startsUrl, dataListQueryHelperConfig) || this;
            _this.httpClient = httpClient;
            _this.type = type;
            _this.logger = logger;
            return _this;
        }
        /**
         * Create a new item
         */
        /**
         * Create a new item
         * @param {?} item
         * @return {?}
         */
        CrudService.prototype.create = /**
         * Create a new item
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!item) {
                    return rxjs.throwError(new ModelError('created user group mustn\'t be null.'));
                }
                return this.postAndReturnObject('', item);
            };
        /**
         * Get one item
         */
        /**
         * Get one item
         * @param {?} id
         * @return {?}
         */
        CrudService.prototype.read = /**
         * Get one item
         * @param {?} id
         * @return {?}
         */
            function (id) {
                if (!id) {
                    return rxjs.throwError(new ReferenceError('null reference user group id'));
                }
                return this.getJson("/" + id, this.type);
            };
        /**
         * Get all items
         */
        /**
         * Get all items
         * @return {?}
         */
        CrudService.prototype.readAll = /**
         * Get all items
         * @return {?}
         */
            function () {
                return this.getJsonArray('', this.type);
            };
        /**
         * Update an item
         */
        /**
         * Update an item
         * @param {?} item
         * @return {?}
         */
        CrudService.prototype.update = /**
         * Update an item
         * @param {?} item
         * @return {?}
         */
            function (item) {
                if (!(item && item.id)) {
                    return rxjs.throwError(new ModelError('updated user group mustn\'t be null and must have an id.'));
                }
                return this.put("/" + item.id, item);
            };
        /**
         * Delete an item
         */
        /**
         * Delete an item
         * @param {?} idOrItem
         * @return {?}
         */
        CrudService.prototype.delete = /**
         * Delete an item
         * @param {?} idOrItem
         * @return {?}
         */
            function (idOrItem) {
                idOrItem = typeof idOrItem === 'object' ? idOrItem.id : idOrItem;
                if (!idOrItem) {
                    return rxjs.throwError(new ReferenceError('null reference user group id'));
                }
                return this.deleteFromRoute("/" + idOrItem);
            };
        return CrudService;
    }(HttpJsonToObjectService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ LoggerService = /** @class */ (function () {
        function LoggerService() {
        }
        return LoggerService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConsoleLoggerService = /** @class */ (function (_super) {
        __extends(ConsoleLoggerService, _super);
        function ConsoleLoggerService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.trace = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log("Trace" /* Trace */, message);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.debug = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log("Debug" /* Debug */, message);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.info = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log("Info" /* Info */, message);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.warning = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log("Warning" /* Warning */, message);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.error = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log("Error" /* Error */, message);
            };
        /**
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.fatal = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                this.log("Fatal" /* Fatal */, message);
            };
        /**
         * @param {?} level
         * @param {?} message
         * @return {?}
         */
        ConsoleLoggerService.prototype.log = /**
         * @param {?} level
         * @param {?} message
         * @return {?}
         */
            function (level, message) {
                /** @type {?} */
                var messageFormatted = "[" + level + "] " + new Date().toISOString() + ": " + message;
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
            };
        ConsoleLoggerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */ ConsoleLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function ConsoleLoggerService_Factory() { return new ConsoleLoggerService(); }, token: ConsoleLoggerService, providedIn: "root" });
        return ConsoleLoggerService;
    }(LoggerService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MULTI_LOGGER_SERVICES = new i0.InjectionToken('multi-logger logger services');
    /**
     * @requires MULTI_LOGGER_SERVICES
     */
    var MultiLoggerService = /** @class */ (function (_super) {
        __extends(MultiLoggerService, _super);
        function MultiLoggerService(loggerServices) {
            var _this = _super.call(this) || this;
            _this.loggerServices = loggerServices;
            return _this;
        }
        /**
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.trace = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var e_1, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.trace(message);
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.debug = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var e_2, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.debug(message);
                    }
                }
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            };
        /**
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.info = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var e_3, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.info(message);
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
            };
        /**
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.warning = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var e_4, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.warning(message);
                    }
                }
                catch (e_4_1) {
                    e_4 = { error: e_4_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_4)
                            throw e_4.error;
                    }
                }
            };
        /**
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.error = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var e_5, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.error(message);
                    }
                }
                catch (e_5_1) {
                    e_5 = { error: e_5_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_5)
                            throw e_5.error;
                    }
                }
            };
        /**
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.fatal = /**
         * @param {?} message
         * @return {?}
         */
            function (message) {
                var e_6, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.fatal(message);
                    }
                }
                catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_6)
                            throw e_6.error;
                    }
                }
            };
        /**
         * @param {?} level
         * @param {?} message
         * @return {?}
         */
        MultiLoggerService.prototype.log = /**
         * @param {?} level
         * @param {?} message
         * @return {?}
         */
            function (level, message) {
                var e_7, _a;
                try {
                    for (var _b = __values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var logger = _c.value;
                        logger.log(level, message);
                    }
                }
                catch (e_7_1) {
                    e_7 = { error: e_7_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_7)
                            throw e_7.error;
                    }
                }
            };
        MultiLoggerService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        MultiLoggerService.ctorParameters = function () {
            return [
                { type: Array, decorators: [{ type: i0.Inject, args: [MULTI_LOGGER_SERVICES,] }] }
            ];
        };
        /** @nocollapse */ MultiLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function MultiLoggerService_Factory() { return new MultiLoggerService(i0.inject(MULTI_LOGGER_SERVICES)); }, token: MultiLoggerService, providedIn: "root" });
        return MultiLoggerService;
    }(LoggerService));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var NotifyKind = {
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
    var /**
     * @abstract
     */ NotifyService = /** @class */ (function () {
        function NotifyService() {
        }
        /**
         * Notify a message for the specified type if the service is defined
         * @param notifyService service use for notification if defined
         * @param message message
         * @param kind kind of notification
         */
        /**
         * Notify a message for the specified type if the service is defined
         * @param {?} notifyService service use for notification if defined
         * @param {?} message message
         * @param {?} kind kind of notification
         * @return {?}
         */
        NotifyService.notify = /**
         * Notify a message for the specified type if the service is defined
         * @param {?} notifyService service use for notification if defined
         * @param {?} message message
         * @param {?} kind kind of notification
         * @return {?}
         */
            function (notifyService, message, kind) {
                // tslint:disable-next-line:no-unused-expression
                notifyService && notifyService.notify(message, kind);
            };
        return NotifyService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var KeyValuePair = /** @class */ (function () {
        function KeyValuePair(key, value) {
            this.key = null;
            this.value = null;
            this.key = key;
            this.value = value;
        }
        __decorate([
            json2typescript.JsonProperty('key'),
            __metadata("design:type", Object)
        ], KeyValuePair.prototype, "key", void 0);
        __decorate([
            json2typescript.JsonProperty('value'),
            __metadata("design:type", Object)
        ], KeyValuePair.prototype, "value", void 0);
        KeyValuePair = __decorate([
            json2typescript.JsonObject(),
            __metadata("design:paramtypes", [Object, Object])
        ], KeyValuePair);
        return KeyValuePair;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} control
     * @param {...?} functions
     * @return {?}
     */
    function controlErrorMessage(control) {
        var functions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            functions[_i - 1] = arguments[_i];
        }
        var e_1, _a;
        try {
            for (var functions_1 = __values(functions), functions_1_1 = functions_1.next(); !functions_1_1.done; functions_1_1 = functions_1.next()) {
                var func = functions_1_1.value;
                /** @type {?} */
                var message = func[0](control, func[1]);
                if (message) {
                    return message;
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (functions_1_1 && !functions_1_1.done && (_a = functions_1.return))
                    _a.call(functions_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
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
            return "Required.";
        }
        return null;
    }
    /**
     * @param {?} control
     * @return {?}
     */
    function getEmailError(control) {
        if (control.errors && control.errors.email) {
            return "No valid email.";
        }
        return null;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var JsonDateConverter = /** @class */ (function () {
        function JsonDateConverter() {
        }
        /**
         * @param {?} date
         * @return {?}
         */
        JsonDateConverter.prototype.serialize = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date.toISOString();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        JsonDateConverter.prototype.deserialize = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return date ? new Date(date) : null;
            };
        JsonDateConverter = __decorate([
            json2typescript.JsonConverter
        ], JsonDateConverter);
        return JsonDateConverter;
    }());

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
        var t1 = typeof o1;
        /** @type {?} */
        var t2 = typeof o2;
        /** @type {?} */
        var length;
        /** @type {?} */
        var key;
        /** @type {?} */
        var keySet;
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
        var output = Object.assign({}, target);
        if (isObject(target) && isObject(source)) {
            Object.keys(source).forEach(( /**
             * @param {?} key
             * @return {?}
             */function (key) {
                var _a, _b;
                if (isObject(source[key])) {
                    if (!(key in target)) {
                        Object.assign(output, (_a = {}, _a[key] = source[key], _a));
                    }
                    else {
                        output[key] = mergeDeep(target[key], source[key]);
                    }
                }
                else {
                    Object.assign(output, (_b = {}, _b[key] = source[key], _b));
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

    exports.ConceptModule = ConceptModule;
    exports.mustMatch = mustMatch;
    exports.getMustMatchError = getMustMatchError;
    exports.ResponseHeadersRetrieverHelper = ResponseHeadersRetrieverHelper;
    exports.DataListQueryFilter = DataListQueryFilter;
    exports.DataListQueryHelper = DataListQueryHelper;
    exports.HttpJsonToObjectService = HttpJsonToObjectService;
    exports.BodyWithHeaders = BodyWithHeaders;
    exports.ArrayBodyWithHeaders = ArrayBodyWithHeaders;
    exports.TableParams = TableParams;
    exports.TablePaginationParams = TablePaginationParams;
    exports.PaginationCollection = PaginationCollection;
    exports.CrudService = CrudService;
    exports.LoggerService = LoggerService;
    exports.ConsoleLoggerService = ConsoleLoggerService;
    exports.MULTI_LOGGER_SERVICES = MULTI_LOGGER_SERVICES;
    exports.MultiLoggerService = MultiLoggerService;
    exports.NotifyKind = NotifyKind;
    exports.NotifyService = NotifyService;
    exports.KeyValuePair = KeyValuePair;
    exports.ConceptError = ConceptError;
    exports.ModelError = ModelError;
    exports.controlErrorMessage = controlErrorMessage;
    exports.getRequiredError = getRequiredError;
    exports.getEmailError = getEmailError;
    exports.MustMatch = MustMatch;
    exports.MustMatchDirective = MustMatchDirective;
    exports.JsonDateConverter = JsonDateConverter;
    exports.JsonToTypedHelper = JsonToTypedHelper;
    exports.equals = equals;
    exports.isDefined = isDefined;
    exports.isObject = isObject;
    exports.mergeDeep = mergeDeep;
    exports.ɵa = BasicLayoutComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=concept.umd.js.map