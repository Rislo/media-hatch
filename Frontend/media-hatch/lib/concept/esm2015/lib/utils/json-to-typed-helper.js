/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { JsonConvert, ValueCheckingMode } from 'json2typescript';
export class JsonToTypedHelper {
    /**
     * @template T
     * @param {?} value
     * @return {?}
     */
    static serialize(value) {
        return JsonToTypedHelper.jsonConvert.serializeObject(value);
    }
    /**
     * @template T
     * @param {?} values
     * @return {?}
     */
    static serializeArray(values) {
        return JsonToTypedHelper.jsonConvert.serializeArray(values);
    }
    /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    static deserialize(json, type) {
        return JsonToTypedHelper.jsonConvert.deserializeObject(json, type);
    }
    /**
     * @template T
     * @param {?} json
     * @param {?} type
     * @return {?}
     */
    static deserializeArray(json, type) {
        return JsonToTypedHelper.jsonConvert.deserializeArray(json, type);
    }
}
JsonToTypedHelper.jsonConvert = new JsonConvert(undefined, ValueCheckingMode.ALLOW_NULL);
if (false) {
    /** @type {?} */
    JsonToTypedHelper.jsonConvert;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi10by10eXBlZC1oZWxwZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb25jZXB0LyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2pzb24tdG8tdHlwZWQtaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFakUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBR3JCLE1BQU0sQ0FBQyxTQUFTLENBQUksS0FBUTtRQUNqQyxPQUFPLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUksS0FBSyxDQUFDLENBQUM7SUFDakUsQ0FBQzs7Ozs7O0lBRU0sTUFBTSxDQUFDLGNBQWMsQ0FBSSxNQUFXO1FBQ3pDLE9BQU8saUJBQWlCLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBSSxNQUFNLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7Ozs7O0lBRU0sTUFBTSxDQUFDLFdBQVcsQ0FBSSxJQUFZLEVBQUUsSUFBaUI7UUFDMUQsT0FBTyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsZ0JBQWdCLENBQUksSUFBYyxFQUFFLElBQWlCO1FBQ2pFLE9BQU8saUJBQWlCLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDOztBQWhCc0IsNkJBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEVBQUUsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUM7OztJQUE5Riw4QkFBOEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uQ29udmVydCwgVmFsdWVDaGVja2luZ01vZGUgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEpzb25Ub1R5cGVkSGVscGVyIHtcclxuICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IGpzb25Db252ZXJ0ID0gbmV3IEpzb25Db252ZXJ0KHVuZGVmaW5lZCwgVmFsdWVDaGVja2luZ01vZGUuQUxMT1dfTlVMTCk7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgc2VyaWFsaXplPFQ+KHZhbHVlOiBUKTogYW55IHtcclxuICAgIHJldHVybiBKc29uVG9UeXBlZEhlbHBlci5qc29uQ29udmVydC5zZXJpYWxpemVPYmplY3Q8VD4odmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBzZXJpYWxpemVBcnJheTxUPih2YWx1ZXM6IFRbXSk6IGFueSB7XHJcbiAgICByZXR1cm4gSnNvblRvVHlwZWRIZWxwZXIuanNvbkNvbnZlcnQuc2VyaWFsaXplQXJyYXk8VD4odmFsdWVzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZGVzZXJpYWxpemU8VD4oanNvbjogb2JqZWN0LCB0eXBlOiBuZXcgKCkgPT4gVCk6IFQge1xyXG4gICAgcmV0dXJuIEpzb25Ub1R5cGVkSGVscGVyLmpzb25Db252ZXJ0LmRlc2VyaWFsaXplT2JqZWN0KGpzb24sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBkZXNlcmlhbGl6ZUFycmF5PFQ+KGpzb246IG9iamVjdFtdLCB0eXBlOiBuZXcgKCkgPT4gVCk6IFRbXSB7XHJcbiAgICByZXR1cm4gSnNvblRvVHlwZWRIZWxwZXIuanNvbkNvbnZlcnQuZGVzZXJpYWxpemVBcnJheShqc29uLCB0eXBlKTtcclxuICB9XHJcbn1cclxuIl19