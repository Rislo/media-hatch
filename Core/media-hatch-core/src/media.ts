import { LinksPackage } from './links-package';
import { BaseElement } from './base-element';
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject()
export abstract class Media extends BaseElement {
	constructor(type: string) {
		super(type);
	}

	@JsonProperty('rawName')
	public rawName: string = undefined;

	@JsonProperty('name')
	public name: string = undefined;

	public get fullName(): string {
		return this.name;
	}

	@JsonProperty('description')
	public description: string = undefined;
	public illustration;

	@JsonProperty('illustrationUrl')
	public illustrationUrl: string = undefined;

	public linksPackages: LinksPackage[];

	@JsonProperty('tags', [String])
	public tags = new Array<string>();

	@JsonProperty('size')
	public size: string = undefined;

	public get linksPackageAvailable(): boolean {
		return this.linksPackages && this.linksPackages.length > 0;
	}
	public getFirstFavoriteLinksPackage(orderedFavoriteFileHosts: string[]): LinksPackage {
		if (this.linksPackageAvailable) {
			for (let fileHost of orderedFavoriteFileHosts) {
				for (let linksPackage of this.linksPackages) {
					if (linksPackage.fileHost.startsWith(fileHost)) {
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
