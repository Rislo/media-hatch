/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { throwError } from 'rxjs';
import { HttpJsonToObjectService } from './http-json-to-object.service';
import { ModelError } from '../../errors/model-error';
import { DataListQueryHelper } from './data-list-query-helper';
/**
 * @abstract
 * @template TId, T
 */
var /**
 * @abstract
 * @template TId, T
 */
CrudService = /** @class */ (function (_super) {
    tslib_1.__extends(CrudService, _super);
    function CrudService(httpClient, type, logger, startsUrl, dataListQueryHelperConfig) {
        if (startsUrl === void 0) { startsUrl = ''; }
        if (dataListQueryHelperConfig === void 0) { dataListQueryHelperConfig = DataListQueryHelper.defaultConfig; }
        var _this = _super.call(this, httpClient, logger, startsUrl, dataListQueryHelperConfig) || this;
        _this.httpClient = httpClient;
        _this.type = type;
        _this.logger = logger;
        return _this;
    }
    /**
     * Create a new item
     */
    /**
     * Create a new item
     * @param {?} item
     * @return {?}
     */
    CrudService.prototype.create = /**
     * Create a new item
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!item) {
            return throwError(new ModelError('created user group mustn\'t be null.'));
        }
        return this.postAndReturnObject('', item);
    };
    /**
     * Get one item
     */
    /**
     * Get one item
     * @param {?} id
     * @return {?}
     */
    CrudService.prototype.read = /**
     * Get one item
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (!id) {
            return throwError(new ReferenceError('null reference user group id'));
        }
        return this.getJson("/" + id, this.type);
    };
    /**
     * Get all items
     */
    /**
     * Get all items
     * @return {?}
     */
    CrudService.prototype.readAll = /**
     * Get all items
     * @return {?}
     */
    function () {
        return this.getJsonArray('', this.type);
    };
    /**
     * Update an item
     */
    /**
     * Update an item
     * @param {?} item
     * @return {?}
     */
    CrudService.prototype.update = /**
     * Update an item
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!(item && item.id)) {
            return throwError(new ModelError('updated user group mustn\'t be null and must have an id.'));
        }
        return this.put("/" + item.id, item);
    };
    /**
     * Delete an item
     */
    /**
     * Delete an item
     * @param {?} idOrItem
     * @return {?}
     */
    CrudService.prototype.delete = /**
     * Delete an item
     * @param {?} idOrItem
     * @return {?}
     */
    function (idOrItem) {
        idOrItem = typeof idOrItem === 'object' ? idOrItem.id : idOrItem;
        if (!idOrItem) {
            return throwError(new ReferenceError('null reference user group id'));
        }
        return this.deleteFromRoute("/" + idOrItem);
    };
    return CrudService;
}(HttpJsonToObjectService));
/**
 * @abstract
 * @template TId, T
 */
