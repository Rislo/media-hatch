import { JsonConvert } from 'json2typescript';
export declare class JsonToTypedHelper {
    static readonly jsonConvert: JsonConvert;
    static serialize<T>(value: T): any;
    static serializeArray<T>(values: T[]): any;
    static deserialize<T>(json: object, type: new () => T): T;
    static deserializeArray<T>(json: object[], type: new () => T): T[];
}
