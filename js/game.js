/* global Phaser */

// Cristiano
// ICS2O-Space-Aliens
// April 13-25 2022

import SplashScene from './splashScene.js'
import TitleScene from './titleScene.js'

// Game scenes
const splashScene = new SplashScene()
const titleScene = new TitleScene()

// Game scene
const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  // Set BG colour
  backgroundColor: 0x5f6e7a,
  // Set screen in the middle of page
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)

game.scene.add('splashScene', splashScene)
game.scene.add('titleScene', titleScene)

game.scene.start('splashScene')
