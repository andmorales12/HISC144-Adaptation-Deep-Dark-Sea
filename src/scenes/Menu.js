class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    // everything was preloaded in Load.js
    preload() {

    }

    create() {
        // add background image
        this.add.image(0, 0, 'menuscreen').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height)

        // add title text
        //this.add.bitmapText()
        this.add.bitmapText(centerX, titleY, 'comixloud', 'DEEP DARK SEA', 64).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 150, 'comixloud', 'USE ARROW KEYS TO MOVE', 16).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 190, 'comixloud', 'PRESS F TO FIRE', 16).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 235, 'comixloud', 'PRESS ENTER TO PLAY', 16).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 270, 'comixloud', '[SPACE] FOR GAME CREDITS', 16).setOrigin(0.5)
        
        //adds key
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        // adding background music
        this.music = this.sound.add('underwater', {
            mute: false,
            volume: 0.5,
            rate: 1,
            loop: true
        });
        this.music.play();

    }

    update() {
        // check for input
        
        if(Phaser.Input.Keyboard.JustDown(keyEnter)){
            this.scene.start('playScene')
        }

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('creditScene')
        }

    }
}