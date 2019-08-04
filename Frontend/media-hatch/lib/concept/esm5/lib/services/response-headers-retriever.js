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
export { ResponseHeadersRetrieverHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtaGVhZGVycy1yZXRyaWV2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Jlc3BvbnNlLWhlYWRlcnMtcmV0cmlldmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQTtJQUNJO0lBQWUsQ0FBQzs7Ozs7O0lBRUYsaURBQWtCOzs7OztJQUFoQyxVQUFpQyxRQUE4QixFQUFFLEdBQVc7O1lBQ2xFLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxXQUFXLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBQ0wscUNBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNwb25zZUhlYWRlcnNSZXRyaWV2ZXJIZWxwZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SnNvbkhlYWRlclZhbHVlKHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8b2JqZWN0Piwga2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBoZWFkZXJWYWx1ZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KGtleSk7XHJcbiAgICAgICAgaWYgKGhlYWRlclZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGhlYWRlclZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19