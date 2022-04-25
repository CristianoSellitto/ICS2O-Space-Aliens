/* global Phaser */

// Cristiano
// ICS2O-Space-Aliens
// April 13-25 2022
// Splash Scene

class SplashScene extends Phaser.Scene {
  constructor () {
    super({ key: 'splashScene' })
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    console.log('Splash Scene')
  }
  
  create (data) {
  }
  
  update (time, delta) {
    this.scene.switch('titleScene')
  }
}

export default SplashScene