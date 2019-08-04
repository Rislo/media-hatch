/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
const LogLevel = {
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
export class LoggerService {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2xvZy9sb2dnZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7SUFDRSxPQUFRLE9BQU87SUFDZixPQUFRLE9BQU87SUFDZixNQUFPLE1BQU07SUFDYixTQUFVLFNBQVM7SUFDbkIsT0FBUSxPQUFPO0lBQ2YsT0FBUSxPQUFPOzs7Ozs7QUFHakIsTUFBTSxPQUFnQixhQUFhO0NBUWxDOzs7Ozs7O0lBUEMsdURBQTZDOzs7Ozs7SUFDN0MsdURBQTZDOzs7Ozs7SUFDN0Msc0RBQTRDOzs7Ozs7SUFDNUMseURBQStDOzs7Ozs7SUFDL0MsdURBQTZDOzs7Ozs7SUFDN0MsdURBQTZDOzs7Ozs7O0lBQzdDLDREQUE0RCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBlbnVtIExvZ0xldmVsIHtcclxuICBUcmFjZSA9ICdUcmFjZScsXHJcbiAgRGVidWcgPSAnRGVidWcnLFxyXG4gIEluZm8gPSAnSW5mbycsXHJcbiAgV2FybmluZyA9ICdXYXJuaW5nJyxcclxuICBFcnJvciA9ICdFcnJvcicsXHJcbiAgRmF0YWwgPSAnRmF0YWwnXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBMb2dnZXJTZXJ2aWNlIHtcclxuICBwdWJsaWMgYWJzdHJhY3QgdHJhY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3QgZGVidWcobWVzc2FnZTogc3RyaW5nKTogdm9pZDtcclxuICBwdWJsaWMgYWJzdHJhY3QgaW5mbyhtZXNzYWdlOiBzdHJpbmcpOiB2b2lkO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCB3YXJuaW5nKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbiAgcHVibGljIGFic3RyYWN0IGVycm9yKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbiAgcHVibGljIGFic3RyYWN0IGZhdGFsKG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbiAgcHVibGljIGFic3RyYWN0IGxvZyhsZXZlbDogTG9nTGV2ZWwsIG1lc3NhZ2U6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuIl19