/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpParams } from '@angular/common/http';
/**
 * @record
 */
export function DataListQueryHelperConfig() { }
if (false) {
    /** @type {?} */
    DataListQueryHelperConfig.prototype.pageSizeKey;
    /** @type {?} */
    DataListQueryHelperConfig.prototype.pageNbKey;
    /** @type {?} */
    DataListQueryHelperConfig.prototype.sortKey;
    /** @type {?} */
    DataListQueryHelperConfig.prototype.orderKey;
}
var DataListQueryFilter = /** @class */ (function () {
    function DataListQueryFilter(field, value) {
        this.field = field;
        this.value = value;
    }
    return DataListQueryFilter;
}());
export { DataListQueryFilter };
if (false) {
    /** @type {?} */
    DataListQueryFilter.prototype.field;
    /** @type {?} */
    DataListQueryFilter.prototype.value;
}
var DataListQueryHelper = /** @class */ (function () {
    function DataListQueryHelper(config) {
        if (config === void 0) { config = DataListQueryHelper.defaultConfig; }
        this.config = config;
    }
    /**
     * @param {?=} tableParams
     * @return {?}
     */
    DataListQueryHelper.prototype.getTableRequestParameters = /**
     * @param {?=} tableParams
     * @return {?}
     */
    function (tableParams) {
        var e_1, _a;
        /** @type {?} */
        var params = new HttpParams();
        if (tableParams) {
            params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
            params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
            try {
                for (var _b = tslib_1.__values(tableParams.filters || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var filter = _c.value;
                    params = params.append(filter.field, filter.value);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return params;
    };
    /**
     * @param {?} tableParams
     * @return {?}
     */
    DataListQueryHelper.prototype.getTablePaginationRequestParameters = /**
     * @param {?} tableParams
     * @return {?}
     */
    function (tableParams) {
        var e_2, _a;
        /** @type {?} */
        var params = new HttpParams();
        params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
        params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
        params = tableParams.currentPage ? params.append(this.config.pageNbKey, tableParams.currentPage.toString()) : params;
        params = tableParams.pageSize ? params.append(this.config.pageSizeKey, tableParams.pageSize.toString()) : params;
        try {
            for (var _b = tslib_1.__values(tableParams.filters || []), _c = _b.next(); !_c.done; _c = _b.next()) {
                var filter = _c.value;
                params = params.append(filter.field, filter.value);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return params;
    };
    DataListQueryHelper.defaultConfig = {
        pageSizeKey: '_limit',
        pageNbKey: '_page',
        sortKey: '_sort',
        orderKey: '_order'
    };
    return DataListQueryHelper;
}());
export { DataListQueryHelper };
if (false) {
    /** @type {?} */
    DataListQueryHelper.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    DataListQueryHelper.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1saXN0LXF1ZXJ5LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC9kYXRhLWxpc3QtcXVlcnktaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBR2xELCtDQUtDOzs7SUFKQyxnREFBb0I7O0lBQ3BCLDhDQUFrQjs7SUFDbEIsNENBQWdCOztJQUNoQiw2Q0FBaUI7O0FBR25CO0lBQ0UsNkJBQW1CLEtBQWEsRUFBUyxLQUFhO1FBQW5DLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFRO0lBQUcsQ0FBQztJQUM1RCwwQkFBQztBQUFELENBQUMsQUFGRCxJQUVDOzs7O0lBRGEsb0NBQW9COztJQUFFLG9DQUFvQjs7QUFHeEQ7SUFRRSw2QkFBb0IsTUFBcUU7UUFBckUsdUJBQUEsRUFBQSxTQUFvQyxtQkFBbUIsQ0FBQyxhQUFhO1FBQXJFLFdBQU0sR0FBTixNQUFNLENBQStEO0lBQUcsQ0FBQzs7Ozs7SUFFdEYsdURBQXlCOzs7O0lBQWhDLFVBQWlDLFdBQXlCOzs7WUFDcEQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUYsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O2dCQUNoSCxLQUFxQixJQUFBLEtBQUEsaUJBQUEsV0FBVyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNDLElBQU0sTUFBTSxXQUFBO29CQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNwRDs7Ozs7Ozs7O1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVNLGlFQUFtQzs7OztJQUExQyxVQUEyQyxXQUFrQzs7O1lBQ3ZFLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUM3QixNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxRixNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoSCxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNySCxNQUFNLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7WUFDakgsS0FBcUIsSUFBQSxLQUFBLGlCQUFBLFdBQVcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFBLGdCQUFBLDRCQUFFO2dCQUEzQyxJQUFNLE1BQU0sV0FBQTtnQkFDZixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNwRDs7Ozs7Ozs7O1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQS9CYSxpQ0FBYSxHQUFHO1FBQzVCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFFBQVEsRUFBRSxRQUFRO0tBQ25CLENBQUM7SUEyQkosMEJBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWpDWSxtQkFBbUI7OztJQUM5QixrQ0FLRTs7Ozs7SUFFVSxxQ0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBUYWJsZVBhZ2luYXRpb25QYXJhbXMsIFRhYmxlUGFyYW1zIH0gZnJvbSAnLi9odHRwLWpzb24tdG8tb2JqZWN0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnIHtcclxuICBwYWdlU2l6ZUtleTogc3RyaW5nO1xyXG4gIHBhZ2VOYktleTogc3RyaW5nO1xyXG4gIHNvcnRLZXk6IHN0cmluZztcclxuICBvcmRlcktleTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUxpc3RRdWVyeUZpbHRlciB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGZpZWxkOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUxpc3RRdWVyeUhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgcGFnZVNpemVLZXk6ICdfbGltaXQnLFxyXG4gICAgcGFnZU5iS2V5OiAnX3BhZ2UnLFxyXG4gICAgc29ydEtleTogJ19zb3J0JyxcclxuICAgIG9yZGVyS2V5OiAnX29yZGVyJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnID0gRGF0YUxpc3RRdWVyeUhlbHBlci5kZWZhdWx0Q29uZmlnKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0VGFibGVSZXF1ZXN0UGFyYW1ldGVycyh0YWJsZVBhcmFtcz86IFRhYmxlUGFyYW1zKTogSHR0cFBhcmFtcyB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIGlmICh0YWJsZVBhcmFtcykge1xyXG4gICAgICBwYXJhbXMgPSB0YWJsZVBhcmFtcy5zb3J0ID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5zb3J0S2V5LCB0YWJsZVBhcmFtcy5zb3J0KSA6IHBhcmFtcztcclxuICAgICAgcGFyYW1zID0gdGFibGVQYXJhbXMub3JkZXJEZXNjID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5vcmRlcktleSwgdGFibGVQYXJhbXMub3JkZXJEZXNjLnRvU3RyaW5nKCkpIDogcGFyYW1zO1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiB0YWJsZVBhcmFtcy5maWx0ZXJzIHx8IFtdKSB7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChmaWx0ZXIuZmllbGQsIGZpbHRlci52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VGFibGVQYWdpbmF0aW9uUmVxdWVzdFBhcmFtZXRlcnModGFibGVQYXJhbXM6IFRhYmxlUGFnaW5hdGlvblBhcmFtcyk6IEh0dHBQYXJhbXMge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMgPSB0YWJsZVBhcmFtcy5zb3J0ID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5zb3J0S2V5LCB0YWJsZVBhcmFtcy5zb3J0KSA6IHBhcmFtcztcclxuICAgIHBhcmFtcyA9IHRhYmxlUGFyYW1zLm9yZGVyRGVzYyA/IHBhcmFtcy5hcHBlbmQodGhpcy5jb25maWcub3JkZXJLZXksIHRhYmxlUGFyYW1zLm9yZGVyRGVzYy50b1N0cmluZygpKSA6IHBhcmFtcztcclxuICAgIHBhcmFtcyA9IHRhYmxlUGFyYW1zLmN1cnJlbnRQYWdlID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5wYWdlTmJLZXksIHRhYmxlUGFyYW1zLmN1cnJlbnRQYWdlLnRvU3RyaW5nKCkpIDogcGFyYW1zO1xyXG4gICAgcGFyYW1zID0gdGFibGVQYXJhbXMucGFnZVNpemUgPyBwYXJhbXMuYXBwZW5kKHRoaXMuY29uZmlnLnBhZ2VTaXplS2V5LCB0YWJsZVBhcmFtcy5wYWdlU2l6ZS50b1N0cmluZygpKSA6IHBhcmFtcztcclxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIHRhYmxlUGFyYW1zLmZpbHRlcnMgfHwgW10pIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChmaWx0ZXIuZmllbGQsIGZpbHRlci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=