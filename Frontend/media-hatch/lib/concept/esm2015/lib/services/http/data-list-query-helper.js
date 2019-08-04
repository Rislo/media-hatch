/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DataListQueryFilter {
    /**
     * @param {?} field
     * @param {?} value
     */
    constructor(field, value) {
        this.field = field;
        this.value = value;
    }
}
if (false) {
    /** @type {?} */
    DataListQueryFilter.prototype.field;
    /** @type {?} */
    DataListQueryFilter.prototype.value;
}
export class DataListQueryHelper {
    /**
     * @param {?=} config
     */
    constructor(config = DataListQueryHelper.defaultConfig) {
        this.config = config;
    }
    /**
     * @param {?=} tableParams
     * @return {?}
     */
    getTableRequestParameters(tableParams) {
        /** @type {?} */
        let params = new HttpParams();
        if (tableParams) {
            params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
            params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
            for (const filter of tableParams.filters || []) {
                params = params.append(filter.field, filter.value);
            }
        }
        return params;
    }
    /**
     * @param {?} tableParams
     * @return {?}
     */
    getTablePaginationRequestParameters(tableParams) {
        /** @type {?} */
        let params = new HttpParams();
        params = tableParams.sort ? params.append(this.config.sortKey, tableParams.sort) : params;
        params = tableParams.orderDesc ? params.append(this.config.orderKey, tableParams.orderDesc.toString()) : params;
        params = tableParams.currentPage ? params.append(this.config.pageNbKey, tableParams.currentPage.toString()) : params;
        params = tableParams.pageSize ? params.append(this.config.pageSizeKey, tableParams.pageSize.toString()) : params;
        for (const filter of tableParams.filters || []) {
            params = params.append(filter.field, filter.value);
        }
        return params;
    }
}
DataListQueryHelper.defaultConfig = {
    pageSizeKey: '_limit',
    pageNbKey: '_page',
    sortKey: '_sort',
    orderKey: '_order'
};
if (false) {
    /** @type {?} */
    DataListQueryHelper.defaultConfig;
    /**
     * @type {?}
     * @private
     */
    DataListQueryHelper.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1saXN0LXF1ZXJ5LWhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbmNlcHQvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaHR0cC9kYXRhLWxpc3QtcXVlcnktaGVscGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFHbEQsK0NBS0M7OztJQUpDLGdEQUFvQjs7SUFDcEIsOENBQWtCOztJQUNsQiw0Q0FBZ0I7O0lBQ2hCLDZDQUFpQjs7QUFHbkIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsWUFBbUIsS0FBYSxFQUFTLEtBQWE7UUFBbkMsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7SUFBRyxDQUFDO0NBQzNEOzs7SUFEYSxvQ0FBb0I7O0lBQUUsb0NBQW9COztBQUd4RCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBUTlCLFlBQW9CLFNBQW9DLG1CQUFtQixDQUFDLGFBQWE7UUFBckUsV0FBTSxHQUFOLE1BQU0sQ0FBK0Q7SUFBRyxDQUFDOzs7OztJQUV0Rix5QkFBeUIsQ0FBQyxXQUF5Qjs7WUFDcEQsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO1FBQzdCLElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUYsTUFBTSxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEgsS0FBSyxNQUFNLE1BQU0sSUFBSSxXQUFXLENBQUMsT0FBTyxJQUFJLEVBQUUsRUFBRTtnQkFDOUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEQ7U0FDRjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU0sbUNBQW1DLENBQUMsV0FBa0M7O1lBQ3ZFLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRTtRQUM3QixNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMxRixNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNoSCxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNySCxNQUFNLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNqSCxLQUFLLE1BQU0sTUFBTSxJQUFJLFdBQVcsQ0FBQyxPQUFPLElBQUksRUFBRSxFQUFFO1lBQzlDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7QUEvQmEsaUNBQWEsR0FBRztJQUM1QixXQUFXLEVBQUUsUUFBUTtJQUNyQixTQUFTLEVBQUUsT0FBTztJQUNsQixPQUFPLEVBQUUsT0FBTztJQUNoQixRQUFRLEVBQUUsUUFBUTtDQUNuQixDQUFDOzs7SUFMRixrQ0FLRTs7Ozs7SUFFVSxxQ0FBNkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBUYWJsZVBhZ2luYXRpb25QYXJhbXMsIFRhYmxlUGFyYW1zIH0gZnJvbSAnLi9odHRwLWpzb24tdG8tb2JqZWN0LnNlcnZpY2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnIHtcclxuICBwYWdlU2l6ZUtleTogc3RyaW5nO1xyXG4gIHBhZ2VOYktleTogc3RyaW5nO1xyXG4gIHNvcnRLZXk6IHN0cmluZztcclxuICBvcmRlcktleTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUxpc3RRdWVyeUZpbHRlciB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGZpZWxkOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogc3RyaW5nKSB7fVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGF0YUxpc3RRdWVyeUhlbHBlciB7XHJcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0Q29uZmlnID0ge1xyXG4gICAgcGFnZVNpemVLZXk6ICdfbGltaXQnLFxyXG4gICAgcGFnZU5iS2V5OiAnX3BhZ2UnLFxyXG4gICAgc29ydEtleTogJ19zb3J0JyxcclxuICAgIG9yZGVyS2V5OiAnX29yZGVyJ1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBEYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnID0gRGF0YUxpc3RRdWVyeUhlbHBlci5kZWZhdWx0Q29uZmlnKSB7fVxyXG5cclxuICBwdWJsaWMgZ2V0VGFibGVSZXF1ZXN0UGFyYW1ldGVycyh0YWJsZVBhcmFtcz86IFRhYmxlUGFyYW1zKTogSHR0cFBhcmFtcyB7XHJcbiAgICBsZXQgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKTtcclxuICAgIGlmICh0YWJsZVBhcmFtcykge1xyXG4gICAgICBwYXJhbXMgPSB0YWJsZVBhcmFtcy5zb3J0ID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5zb3J0S2V5LCB0YWJsZVBhcmFtcy5zb3J0KSA6IHBhcmFtcztcclxuICAgICAgcGFyYW1zID0gdGFibGVQYXJhbXMub3JkZXJEZXNjID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5vcmRlcktleSwgdGFibGVQYXJhbXMub3JkZXJEZXNjLnRvU3RyaW5nKCkpIDogcGFyYW1zO1xyXG4gICAgICBmb3IgKGNvbnN0IGZpbHRlciBvZiB0YWJsZVBhcmFtcy5maWx0ZXJzIHx8IFtdKSB7XHJcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChmaWx0ZXIuZmllbGQsIGZpbHRlci52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0VGFibGVQYWdpbmF0aW9uUmVxdWVzdFBhcmFtZXRlcnModGFibGVQYXJhbXM6IFRhYmxlUGFnaW5hdGlvblBhcmFtcyk6IEh0dHBQYXJhbXMge1xyXG4gICAgbGV0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCk7XHJcbiAgICBwYXJhbXMgPSB0YWJsZVBhcmFtcy5zb3J0ID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5zb3J0S2V5LCB0YWJsZVBhcmFtcy5zb3J0KSA6IHBhcmFtcztcclxuICAgIHBhcmFtcyA9IHRhYmxlUGFyYW1zLm9yZGVyRGVzYyA/IHBhcmFtcy5hcHBlbmQodGhpcy5jb25maWcub3JkZXJLZXksIHRhYmxlUGFyYW1zLm9yZGVyRGVzYy50b1N0cmluZygpKSA6IHBhcmFtcztcclxuICAgIHBhcmFtcyA9IHRhYmxlUGFyYW1zLmN1cnJlbnRQYWdlID8gcGFyYW1zLmFwcGVuZCh0aGlzLmNvbmZpZy5wYWdlTmJLZXksIHRhYmxlUGFyYW1zLmN1cnJlbnRQYWdlLnRvU3RyaW5nKCkpIDogcGFyYW1zO1xyXG4gICAgcGFyYW1zID0gdGFibGVQYXJhbXMucGFnZVNpemUgPyBwYXJhbXMuYXBwZW5kKHRoaXMuY29uZmlnLnBhZ2VTaXplS2V5LCB0YWJsZVBhcmFtcy5wYWdlU2l6ZS50b1N0cmluZygpKSA6IHBhcmFtcztcclxuICAgIGZvciAoY29uc3QgZmlsdGVyIG9mIHRhYmxlUGFyYW1zLmZpbHRlcnMgfHwgW10pIHtcclxuICAgICAgcGFyYW1zID0gcGFyYW1zLmFwcGVuZChmaWx0ZXIuZmllbGQsIGZpbHRlci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFyYW1zO1xyXG4gIH1cclxufVxyXG4iXX0=