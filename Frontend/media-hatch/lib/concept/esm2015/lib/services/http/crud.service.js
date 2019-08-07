/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { HttpJsonToObjectService } from './http-json-to-object.service';
import { ModelError } from '../../errors/model-error';
import { DataListQueryHelper } from './data-list-query-helper';
/**
 * @abstract
 * @template TId, T
 */
export class CrudService extends HttpJsonToObjectService {
    /**
     * @param {?} httpClient
     * @param {?} type
     * @param {?} logger
     * @param {?=} startsUrl
     * @param {?=} dataListQueryHelperConfig
     */
    constructor(httpClient, type, logger, startsUrl = '', dataListQueryHelperConfig = DataListQueryHelper.defaultConfig) {
        super(httpClient, logger, startsUrl, dataListQueryHelperConfig);
        this.httpClient = httpClient;
        this.type = type;
        this.logger = logger;
    }
    /**
     * Create a new item
     * @param {?} item
     * @return {?}
     */
    create(item) {
        if (!item) {
            return throwError(new ModelError('created user group mustn\'t be null.'));
        }
        return this.postAndReturnObject('', item);
    }
    /**
     * Get one item
     * @param {?} id
     * @return {?}
     */
    read(id) {
        if (!id) {
            return throwError(new ReferenceError('null reference user group id'));
        }
        return this.getJson(`/${id}`, this.type);
    }
    /**
     * Get all items
     * @return {?}
     */
    readAll() {
        return this.getJsonArray('', this.type);
    }
    /**
     * Update an item
     * @param {?} item
     * @return {?}
     */
    update(item) {
        if (!(item && item.id)) {
            return throwError(new ModelError('updated user group mustn\'t be null and must have an id.'));
        }
        return this.put(`/${item.id}`, item);
    }
    /**
     * Delete an item
     * @param {?} idOrItem
     * @return {?}
     */
    delete(idOrItem) {
        idOrItem = typeof idOrItem === 'object' ? idOrItem.id : idOrItem;
        if (!idOrItem) {
            return throwError(new ReferenceError('null reference user group id'));
        }
        return this.deleteFromRoute(`/${idOrItem}`);
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CrudService.prototype.httpClient;
    /**
     * @type {?}
     * @protected
     */
    CrudService.prototype.type;
    /**
     * @type {?}
     * @protected
     */
    CrudService.prototype.logger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29uY2VwdC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwL2NydWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU5QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLG1CQUFtQixFQUE2QixNQUFNLDBCQUEwQixDQUFDOzs7OztBQUkxRixNQUFNLE9BQWdCLFdBQWtFLFNBQVEsdUJBQXVCOzs7Ozs7OztJQUVySCxZQUNZLFVBQXNCLEVBQ3RCLElBQWdCLEVBQ2hCLE1BQXFCLEVBQy9CLFlBQW9CLEVBQUUsRUFDdEIsNEJBQXVELG1CQUFtQixDQUFDLGFBQWE7UUFFeEYsS0FBSyxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixDQUFDLENBQUM7UUFOdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFdBQU0sR0FBTixNQUFNLENBQWU7SUFLakMsQ0FBQzs7Ozs7O0lBS00sTUFBTSxDQUFDLElBQU87UUFDbkIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztTQUMzRTtRQUVELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFLTSxJQUFJLENBQUMsRUFBTztRQUNqQixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ1AsT0FBTyxVQUFVLENBQUMsSUFBSSxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBS00sT0FBTztRQUNaLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7OztJQUtNLE1BQU0sQ0FBQyxJQUFPO1FBQ25CLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDdEIsT0FBTyxVQUFVLENBQUMsSUFBSSxVQUFVLENBQUMsMERBQTBELENBQUMsQ0FBQyxDQUFDO1NBQy9GO1FBRUQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUtNLE1BQU0sQ0FBQyxRQUFpQjtRQUM3QixRQUFRLEdBQUcsT0FBTyxRQUFRLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDakUsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE9BQU8sVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztDQUNGOzs7Ozs7SUE1REcsaUNBQWdDOzs7OztJQUNoQywyQkFBMEI7Ozs7O0lBQzFCLDZCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEh0dHBKc29uVG9PYmplY3RTZXJ2aWNlIH0gZnJvbSAnLi9odHRwLWpzb24tdG8tb2JqZWN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNb2RlbEVycm9yIH0gZnJvbSAnLi4vLi4vZXJyb3JzL21vZGVsLWVycm9yJztcclxuaW1wb3J0IHsgSWRlbnRpdHkgfSBmcm9tICcuLi8uLi9tb2RlbHMvaWRlbnRpdHknO1xyXG5pbXBvcnQgeyBEYXRhTGlzdFF1ZXJ5SGVscGVyLCBEYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnIH0gZnJvbSAnLi9kYXRhLWxpc3QtcXVlcnktaGVscGVyJztcclxuaW1wb3J0IHsgTG9nZ2VyU2VydmljZSB9IGZyb20gJy4uL2xvZy9sb2dnZXIuc2VydmljZSc7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENydWRTZXJ2aWNlPFRJZCBleHRlbmRzIHN0cmluZyB8IG51bWJlciwgVCBleHRlbmRzIElkZW50aXR5PFRJZD4+IGV4dGVuZHMgSHR0cEpzb25Ub09iamVjdFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LFxyXG4gICAgcHJvdGVjdGVkIHR5cGU6IG5ldygpID0+IFQsXHJcbiAgICBwcm90ZWN0ZWQgbG9nZ2VyOiBMb2dnZXJTZXJ2aWNlLFxyXG4gICAgc3RhcnRzVXJsOiBzdHJpbmcgPSAnJyxcclxuICAgIGRhdGFMaXN0UXVlcnlIZWxwZXJDb25maWc6IERhdGFMaXN0UXVlcnlIZWxwZXJDb25maWcgPSBEYXRhTGlzdFF1ZXJ5SGVscGVyLmRlZmF1bHRDb25maWdcclxuICApIHtcclxuICAgIHN1cGVyKGh0dHBDbGllbnQsIGxvZ2dlciwgc3RhcnRzVXJsLCBkYXRhTGlzdFF1ZXJ5SGVscGVyQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBpdGVtXHJcbiAgICovXHJcbiAgcHVibGljIGNyZWF0ZShpdGVtOiBUKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICBpZiAoIWl0ZW0pIHtcclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IE1vZGVsRXJyb3IoJ2NyZWF0ZWQgdXNlciBncm91cCBtdXN0blxcJ3QgYmUgbnVsbC4nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucG9zdEFuZFJldHVybk9iamVjdCgnJywgaXRlbSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgb25lIGl0ZW1cclxuICAgKi9cclxuICBwdWJsaWMgcmVhZChpZDogVElkKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICBpZiAoIWlkKSB7XHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBSZWZlcmVuY2VFcnJvcignbnVsbCByZWZlcmVuY2UgdXNlciBncm91cCBpZCcpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uPFQ+KGAvJHtpZH1gLCB0aGlzLnR5cGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFsbCBpdGVtc1xyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkQWxsKCk6IE9ic2VydmFibGU8VFtdPiB7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRKc29uQXJyYXk8VD4oJycsIHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgYW4gaXRlbVxyXG4gICAqL1xyXG4gIHB1YmxpYyB1cGRhdGUoaXRlbTogVCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgaWYgKCEoaXRlbSAmJiBpdGVtLmlkKSkge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgTW9kZWxFcnJvcigndXBkYXRlZCB1c2VyIGdyb3VwIG11c3RuXFwndCBiZSBudWxsIGFuZCBtdXN0IGhhdmUgYW4gaWQuJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnB1dDxUPihgLyR7aXRlbS5pZH1gLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBhbiBpdGVtXHJcbiAgICovXHJcbiAgcHVibGljIGRlbGV0ZShpZE9ySXRlbTogVElkIHwgVCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgaWRPckl0ZW0gPSB0eXBlb2YgaWRPckl0ZW0gPT09ICdvYmplY3QnID8gaWRPckl0ZW0uaWQgOiBpZE9ySXRlbTtcclxuICAgIGlmICghaWRPckl0ZW0pIHtcclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IFJlZmVyZW5jZUVycm9yKCdudWxsIHJlZmVyZW5jZSB1c2VyIGdyb3VwIGlkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmRlbGV0ZUZyb21Sb3V0ZShgLyR7aWRPckl0ZW19YCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==