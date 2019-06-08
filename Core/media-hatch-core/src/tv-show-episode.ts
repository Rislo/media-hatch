import { Media } from './media';

export class TvShowEpisode extends Media {
  public static typeName = 'MediaHatchCore.TvShowEpisode';

  public seasonNb: number;
  public episodeNb: number[];

  public get fullName() {
    let episodeNumbers = '';
    for (let i = 0; i < this.episodeNb.length; i++) {
      episodeNumbers += `E${this.stringifyNumber(this.episodeNb[i])}`;
    }
    return `${this.name} S${this.stringifyNumber(this.seasonNb)}${episodeNumbers}`;
  }

  constructor() {
    super();
    this.episodeNb = new Array<number>();
    this.type = TvShowEpisode.typeName;
  }

  private stringifyNumber(number: Number): string {
    return number < 10 ? `0${number}` : number.toString();
  }
}
