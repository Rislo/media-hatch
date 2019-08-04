/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ResponseHeadersRetrieverHelper {
    constructor() { }
    /**
     * @param {?} response
     * @param {?} key
     * @return {?}
     */
    static getJsonHeaderValue(response, key) {
        /** @type {?} */
        const headerValue = response.headers.get(key);
        if (headerValue) {
            return JSON.parse(headerValue);
        }
        else {
            return null;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UtaGVhZGVycy1yZXRyaWV2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3Jlc3BvbnNlLWhlYWRlcnMtcmV0cmlldmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxNQUFNLE9BQU8sOEJBQThCO0lBQ3ZDLGdCQUFlLENBQUM7Ozs7OztJQUVULE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUE4QixFQUFFLEdBQVc7O2NBQ2xFLFdBQVcsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDN0MsSUFBSSxXQUFXLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDbEM7YUFBTTtZQUNILE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VIZWFkZXJzUmV0cmlldmVySGVscGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEpzb25IZWFkZXJWYWx1ZShyZXNwb25zZTogSHR0cFJlc3BvbnNlPG9iamVjdD4sIGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyVmFsdWUgPSByZXNwb25zZS5oZWFkZXJzLmdldChrZXkpO1xyXG4gICAgICAgIGlmIChoZWFkZXJWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShoZWFkZXJWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==