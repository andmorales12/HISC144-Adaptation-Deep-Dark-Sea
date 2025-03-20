class Win extends Phaser.Scene {
    constructor() {
        super('winScene');
    }

    create() {
        // add background image
        this.add.image(0, 0, 'winscreen').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height)

        this.add.bitmapText(centerX, centerY - 200, 'comixloud', 'YOU WIN!', 46).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY+200, 'comixloud', 'PRESS ENTER TO GO TO MENU', 20).setOrigin(0.5)
        //this.add.bitmapText(centerX, centerY + 100, 'comixloud', 'CREDITS:', 20).setOrigin(0.5)
        //this.add.bitmapText(centerX, centerY - 130, 'comixloud', 'Thank you for joining me on a dirty sea adventure experience!', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY, 'comixloud', 'THE OCEAN IS CLEAN ONCE MORE, THANKS TO YOUR EFFORTS!', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 50, 'comixloud', 'THIS SEA NOW SHINES, BUT OUR REAL WATERS STILL NEED HELP.', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 100, 'comixloud', 'WATER IS ONE OF OUR MOST ESSENTIAL ELEMENTS AFTER ALL!', 14).setOrigin(0.5)
        //this.add.bitmapText(centerX, centerY + 250, 'comixloud', 'ARTWORK:  PLAYER, EXPLOSION, & WEAPON BY ANDREA MARTINEZ', 14).setOrigin(0.5)
        //this.add.bitmapText(centerX, centerY + 280, 'comixloud', '          TILEMAP, ENEMIES, SCENE BGS BY ANDREA MORALES VILLEGAS', 14).setOrigin(0.5)

        //adds key
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
   
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyEnter)){
            this.scene.start('menuScene')
        }

    }
}
