import { Movie } from '../movie';
import { TvShowEpisode } from '../tv-show-episode';
import { BaseElement } from '../base-element';

export class Factories {
  private static factories = new Map<string, new () => BaseElement>();

  public static initialize() {
    Factories.register(Movie.typeName, Movie);
    Factories.register(TvShowEpisode.typeName, TvShowEpisode);
  }

  public static register(id: string, type: new () => BaseElement) {
    this.factories.set(id, type);
  }

  public static getId<T>(type: new () => T): string {
    let id: string = null;
    let idFound = false;
    this.factories.forEach((value, key) => {
      if (!idFound && value.name === type.name) {
        id = key;
        idFound = true;
      }
    });
    return id;
  }

  public static getFactory<T extends object>(id: string): new () => T {
    if (this.factories.has(id)) {
      return this.factories.get(id) as (new () => T);
    }
    return null;
  }

  public static getIdsInheriting(baseClassName: string): string[] {
    const ids = new Array<string>();
    for (const entry of this.factories.entries()) {
      if (new entry[1]().className.indexOf(baseClassName) >= 0) {
        ids.push(entry[0]);
      }
    }
    return ids;
  }
}
