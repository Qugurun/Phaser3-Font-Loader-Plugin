[![Page Views Count](https://badges.toozhao.com/badges/01HSA24ADS6993H83P1GSVKHNG/green.svg)](https://badges.toozhao.com/stats/01HSA24ADS6993H83P1GSVKHNG "Get your own page views count badge on badges.toozhao.com")

# Phaser3-Font-Loader-Plugin

This plugin enhances Phaser 3 functionality by providing support for loading font files. It allows seamless integration of custom fonts in games or applications developed using Phaser 3. The plugin empowers developers to easily track the loading process of font files, ensuring efficient handling of font assets similar to how Phaser manages other supported file types. 

```js
import 'phaser';
import { FontLoaderPlugin } from './plugin/font_loader_plugin.js';

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
            key: 'FontLoaderPlugin',
            plugin: FontLoaderPlugin,
            start: true
        }]
    }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.font('baloo', 'assets/font/baloo.ttf');
}

function create() {
    this.add.text(100, 100, 'Hello Phaser 3 with custom font!', { fontFamily: 'baloo', fontSize: '32px', color: '#ffffff' });
}

