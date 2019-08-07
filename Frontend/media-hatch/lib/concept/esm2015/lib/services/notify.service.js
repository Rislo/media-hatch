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
export { NotifyKind };
NotifyKind[NotifyKind.Info] = 'Info';
NotifyKind[NotifyKind.Warning] = 'Warning';
NotifyKind[NotifyKind.Error] = 'Error';
NotifyKind[NotifyKind.Success] = 'Success';
/**
 * @abstract
 */
export class NotifyService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZ5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL25vdGlmeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztJQUNFLE9BQUk7SUFDSixVQUFPO0lBQ1AsUUFBSztJQUNMLFVBQU87Ozs7Ozs7Ozs7QUFHVCxNQUFNLE9BQWdCLGFBQWE7Ozs7Ozs7O0lBTzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBK0MsRUFBRSxPQUFlLEVBQUUsSUFBZ0I7UUFDckcsZ0RBQWdEO1FBQ2hELGFBQWEsSUFBSSxhQUFhLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsZ0JBQWdCLENBQUM7Q0FRbEI7Ozs7Ozs7OztJQURDLDhEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIE5vdGlmeUtpbmQge1xyXG4gIEluZm8sXHJcbiAgV2FybmluZyxcclxuICBFcnJvcixcclxuICBTdWNjZXNzXHJcbn1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBOb3RpZnlTZXJ2aWNlIHtcclxuICAvKipcclxuICAgKiBOb3RpZnkgYSBtZXNzYWdlIGZvciB0aGUgc3BlY2lmaWVkIHR5cGUgaWYgdGhlIHNlcnZpY2UgaXMgZGVmaW5lZFxyXG4gICAqIEBwYXJhbSBub3RpZnlTZXJ2aWNlIHNlcnZpY2UgdXNlIGZvciBub3RpZmljYXRpb24gaWYgZGVmaW5lZFxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0ga2luZCBraW5kIG9mIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIHB1YmxpYyBzdGF0aWMgbm90aWZ5KG5vdGlmeVNlcnZpY2U6IE5vdGlmeVNlcnZpY2UgfCBudWxsIHwgdW5kZWZpbmVkLCBtZXNzYWdlOiBzdHJpbmcsIGtpbmQ6IE5vdGlmeUtpbmQpOiB2b2lkIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgbm90aWZ5U2VydmljZSAmJiBub3RpZnlTZXJ2aWNlLm5vdGlmeShtZXNzYWdlLCBraW5kKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE5vdGlmeSBhIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gbWVzc2FnZSBtZXNzYWdlIHRvIG5vdGl5XHJcbiAgICogQHBhcmFtIGtpbmQga2luZCBvZiBub3RpZmljYXRpb25cclxuICAgKi9cclxuICBhYnN0cmFjdCBub3RpZnkobWVzc2FnZTogc3RyaW5nLCBraW5kOiBOb3RpZnlLaW5kKTogdm9pZDtcclxufVxyXG4iXX0=