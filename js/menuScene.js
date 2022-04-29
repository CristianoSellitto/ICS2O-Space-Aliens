/* global Phaser */

// Cristiano
// ICS2O-Space-Aliens
// April 13-25 2022
// Menu Scene

class MenuScene extends Phaser.Scene {
  constructor () {
    super({ key: 'menuScene' })
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    console.log('Menu Scene')
  }
  
  create (data) {
  }
  
  update (time, delta) {
  }
}

export default MenuScene