export { CrudService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY29uY2VwdC8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9odHRwL2NydWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXRELE9BQU8sRUFBRSxtQkFBbUIsRUFBNkIsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFJMUY7Ozs7O0lBQWdHLHVDQUF1QjtJQUVySCxxQkFDWSxVQUFzQixFQUN0QixJQUFnQixFQUNoQixNQUFxQixFQUMvQixTQUFzQixFQUN0Qix5QkFBd0Y7UUFEeEYsMEJBQUEsRUFBQSxjQUFzQjtRQUN0QiwwQ0FBQSxFQUFBLDRCQUF1RCxtQkFBbUIsQ0FBQyxhQUFhO1FBTDFGLFlBT0Usa0JBQU0sVUFBVSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUseUJBQXlCLENBQUMsU0FDaEU7UUFQVyxnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixVQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLFlBQU0sR0FBTixNQUFNLENBQWU7O0lBS2pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0ksNEJBQU07Ozs7O0lBQWIsVUFBYyxJQUFPO1FBQ25CLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7U0FDM0U7UUFFRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSwwQkFBSTs7Ozs7SUFBWCxVQUFZLEVBQU87UUFDakIsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNQLE9BQU8sVUFBVSxDQUFDLElBQUksY0FBYyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztTQUN2RTtRQUVELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBSSxNQUFJLEVBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNJLDZCQUFPOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNJLDRCQUFNOzs7OztJQUFiLFVBQWMsSUFBTztRQUNuQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sVUFBVSxDQUFDLElBQUksVUFBVSxDQUFDLDBEQUEwRCxDQUFDLENBQUMsQ0FBQztTQUMvRjtRQUVELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBSSxNQUFJLElBQUksQ0FBQyxFQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSSw0QkFBTTs7Ozs7SUFBYixVQUFjLFFBQWlCO1FBQzdCLFFBQVEsR0FBRyxPQUFPLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsT0FBTyxVQUFVLENBQUMsSUFBSSxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQUksUUFBVSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQS9ERCxDQUFnRyx1QkFBdUIsR0ErRHRIOzs7Ozs7Ozs7OztJQTVERyxpQ0FBZ0M7Ozs7O0lBQ2hDLDJCQUEwQjs7Ozs7SUFDMUIsNkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgSHR0cEpzb25Ub09iamVjdFNlcnZpY2UgfSBmcm9tICcuL2h0dHAtanNvbi10by1vYmplY3Quc2VydmljZSc7XHJcbmltcG9ydCB7IE1vZGVsRXJyb3IgfSBmcm9tICcuLi8uLi9lcnJvcnMvbW9kZWwtZXJyb3InO1xyXG5pbXBvcnQgeyBJZGVudGl0eSB9IGZyb20gJy4uLy4uL21vZGVscy9pZGVudGl0eSc7XHJcbmltcG9ydCB7IERhdGFMaXN0UXVlcnlIZWxwZXIsIERhdGFMaXN0UXVlcnlIZWxwZXJDb25maWcgfSBmcm9tICcuL2RhdGEtbGlzdC1xdWVyeS1oZWxwZXInO1xyXG5pbXBvcnQgeyBMb2dnZXJTZXJ2aWNlIH0gZnJvbSAnLi4vbG9nL2xvZ2dlci5zZXJ2aWNlJztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ3J1ZFNlcnZpY2U8VElkIGV4dGVuZHMgc3RyaW5nIHwgbnVtYmVyLCBUIGV4dGVuZHMgSWRlbnRpdHk8VElkPj4gZXh0ZW5kcyBIdHRwSnNvblRvT2JqZWN0U2VydmljZSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGh0dHBDbGllbnQ6IEh0dHBDbGllbnQsXHJcbiAgICBwcm90ZWN0ZWQgdHlwZTogbmV3KCkgPT4gVCxcclxuICAgIHByb3RlY3RlZCBsb2dnZXI6IExvZ2dlclNlcnZpY2UsXHJcbiAgICBzdGFydHNVcmw6IHN0cmluZyA9ICcnLFxyXG4gICAgZGF0YUxpc3RRdWVyeUhlbHBlckNvbmZpZzogRGF0YUxpc3RRdWVyeUhlbHBlckNvbmZpZyA9IERhdGFMaXN0UXVlcnlIZWxwZXIuZGVmYXVsdENvbmZpZ1xyXG4gICkge1xyXG4gICAgc3VwZXIoaHR0cENsaWVudCwgbG9nZ2VyLCBzdGFydHNVcmwsIGRhdGFMaXN0UXVlcnlIZWxwZXJDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IGl0ZW1cclxuICAgKi9cclxuICBwdWJsaWMgY3JlYXRlKGl0ZW06IFQpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIGlmICghaXRlbSkge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgTW9kZWxFcnJvcignY3JlYXRlZCB1c2VyIGdyb3VwIG11c3RuXFwndCBiZSBudWxsLicpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5wb3N0QW5kUmV0dXJuT2JqZWN0KCcnLCBpdGVtKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBvbmUgaXRlbVxyXG4gICAqL1xyXG4gIHB1YmxpYyByZWFkKGlkOiBUSWQpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgIGlmICghaWQpIHtcclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IobmV3IFJlZmVyZW5jZUVycm9yKCdudWxsIHJlZmVyZW5jZSB1c2VyIGdyb3VwIGlkJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmdldEpzb248VD4oYC8ke2lkfWAsIHRoaXMudHlwZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYWxsIGl0ZW1zXHJcbiAgICovXHJcbiAgcHVibGljIHJlYWRBbGwoKTogT2JzZXJ2YWJsZTxUW10+IHtcclxuICAgIHJldHVybiB0aGlzLmdldEpzb25BcnJheTxUPignJywgdGhpcy50eXBlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBhbiBpdGVtXHJcbiAgICovXHJcbiAgcHVibGljIHVwZGF0ZShpdGVtOiBUKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBpZiAoIShpdGVtICYmIGl0ZW0uaWQpKSB7XHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKG5ldyBNb2RlbEVycm9yKCd1cGRhdGVkIHVzZXIgZ3JvdXAgbXVzdG5cXCd0IGJlIG51bGwgYW5kIG11c3QgaGF2ZSBhbiBpZC4nKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucHV0PFQ+KGAvJHtpdGVtLmlkfWAsIGl0ZW0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIGFuIGl0ZW1cclxuICAgKi9cclxuICBwdWJsaWMgZGVsZXRlKGlkT3JJdGVtOiBUSWQgfCBUKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICBpZE9ySXRlbSA9IHR5cGVvZiBpZE9ySXRlbSA9PT0gJ29iamVjdCcgPyBpZE9ySXRlbS5pZCA6IGlkT3JJdGVtO1xyXG4gICAgaWYgKCFpZE9ySXRlbSkge1xyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgUmVmZXJlbmNlRXJyb3IoJ251bGwgcmVmZXJlbmNlIHVzZXIgZ3JvdXAgaWQnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZGVsZXRlRnJvbVJvdXRlKGAvJHtpZE9ySXRlbX1gKTtcclxuICB9XHJcbn1cclxuIl19