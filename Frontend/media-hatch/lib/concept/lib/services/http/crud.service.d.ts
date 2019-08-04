import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpJsonToObjectService } from './http-json-to-object.service';
import { Identity } from '../../models/identity';
import { DataListQueryHelperConfig } from './data-list-query-helper';
import { LoggerService } from '../log/logger.service';
export declare abstract class CrudService<TId extends string | number, T extends Identity<TId>> extends HttpJsonToObjectService {
    protected httpClient: HttpClient;
    protected type: new () => T;
    protected logger: LoggerService;
    constructor(httpClient: HttpClient, type: new () => T, logger: LoggerService, startsUrl?: string, dataListQueryHelperConfig?: DataListQueryHelperConfig);
    /**
     * Create a new item
     */
    create(item: T): Observable<T>;
    /**
     * Get one item
     */
    read(id: TId): Observable<T>;
    /**
     * Get all items
     */
    readAll(): Observable<T[]>;
    /**
     * Update an item
     */
    update(item: T): Observable<void>;
    /**
     * Delete an item
     */
    delete(idOrItem: TId | T): Observable<void>;
}
