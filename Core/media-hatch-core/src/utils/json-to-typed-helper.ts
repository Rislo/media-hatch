import { JsonConvert, ValueCheckingMode } from 'json2typescript';

export class JsonToTypedHelper {
	public static readonly jsonConvert = new JsonConvert(undefined, ValueCheckingMode.ALLOW_NULL);

	public static serialize<T>(value: T): any {
		return JsonToTypedHelper.jsonConvert.serializeObject<T>(value);
	}

	public static serializeArray<T>(values: T[]): any {
		return JsonToTypedHelper.jsonConvert.serializeArray<T>(values);
	}

	public static deserialize<T>(json: object, type: new () => T): T {
		return JsonToTypedHelper.jsonConvert.deserializeObject(json, type);
	}

	public static deserializeArray<T>(json: object[], type: new () => T): T[] {
		return JsonToTypedHelper.jsonConvert.deserializeArray(json, type);
	}
}
