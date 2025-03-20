class GameOver extends Phaser.Scene {
    constructor() {
        super('gameoverScene')
    }

    create() {
        // add background image
        this.add.image(0, 0, 'goscreen').setOrigin(0, 0).setDisplaySize(game.config.width, game.config.height)

        // add text
        this.add.bitmapText(centerX, centerY-200, 'comixloud', 'GAME OVER', 46).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY, 'comixloud', 'OVERWHELMED BY POLLUTION...', 16).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY + 50, 'comixloud', 'JUST LIKE THE OCEAN, YOU SUFFERED FROM WASTE TAKING OVER', 16).setOrigin(0.5)
        
        this.add.bitmapText(centerX, centerY+180, 'comixloud', 'PRESS ENTER TO TRY AGAIN', 18).setOrigin(0.5)
        this.add.bitmapText(centerX, centerY+230, 'comixloud', 'PRESS SPACE TO GO TO MENU', 18).setOrigin(0.5)

        //adds key
        keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)


    }

    update() {
        if(Phaser.Input.Keyboard.JustDown(keyEnter)){
            this.scene.start('playScene')
        }

        if(Phaser.Input.Keyboard.JustDown(keySPACE)){
            this.scene.start('menuScene')
        }

    }
}