import { HSVColorWheel } from 'phaser/src/display/color';
import { loadAllAssets, createAllAnimations } from 'exampleGame';

class PlayScene {
  constructor() {
    this.hsv;
    this.i = 0;
    console.log('PlayScene');
  }

  preload() {
    console.log('preload');
    loadAllAssets();
  }

  create() {
    console.log('create');
    createAllAnimations();

    this.hsv = HSVColorWheel();
    const tintedText = this.add.dynamicBitmapText(
      128,
      128,
      'ice',
      "I'm an example\nwhoooaaaa",
      64
    );
    tintedText.setDisplayCallback(this.textCallback);
  }

  textCallback = data => {
    data.tint.topLeft = this.hsv[Math.floor(this.i)].color;
    data.tint.topRight = this.hsv[359 - Math.floor(this.i)].color;
    data.tint.bottomLeft = this.hsv[359 - Math.floor(this.i)].color;
    data.tint.bottomRight = this.hsv[Math.floor(this.i)].color;

    this.i += 0.05;

    if (this.i >= this.hsv.length) {
      this.i = 0;
    }

    return data;
  };
}

export default PlayScene;
