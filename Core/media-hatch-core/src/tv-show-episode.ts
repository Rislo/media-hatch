import { Media } from './media';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject()
export class TvShowEpisode extends Media {
	public static typeName = 'MediaHatchCore.TvShowEpisode';

	@JsonProperty('seasonNb')
	public seasonNb: number = undefined;

	@JsonProperty('episodeNb', [Number])
	public episodeNb: number[] = undefined;

	public get fullName() {
		let episodeNumbers = '';
		for (let i = 0; i < this.episodeNb.length; i++) {
			episodeNumbers += `E${this.stringifyNumber(this.episodeNb[i])}`;
		}
		return `${this.name} S${this.stringifyNumber(this.seasonNb)}${episodeNumbers}`;
	}

	constructor() {
		super(TvShowEpisode.typeName);
		this.episodeNb = new Array<number>();
	}

	private stringifyNumber(number: Number): string {
		return number < 10 ? `0${number}` : number.toString();
	}
}
