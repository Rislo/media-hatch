/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var LogLevel = {
    Trace: 'Trace',
    Debug: 'Debug',
    Info: 'Info',
    Warning: 'Warning',
    Error: 'Error',
    Fatal: 'Fatal',
};
export { LogLevel };
/**
 * @abstract
 */
var /**
 * @abstract
 */
LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    return LoggerService;
}());
/**
 * @abstract
 */
export { LoggerService };
if (false) {
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.trace = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.debug = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.info = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.warning = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.error = function (message) { };
    /**
     * @abstract
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.fatal = function (message) { };
    /**
     * @abstract
     * @param {?} level
     * @param {?} message
     * @return {?}
     */
    LoggerService.prototype.log = function (level, message) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvZy9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDRSxPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87SUFDZixNQUFPLE1BQU07SUFDYixTQUFVLFNBQVM7SUFDbkIsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPOzs7Ozs7QUFHakI7Ozs7SUFBQTtJQVFBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFSRCxJQVFDOzs7Ozs7Ozs7OztJQVBDLHVEQUE2Qzs7Ozs7O0lBQzdDLHVEQUE2Qzs7Ozs7O0lBQzdDLHNEQUE0Qzs7Ozs7O0lBQzVDLHlEQUErQzs7Ozs7O0lBQy9DLHVEQUE2Qzs7Ozs7O0lBQzdDLHVEQUE2Qzs7Ozs7OztJQUM3Qyw0REFBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZW51bSBMb2dMZXZlbCB7XHJcbiAgVHJhY2UgPSAnVHJhY2UnLFxyXG4gIERlYnVnID0gJ0RlYnVnJyxcclxuICBJbmZvID0gJ0luZm8nLFxyXG4gIFdhcm5pbmcgPSAnV2FybmluZycsXHJcbiAgRXJyb3IgPSAnRXJyb3InLFxyXG4gIEZhdGFsID0gJ0ZhdGFsJ1xyXG59XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTG9nZ2VyU2VydmljZSB7XHJcbiAgcHVibGljIGFic3RyYWN0IHRyYWNlKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbiAgcHVibGljIGFic3RyYWN0IGRlYnVnKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbiAgcHVibGljIGFic3RyYWN0IGluZm8obWVzc2FnZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3Qgd2FybmluZyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBlcnJvcihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBmYXRhbChtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBsb2cobGV2ZWw6IExvZ0xldmVsLCBtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xyXG59XHJcbiJdfQ==