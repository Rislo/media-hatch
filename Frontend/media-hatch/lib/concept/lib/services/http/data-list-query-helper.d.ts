import { HttpParams } from '@angular/common/http';
import { TablePaginationParams, TableParams } from './http-json-to-object.service';
export interface DataListQueryHelperConfig {
    pageSizeKey: string;
    pageNbKey: string;
    sortKey: string;
    orderKey: string;
}
export declare class DataListQueryFilter {
    field: string;
    value: string;
    constructor(field: string, value: string);
}
export declare class DataListQueryHelper {
    private config;
    static defaultConfig: {
        pageSizeKey: string;
        pageNbKey: string;
        sortKey: string;
        orderKey: string;
    };
    constructor(config?: DataListQueryHelperConfig);
    getTableRequestParameters(tableParams?: TableParams): HttpParams;
    getTablePaginationRequestParameters(tableParams: TablePaginationParams): HttpParams;
}
