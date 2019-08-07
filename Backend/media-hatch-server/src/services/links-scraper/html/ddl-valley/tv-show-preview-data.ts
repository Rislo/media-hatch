export class TvShowPreviewData {
  constructor(public name: string, public season: number, public episodes = new Array<number>()) {}
}
