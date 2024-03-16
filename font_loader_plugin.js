/**
 * Plugin for adding support to load font files in Phaser 3.80.x.
 * Version: 1.0.0
 * Author: Qugurun
 * License: MIT
 */

export class FontLoaderPlugin extends Phaser.Plugins.BasePlugin {
    constructor(pluginManager) {
        super(pluginManager);

        pluginManager.registerFileType("font", function (key, url) {
            const fontName = key;
            this.addFile(new FontFile(this, key, fontName, url));
        });
    }
}

class FontFile extends Phaser.Loader.File {
    constructor(loader, key, fontName, url) {
        super(loader, {
            type: "font",
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