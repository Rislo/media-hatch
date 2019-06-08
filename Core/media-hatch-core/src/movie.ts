import { Media } from './media';

export class Movie extends Media {
  public static typeName = 'MediaHatchCore.Movie';

  constructor() {
    super();
    this.type = Movie.typeName;
  }

  public releaseYear = 0;

  public get fullName(): string {
    if (this.releaseYear > 0) {
      return `${this.name} (${this.releaseYear})`;
    } else {
      return this.name;
    }
  }
}
