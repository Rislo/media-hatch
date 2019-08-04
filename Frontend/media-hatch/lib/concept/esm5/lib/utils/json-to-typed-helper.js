/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
var JsonToTypedHelper = /** @class */ (function () {
    function JsonToTypedHelper() {
    }
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    JsonToTypedHelper.serialize = /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return JsonToTypedHelper.jsonConvert.serializeObject(value);
    };
    /**
     * @template T
     * @param {?} values
     * @return {?}
     */
    JsonToTypedHelper.serializeArray = /**
     * @template T
     * @param {?} values
     * @return {?}
     */
    function (values) {
        return JsonToTypedHelper.jsonConvert.serializeArray(values);
    };
    /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    JsonToTypedHelper.deserialize = /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    function (json, type) {
        return JsonToTypedHelper.jsonConvert.deserializeObject(json, type);
    };
    /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    JsonToTypedHelper.deserializeArray = /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    function (json, type) {
        return JsonToTypedHelper.jsonConvert.deserializeArray(json, type);
    };
    JsonToTypedHelper.jsonConvert = new JsonConvert(undefined, ValueCheckingMode.ALLOW_NULL);
    return JsonToTypedHelper;
}());
export { JsonToTypedHelper };
if (false) {
    /** @type {?} */
    JsonToTypedHelper.jsonConvert;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi10by10eXBlZC1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2pzb24tdG8tdHlwZWQtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakU7SUFBQTtJQWtCQSxDQUFDOzs7Ozs7SUFmZSwyQkFBUzs7Ozs7SUFBdkIsVUFBMkIsS0FBUTtRQUNqQyxPQUFPLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUksS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRWEsZ0NBQWM7Ozs7O0lBQTVCLFVBQWdDLE1BQVc7UUFDekMsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFJLE1BQU0sQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Ozs7Ozs7SUFFYSw2QkFBVzs7Ozs7O0lBQXpCLFVBQTZCLElBQVksRUFBRSxJQUFpQjtRQUMxRCxPQUFPLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7Ozs7OztJQUVhLGtDQUFnQjs7Ozs7O0lBQTlCLFVBQWtDLElBQWMsRUFBRSxJQUFpQjtRQUNqRSxPQUFPLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQWhCc0IsNkJBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFpQmhHLHdCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksaUJBQWlCOzs7SUFDNUIsOEJBQThGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkNvbnZlcnQsIFZhbHVlQ2hlY2tpbmdNb2RlIH0gZnJvbSAnanNvbjJ0eXBlc2NyaXB0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29uVG9UeXBlZEhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyByZWFkb25seSBqc29uQ29udmVydCA9IG5ldyBKc29uQ29udmVydCh1bmRlZmluZWQsIFZhbHVlQ2hlY2tpbmdNb2RlLkFMTE9XX05VTEwpO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIHNlcmlhbGl6ZTxUPih2YWx1ZTogVCk6IGFueSB7XHJcbiAgICByZXR1cm4gSnNvblRvVHlwZWRIZWxwZXIuanNvbkNvbnZlcnQuc2VyaWFsaXplT2JqZWN0PFQ+KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplQXJyYXk8VD4odmFsdWVzOiBUW10pOiBhbnkge1xyXG4gICAgcmV0dXJuIEpzb25Ub1R5cGVkSGVscGVyLmpzb25Db252ZXJ0LnNlcmlhbGl6ZUFycmF5PFQ+KHZhbHVlcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGRlc2VyaWFsaXplPFQ+KGpzb246IG9iamVjdCwgdHlwZTogbmV3ICgpID0+IFQpOiBUIHtcclxuICAgIHJldHVybiBKc29uVG9UeXBlZEhlbHBlci5qc29uQ29udmVydC5kZXNlcmlhbGl6ZU9iamVjdChqc29uLCB0eXBlKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemVBcnJheTxUPihqc29uOiBvYmplY3RbXSwgdHlwZTogbmV3ICgpID0+IFQpOiBUW10ge1xyXG4gICAgcmV0dXJuIEpzb25Ub1R5cGVkSGVscGVyLmpzb25Db252ZXJ0LmRlc2VyaWFsaXplQXJyYXkoanNvbiwgdHlwZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==