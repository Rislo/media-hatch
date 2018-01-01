import { BaseElement } from './base-element';

export class LinksPackage extends BaseElement {
  constructor(public fileHost: string, public links: string[]) {
    super();
    this.type = 'MediaScraperCore.LinksPackage';
  }

  public get concatenatedLinks(): string {
    return this.links.join(' ');
  }
}
