/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { JsonConverter } from 'json2typescript';
var JsonDateConverter = /** @class */ (function () {
    function JsonDateConverter() {
    }
    /**
     * @param {?} date
     * @return {?}
     */
    JsonDateConverter.prototype.serialize = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.toISOString();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    JsonDateConverter.prototype.deserialize = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ? new Date(date) : null;
    };
    JsonDateConverter = tslib_1.__decorate([
        JsonConverter
    ], JsonDateConverter);
    return JsonDateConverter;
}());
export { JsonDateConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1kYXRlLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvanNvbi1kYXRlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBcUIsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztJQVVuRSxDQUFDOzs7OztJQU5DLHFDQUFTOzs7O0lBQVQsVUFBVSxJQUFVO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzVCLENBQUM7Ozs7O0lBQ0QsdUNBQVc7Ozs7SUFBWCxVQUFZLElBQVM7UUFDbkIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQztJQU5VLGlCQUFpQjtRQUQ3QixhQUFhO09BQ0QsaUJBQWlCLENBTzdCO0lBQUQsd0JBQUM7Q0FBQSxJQUFBO1NBUFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkN1c3RvbUNvbnZlcnQsIEpzb25Db252ZXJ0ZXIgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xyXG5cclxuQEpzb25Db252ZXJ0ZXJcclxuZXhwb3J0IGNsYXNzIEpzb25EYXRlQ29udmVydGVyIGltcGxlbWVudHMgSnNvbkN1c3RvbUNvbnZlcnQ8RGF0ZT4ge1xyXG4gIHNlcmlhbGl6ZShkYXRlOiBEYXRlKSB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xyXG4gIH1cclxuICBkZXNlcmlhbGl6ZShkYXRlOiBhbnkpOiBEYXRlIHtcclxuICAgIHJldHVybiBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=