import { JsonCustomConvert } from 'json2typescript';
export declare class JsonDateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): string;
    deserialize(date: any): Date;
}
