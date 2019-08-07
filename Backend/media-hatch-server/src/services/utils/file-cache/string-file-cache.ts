import * as fs from 'fs-extra';

export class StringFileCache {
  private defaultSyncInterval = 1000;

  constructor(public filePath: string, public mergeContent: (lastContent: string) => string) {
    this.currentContent = this.getCurrentContent();
    setTimeout(this.cyclicSync, this.defaultSyncInterval);
  }

  public currentContent: Promise<string>;

  private cyclicSync = async () => {
    const lastContent = await this.getCurrentContent();
    const newContent = this.mergeContent(lastContent);
    if (newContent !== lastContent) {
      await fs.writeFile(this.filePath, this.mergeContent(newContent));
      this.currentContent = Promise.resolve(newContent);
    } else {
      this.currentContent = Promise.resolve(lastContent);
    }
    setTimeout(this.cyclicSync, this.defaultSyncInterval);
  };

  private async getCurrentContent() {
    await fs.ensureFile(this.filePath);
    return (await fs.readFile(this.filePath, 'utf8')).replace(/^\ufeff/, ''); // removes BOM if present
  }
}
