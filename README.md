# Phaser3-TTF-Loader-Plugin

This plugin enhances Phase 3 functionality by providing support for loading TrueType Font files (*.ttf). It allows seamless integration of custom fonts in games or applications developed using Phaser 3. The plugin empowers developers to easily track the loading process of *.ttf files, ensuring efficient handling of font assets similar to how Phaser manages other supported file types. 

```js
import 'phaser';
import { TTFLoaderPlugin } from './plugin/ttf_loader_plugin.js';

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    },
    plugins: {
        global: [{
            key: 'TTFLoaderPlugin',
            plugin: TTFLoaderPlugin,
            start: true
        }]
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.ttf('baloo', 'assets/font/baloo.ttf');
}

function create() {
    this.add.text(100, 100, 'Hello Phaser 3 with custom font!', { fontFamily: 'baloo', fontSize: '32px', color: '#ffffff' });
}```