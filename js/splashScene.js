/* global Phaser */

// Cristiano
// ICS2O-Space-Aliens
// April 13-19 2022
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
  }
}

export default SplashScene