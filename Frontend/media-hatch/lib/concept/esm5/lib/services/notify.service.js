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
export { NotifyKind };
NotifyKind[NotifyKind.Info] = 'Info';
NotifyKind[NotifyKind.Warning] = 'Warning';
NotifyKind[NotifyKind.Error] = 'Error';
NotifyKind[NotifyKind.Success] = 'Success';
/**
 * @abstract
 */
var /**
 * @abstract
 */
NotifyService = /** @class */ (function () {
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
 * @abstract
 */
export { NotifyService };
if (false) {
    /**
     * Notify a message
     * @abstract
     * @param {?} message message to notiy
     * @param {?} kind kind of notification
     * @return {?}
     */
    NotifyService.prototype.notify = function (message, kind) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLE9BQUk7SUFDSixVQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87Ozs7Ozs7Ozs7QUFHVDs7OztJQVlFO0lBQWdCLENBQUM7SUFYakI7Ozs7O09BS0c7Ozs7Ozs7O0lBQ1csb0JBQU07Ozs7Ozs7SUFBcEIsVUFBcUIsYUFBK0MsRUFBRSxPQUFlLEVBQUUsSUFBZ0I7UUFDckcsZ0RBQWdEO1FBQ2hELGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBVUgsb0JBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDOzs7Ozs7Ozs7Ozs7O0lBREMsOERBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gTm90aWZ5S2luZCB7XHJcbiAgSW5mbyxcclxuICBXYXJuaW5nLFxyXG4gIEVycm9yLFxyXG4gIFN1Y2Nlc3NcclxufVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5vdGlmeVNlcnZpY2Uge1xyXG4gIC8qKlxyXG4gICAqIE5vdGlmeSBhIG1lc3NhZ2UgZm9yIHRoZSBzcGVjaWZpZWQgdHlwZSBpZiB0aGUgc2VydmljZSBpcyBkZWZpbmVkXHJcbiAgICogQHBhcmFtIG5vdGlmeVNlcnZpY2Ugc2VydmljZSB1c2UgZm9yIG5vdGlmaWNhdGlvbiBpZiBkZWZpbmVkXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBraW5kIGtpbmQgb2Ygbm90aWZpY2F0aW9uXHJcbiAgICovXHJcbiAgcHVibGljIHN0YXRpYyBub3RpZnkobm90aWZ5U2VydmljZTogTm90aWZ5U2VydmljZSB8IG51bGwgfCB1bmRlZmluZWQsIG1lc3NhZ2U6IHN0cmluZywga2luZDogTm90aWZ5S2luZCk6IHZvaWQge1xyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC1leHByZXNzaW9uXHJcbiAgICBub3RpZnlTZXJ2aWNlICYmIG5vdGlmeVNlcnZpY2Uubm90aWZ5KG1lc3NhZ2UsIGtpbmQpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogTm90aWZ5IGEgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIG1lc3NhZ2UgdG8gbm90aXlcclxuICAgKiBAcGFyYW0ga2luZCBraW5kIG9mIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIGFic3RyYWN0IG5vdGlmeShtZXNzYWdlOiBzdHJpbmcsIGtpbmQ6IE5vdGlmeUtpbmQpOiB2b2lkO1xyXG59XHJcbiJdfQ==