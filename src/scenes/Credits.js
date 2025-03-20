class Credit extends Phaser.Scene {
    constructor() {
        super('creditScene');
    }

    create() {
        // add background image
        this.add.image(0, 0, 'winscreen').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height)

        this.add.bitmapText(centerX, centerY - 200, 'comixloud', 'GAME CREDITS', 46).setOrigin(0.5)
        
        this.add.bitmapText(centerX, centerY - 100, 'comixloud', 'FONT: COMIX LOUD BY IMAGEX', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY - 60, 'comixloud', 'SFX: UNDERWATER SUB FANTASY SOUND BY LIMITSNAP_CREATIONS', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY - 20, 'comixloud', '     BUBBLE MESSAGE DING BY ROBINHOOD76', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 20, 'comixloud', 'ANIMATIONS: ANDREA MARTINEZ', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 60, 'comixloud', 'ARTWORK:  ANDREA MORALES VILLEGAS', 14).setOrigin(0.5)
        //this.add.bitmapText(centerX, centerY + 280, 'comixloud', '         ', 14).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 200, 'comixloud', 'PRESS ENTER TO GO TO MENU', 20).setOrigin(0.5)
        //adds key
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
   
    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyEnter)){
            this.scene.start('menuScene')
        }

    }
}
