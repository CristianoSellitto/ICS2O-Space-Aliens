/* global Phaser */

// Cristiano
// ICS2O-Space-Aliens
// April 13-25 2022
// Title Scene

class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'titleScene' })
  }
  
  init (data) {
    this.cameras.main.setBackgroundColor('#ffffff')
  }
  
  preload () {
    console.log('Title Scene')
  }
  
  create (data) {
  }
  
  update (time, delta) {
  }
}

export default TitleScene