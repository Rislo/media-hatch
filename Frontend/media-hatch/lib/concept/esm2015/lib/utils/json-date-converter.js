/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { JsonConverter } from 'json2typescript';
let JsonDateConverter = class JsonDateConverter {
    /**
     * @param {?} date
     * @return {?}
     */
    serialize(date) {
        return date.toISOString();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    deserialize(date) {
        return date ? new Date(date) : null;
    }
};
JsonDateConverter = tslib_1.__decorate([
    JsonConverter
], JsonDateConverter);
export { JsonDateConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1kYXRlLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvanNvbi1kYXRlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBcUIsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7SUFHdEQsaUJBQWlCLFNBQWpCLGlCQUFpQjs7Ozs7SUFDNUIsU0FBUyxDQUFDLElBQVU7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFDRCxXQUFXLENBQUMsSUFBUztRQUNuQixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN0QyxDQUFDO0NBQ0YsQ0FBQTtBQVBZLGlCQUFpQjtJQUQ3QixhQUFhO0dBQ0QsaUJBQWlCLENBTzdCO1NBUFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSnNvbkN1c3RvbUNvbnZlcnQsIEpzb25Db252ZXJ0ZXIgfSBmcm9tICdqc29uMnR5cGVzY3JpcHQnO1xyXG5cclxuQEpzb25Db252ZXJ0ZXJcclxuZXhwb3J0IGNsYXNzIEpzb25EYXRlQ29udmVydGVyIGltcGxlbWVudHMgSnNvbkN1c3RvbUNvbnZlcnQ8RGF0ZT4ge1xyXG4gIHNlcmlhbGl6ZShkYXRlOiBEYXRlKSB7XHJcbiAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xyXG4gIH1cclxuICBkZXNlcmlhbGl6ZShkYXRlOiBhbnkpOiBEYXRlIHtcclxuICAgIHJldHVybiBkYXRlID8gbmV3IERhdGUoZGF0ZSkgOiBudWxsO1xyXG4gIH1cclxufVxyXG4iXX0=