export class Factories {
	private static factories = new Map<string, new () => object>();

	public static register(id: string, type: new () => object) {
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
}
