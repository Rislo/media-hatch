import { StringFileCache } from './string-file-cache';

export class FileSyncedStringSet {
  private stringFileCache: StringFileCache;
  private itemsToAdd = new Set<string>();
  private itemsToRemove = new Set<string>();

  constructor(filePath: string, private separator = ';') {
    this.stringFileCache = new StringFileCache(filePath, this.mergeContent);
  }

  public async getCurrentItems(): Promise<Set<string>> {
    return this.contentToStringSet(await this.stringFileCache.currentContent);
  }

  public addItem(item: string) {
    this.itemsToAdd.add(item);
  }

  public removeItem(item: string) {
    this.itemsToRemove.add(item);
  }

  private mergeContent = (lastContent: string) => {
    if (this.itemsToAdd.size > 0 || this.itemsToRemove.size > 0) {
      const mergedSet = this.contentToStringSet(lastContent);
      for (const itemToAdd of this.itemsToAdd) {
        mergedSet.add(itemToAdd);
      }
      this.itemsToAdd.clear();
      for (const itemToRemove of this.itemsToRemove) {
        mergedSet.delete(itemToRemove);
      }
      this.itemsToRemove.clear();
      return this.stringSetToContent(mergedSet);
    } else {
      return lastContent;
    }
  };

  private contentToStringSet(content: string): Set<string> {
    return new Set(content.split(this.separator).filter(s => s.length > 0));
  }

  private stringSetToContent(set: Set<string>): string {
    return Array.from(set.values()).join(this.separator);
  }
}
