/**
 * Plugin for adding support to load *.ttf files in Phaser 3.80.x.
 * Version: 1.0.0
 * Author: Qugurun
 * License: MIT
 */

export class TTFLoaderPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        pluginManager.registerFileType("ttf", function (key, url) {
            const fontName = key;
            this.addFile(new TTFFile(this, key, fontName, url));
        });
    }
}

class TTFFile extends Phaser.Loader.File {
    constructor(loader, key, fontName, url) {
        super(loader, {
            type: "ttf",
            key: key,
            url: url
        });

        this.fontName = fontName;
    }

    load() {
        const newFontFace = new FontFace(this.fontName, `url(${this.url})`);
        document.fonts.add(newFontFace);

        newFontFace.load().then(() => {
            this.loader.emit('fileprogress', this, 1);
            this.loader.nextFile(this, true);
        }).catch((error) => {
            console.error(`Failed to load ${this.fontName}`, error);
            this.loader.nextFile(this, false);
        });
    }
}