import { Media } from './media';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject()
export class Movie extends Media {
	public static typeName = 'MediaHatchCore.Movie';

	constructor() {
		super(Movie.typeName);
	}

	@JsonProperty('releaseYear')
	public releaseYear = 0;

	public get fullName(): string {
		if (this.releaseYear > 0) {
			return `${this.name} (${this.releaseYear})`;
		} else {
			return this.name;
		}
	}
}
