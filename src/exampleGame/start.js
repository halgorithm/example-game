import { Game } from 'phaser';
import config from './config';
import { PlayScene } from 'exampleGame/scenes';

// const config = {
//   ...baseConfig,
//   scene: PlayScene
// }

function start() {
  // TODO: get width and height from query param
  const configWithScene = { ...config, scene: PlayScene };
  const exampleGame = new Game(configWithScene);
  window.exampleGame = exampleGame;
  window.process = process;
}

export default start;
