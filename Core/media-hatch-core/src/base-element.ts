import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject()
export abstract class BaseElement {
	constructor(type: string) {
		this.type = type;
	}

	@JsonProperty('type')
	public type: string = undefined;
}
