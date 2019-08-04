/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import * as i0 from "@angular/core";
export class ConsoleLoggerService extends LoggerService {
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
/** @nocollapse */ ConsoleLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function ConsoleLoggerService_Factory() { return new ConsoleLoggerService(); }, token: ConsoleLoggerService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1sb2dnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nL2NvbnNvbGUtbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGFBQWEsRUFBWSxNQUFNLGtCQUFrQixDQUFDOztBQUszRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsYUFBYTs7Ozs7SUFFNUMsS0FBSyxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsc0JBQWlCLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsc0JBQWlCLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU0sSUFBSSxDQUFDLE9BQWU7UUFDdkIsSUFBSSxDQUFDLEdBQUcsb0JBQWdCLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBRU0sT0FBTyxDQUFDLE9BQWU7UUFDMUIsSUFBSSxDQUFDLEdBQUcsMEJBQW1CLE9BQU8sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsc0JBQWlCLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRU0sS0FBSyxDQUFDLE9BQWU7UUFDeEIsSUFBSSxDQUFDLEdBQUcsc0JBQWlCLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7OztJQUVNLEdBQUcsQ0FBQyxLQUFlLEVBQUUsT0FBZTs7Y0FFakMsZ0JBQWdCLEdBQUcsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7UUFFN0UsUUFBUSxLQUFLLEVBQUU7WUFDWCx5QkFBb0I7WUFDcEIseUJBQW9CO1lBQ3BCO2dCQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDOUIsTUFBTTtZQUVWO2dCQUNJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0IsTUFBTTtZQUVWLHlCQUFvQjtZQUNwQjtnQkFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ2hDLE1BQU07U0FDYjtJQUNMLENBQUM7OztZQWpESixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlLCBMb2dMZXZlbCB9IGZyb20gJy4vbG9nZ2VyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29uc29sZUxvZ2dlclNlcnZpY2UgZXh0ZW5kcyBMb2dnZXJTZXJ2aWNlIHtcclxuXHJcbiAgICBwdWJsaWMgdHJhY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuVHJhY2UsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5EZWJ1ZywgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuSW5mbywgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuV2FybmluZywgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nKExvZ0xldmVsLkVycm9yLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZmF0YWwobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuRmF0YWwsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbWVzc2FnZUZvcm1hdHRlZCA9IGBbJHtsZXZlbH1dICR7bmV3IERhdGUoKS50b0lTT1N0cmluZygpfTogJHttZXNzYWdlfWA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobGV2ZWwpIHtcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5UcmFjZTpcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5EZWJ1ZzpcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5JbmZvOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTG9nTGV2ZWwuV2FybmluZzpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5FcnJvcjpcclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5GYXRhbDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZUZvcm1hdHRlZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19