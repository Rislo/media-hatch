import { LinksPackage } from './links-package';
import { BaseElement } from './base-element';

export abstract class Media extends BaseElement {
  public rawName: string;
  public name: string;
  public get fullName(): string {
    return this.name;
  }
  public description: string;
  public illustration;
  public illustrationUrl: string;
  public linksPackages: LinksPackage[];
  public tags = new Array<string>();
  public size: string;
  public get linksPackageAvailable(): boolean {
    return this.linksPackages && this.linksPackages.length > 0;
  }
  public getFirstFavoriteLinksPackage(orderedFavoriteFileHosts: string[]): LinksPackage {
    if (this.linksPackageAvailable) {
      for (let fileHost of orderedFavoriteFileHosts) {
        for (let linksPackage of this.linksPackages) {
          if (linksPackage.fileHost === fileHost) {
            return linksPackage;
          }
        }
      }
      return this.linksPackages[0];
    } else {
      return undefined;
    }
  }
}
