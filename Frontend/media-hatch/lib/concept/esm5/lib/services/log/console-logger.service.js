/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import * as i0 from "@angular/core";
var ConsoleLoggerService = /** @class */ (function (_super) {
    tslib_1.__extends(ConsoleLoggerService, _super);
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
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */ ConsoleLoggerService.ngInjectableDef = i0.defineInjectable({ factory: function ConsoleLoggerService_Factory() { return new ConsoleLoggerService(); }, token: ConsoleLoggerService, providedIn: "root" });
    return ConsoleLoggerService;
}(LoggerService));
export { ConsoleLoggerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS1sb2dnZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbG9nL2NvbnNvbGUtbG9nZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxhQUFhLEVBQVksTUFBTSxrQkFBa0IsQ0FBQzs7QUFFM0Q7SUFHMEMsZ0RBQWE7SUFIdkQ7O0tBa0RDOzs7OztJQTdDVSxvQ0FBSzs7OztJQUFaLFVBQWEsT0FBZTtRQUN4QixJQUFJLENBQUMsR0FBRyxzQkFBaUIsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBSzs7OztJQUFaLFVBQWEsT0FBZTtRQUN4QixJQUFJLENBQUMsR0FBRyxzQkFBaUIsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTSxtQ0FBSTs7OztJQUFYLFVBQVksT0FBZTtRQUN2QixJQUFJLENBQUMsR0FBRyxvQkFBZ0IsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFFTSxzQ0FBTzs7OztJQUFkLFVBQWUsT0FBZTtRQUMxQixJQUFJLENBQUMsR0FBRywwQkFBbUIsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBSzs7OztJQUFaLFVBQWEsT0FBZTtRQUN4QixJQUFJLENBQUMsR0FBRyxzQkFBaUIsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFTSxvQ0FBSzs7OztJQUFaLFVBQWEsT0FBZTtRQUN4QixJQUFJLENBQUMsR0FBRyxzQkFBaUIsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7Ozs7O0lBRU0sa0NBQUc7Ozs7O0lBQVYsVUFBVyxLQUFlLEVBQUUsT0FBZTs7WUFFakMsZ0JBQWdCLEdBQUcsTUFBSSxLQUFLLFVBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBSyxPQUFTO1FBRTdFLFFBQVEsS0FBSyxFQUFFO1lBQ1gseUJBQW9CO1lBQ3BCLHlCQUFvQjtZQUNwQjtnQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQzlCLE1BQU07WUFFVjtnQkFDSSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQy9CLE1BQU07WUFFVix5QkFBb0I7WUFDcEI7Z0JBQ0ksT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1NBQ2I7SUFDTCxDQUFDOztnQkFqREosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OytCQU5EO0NBc0RDLEFBbERELENBRzBDLGFBQWEsR0ErQ3REO1NBL0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IExvZ2dlclNlcnZpY2UsIExvZ0xldmVsIH0gZnJvbSAnLi9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb25zb2xlTG9nZ2VyU2VydmljZSBleHRlbmRzIExvZ2dlclNlcnZpY2Uge1xyXG5cclxuICAgIHB1YmxpYyB0cmFjZShtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5UcmFjZSwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlYnVnKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubG9nKExvZ0xldmVsLkRlYnVnLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5JbmZvLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5XYXJuaW5nLCBtZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXJyb3IobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuRXJyb3IsIG1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmYXRhbChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmxvZyhMb2dMZXZlbC5GYXRhbCwgbWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBtZXNzYWdlRm9ybWF0dGVkID0gYFske2xldmVsfV0gJHtuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCl9OiAke21lc3NhZ2V9YDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChsZXZlbCkge1xyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLlRyYWNlOlxyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkRlYnVnOlxyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkluZm86XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMb2dMZXZlbC5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKG1lc3NhZ2VGb3JtYXR0ZWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxyXG4gICAgICAgICAgICBjYXNlIExvZ0xldmVsLkZhdGFsOlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlRm9ybWF0dGVkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=