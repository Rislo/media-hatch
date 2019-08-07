/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, InjectionToken, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import * as i0 from "@angular/core";
/** @type {?} */
export const MULTI_LOGGER_SERVICES = new InjectionToken('multi-logger logger services');
/**
 * @requires MULTI_LOGGER_SERVICES
 */
export class MultiLoggerService extends LoggerService {
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
/** @nocollapse */ MultiLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function MultiLoggerService_Factory() { return new MultiLoggerService(i0.inject(MULTI_LOGGER_SERVICES)); }, token: MultiLoggerService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    MultiLoggerService.prototype.loggerServices;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktbG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvZy9tdWx0aS1sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxhQUFhLEVBQVksTUFBTSxrQkFBa0IsQ0FBQzs7O0FBRTNELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyxJQUFJLGNBQWMsQ0FDckQsOEJBQThCLENBQy9COzs7O0FBUUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLGFBQWE7Ozs7SUFFbkQsWUFBMEQsY0FBK0I7UUFDdkYsS0FBSyxFQUFFLENBQUM7UUFEZ0QsbUJBQWMsR0FBZCxjQUFjLENBQWlCO0lBRXpGLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLE9BQWU7UUFDMUIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7OztJQUVNLEtBQUssQ0FBQyxPQUFlO1FBQzFCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxJQUFJLENBQUMsT0FBZTtRQUN6QixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLE9BQWU7UUFDNUIsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVNLEtBQUssQ0FBQyxPQUFlO1FBQzFCLEtBQUssTUFBTSxNQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCO0lBQ0gsQ0FBQzs7Ozs7SUFFTSxLQUFLLENBQUMsT0FBZTtRQUMxQixLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7Ozs7OztJQUVNLEdBQUcsQ0FBQyxLQUFlLEVBQUUsT0FBZTtRQUN6QyxLQUFLLE1BQU0sTUFBTSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDNUI7SUFDSCxDQUFDOzs7WUFqREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O3dDQUdxQixNQUFNLFNBQUMscUJBQXFCOzs7Ozs7OztJQUE3Qiw0Q0FBc0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlLCBMb2dMZXZlbCB9IGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1VTFRJX0xPR0dFUl9TRVJWSUNFUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxMb2dnZXJTZXJ2aWNlW10+KFxyXG4gICdtdWx0aS1sb2dnZXIgbG9nZ2VyIHNlcnZpY2VzJ1xyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEByZXF1aXJlcyBNVUxUSV9MT0dHRVJfU0VSVklDRVNcclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNdWx0aUxvZ2dlclNlcnZpY2UgZXh0ZW5kcyBMb2dnZXJTZXJ2aWNlIHtcclxuXHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKEBJbmplY3QoTVVMVElfTE9HR0VSX1NFUlZJQ0VTKSBwcml2YXRlIGxvZ2dlclNlcnZpY2VzOiBMb2dnZXJTZXJ2aWNlW10pIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJhY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci50cmFjZShtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgbG9nZ2VyIG9mIHRoaXMubG9nZ2VyU2VydmljZXMpIHtcclxuICAgICAgbG9nZ2VyLmRlYnVnKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci5pbmZvKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci53YXJuaW5nKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBsb2dnZXIgb2YgdGhpcy5sb2dnZXJTZXJ2aWNlcykge1xyXG4gICAgICBsb2dnZXIuZXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZmF0YWwobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IGxvZ2dlciBvZiB0aGlzLmxvZ2dlclNlcnZpY2VzKSB7XHJcbiAgICAgIGxvZ2dlci5mYXRhbChtZXNzYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIGZvciAoY29uc3QgbG9nZ2VyIG9mIHRoaXMubG9nZ2VyU2VydmljZXMpIHtcclxuICAgICAgbG9nZ2VyLmxvZyhsZXZlbCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==