/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import * as i0 from "@angular/core";
/** @type {?} */
export var MULTI_LOGGER_SERVICES = new InjectionToken('multi-logger logger services');
/**
 * @requires MULTI_LOGGER_SERVICES
 */
var MultiLoggerService = /** @class */ (function (_super) {
    tslib_1.__extends(MultiLoggerService, _super);
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.trace(message);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.debug(message);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.info(message);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.warning(message);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.error(message);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.fatal(message);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
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
            for (var _b = tslib_1.__values(this.loggerServices), _c = _b.next(); !_c.done; _c = _b.next()) {
                var logger = _c.value;
                logger.log(level, message);
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_7) throw e_7.error; }
        }
    };
    MultiLoggerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    MultiLoggerService.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: Inject, args: [MULTI_LOGGER_SERVICES,] }] }
    ]; };
    /** @nocollapse */ MultiLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function MultiLoggerService_Factory() { return new MultiLoggerService(i0.inject(MULTI_LOGGER_SERVICES)); }, token: MultiLoggerService, providedIn: "root" });
    return MultiLoggerService;
}(LoggerService));
export { MultiLoggerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MultiLoggerService.prototype.loggerServices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktbG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvZy9tdWx0aS1sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRSxPQUFPLEVBQUUsYUFBYSxFQUFZLE1BQU0sa0JBQWtCLENBQUM7OztBQUUzRCxNQUFNLEtBQU8scUJBQXFCLEdBQUcsSUFBSSxjQUFjLENBQ3JELDhCQUE4QixDQUMvQjs7OztBQUtEO0lBR3dDLDhDQUFhO0lBRW5ELDRCQUEwRCxjQUErQjtRQUF6RixZQUNFLGlCQUFPLFNBQ1I7UUFGeUQsb0JBQWMsR0FBZCxjQUFjLENBQWlCOztJQUV6RixDQUFDOzs7OztJQUVNLGtDQUFLOzs7O0lBQVosVUFBYSxPQUFlOzs7WUFDMUIsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJDLElBQU0sTUFBTSxXQUFBO2dCQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdkI7Ozs7Ozs7OztJQUNILENBQUM7Ozs7O0lBRU0sa0NBQUs7Ozs7SUFBWixVQUFhLE9BQWU7OztZQUMxQixLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBckMsSUFBTSxNQUFNLFdBQUE7Z0JBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2Qjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7SUFFTSxpQ0FBSTs7OztJQUFYLFVBQVksT0FBZTs7O1lBQ3pCLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFyQyxJQUFNLE1BQU0sV0FBQTtnQkFDZixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7OztJQUVNLG9DQUFPOzs7O0lBQWQsVUFBZSxPQUFlOzs7WUFDNUIsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJDLElBQU0sTUFBTSxXQUFBO2dCQUNmLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDekI7Ozs7Ozs7OztJQUNILENBQUM7Ozs7O0lBRU0sa0NBQUs7Ozs7SUFBWixVQUFhLE9BQWU7OztZQUMxQixLQUFxQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGNBQWMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBckMsSUFBTSxNQUFNLFdBQUE7Z0JBQ2YsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN2Qjs7Ozs7Ozs7O0lBQ0gsQ0FBQzs7Ozs7SUFFTSxrQ0FBSzs7OztJQUFaLFVBQWEsT0FBZTs7O1lBQzFCLEtBQXFCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFBLGdCQUFBLDRCQUFFO2dCQUFyQyxJQUFNLE1BQU0sV0FBQTtnQkFDZixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3ZCOzs7Ozs7Ozs7SUFDSCxDQUFDOzs7Ozs7SUFFTSxnQ0FBRzs7Ozs7SUFBVixVQUFXLEtBQWUsRUFBRSxPQUFlOzs7WUFDekMsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxjQUFjLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQXJDLElBQU0sTUFBTSxXQUFBO2dCQUNmLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO2FBQzVCOzs7Ozs7Ozs7SUFDSCxDQUFDOztnQkFqREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs0Q0FHcUIsTUFBTSxTQUFDLHFCQUFxQjs7OzZCQWhCbEQ7Q0E2REMsQUFsREQsQ0FHd0MsYUFBYSxHQStDcEQ7U0EvQ1ksa0JBQWtCOzs7Ozs7SUFFViw0Q0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlLCBMb2dMZXZlbCB9IGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1VTFRJX0xPR0dFUl9TRVJWSUNFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMb2dnZXJTZXJ2aWNlW10+KFxyXG4gICdtdWx0aS1sb2dnZXIgbG9nZ2VyIHNlcnZpY2VzJ1xyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEByZXF1aXJlcyBNVUxUSV9MT0dHRVJfU0VSVklDRVNcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aUxvZ2dlclNlcnZpY2UgZXh0ZW5kcyBMb2dnZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoTVVMVElfTE9HR0VSX1NFUlZJQ0VTKSBwcml2YXRlIGxvZ2dlclNlcnZpY2VzOiBMb2dnZXJTZXJ2aWNlW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJhY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci50cmFjZShtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgbG9nZ2VyIG9mIHRoaXMubG9nZ2VyU2VydmljZXMpIHtcclxuICAgICAgbG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuaW5nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBsb2dnZXIgb2YgdGhpcy5sb2dnZXJTZXJ2aWNlcykge1xyXG4gICAgICBsb2dnZXIuZXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmF0YWwobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci5mYXRhbChtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGZvciAoY29uc3QgbG9nZ2VyIG9mIHRoaXMubG9nZ2VyU2VydmljZXMpIHtcclxuICAgICAgbG9nZ2VyLmxvZyhsZXZlbCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==