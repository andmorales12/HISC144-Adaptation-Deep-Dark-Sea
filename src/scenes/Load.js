class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        //create loading bar
        let loadingBar = this.add.graphics();
        this.load.on('progress', (value) => {
            loadingBar.clear();                                 // reset fill/line style
            loadingBar.fillStyle(0xFFFFFF, 1);                  // (color, alpha)
            loadingBar.fillRect(0, centerY, game.config.width * value, 5);  // (x, y, w, h)
        });
        this.load.on('complete', () => {
            loadingBar.destroy();
        });

        // change path to begin loading different assets
        this.load.path = './assets/'

        // load images/tile sprites
        this.load.image('menuscreen', 'images/menuscreen.png')
        this.load.image('saving', 'images/saving.png')
        this.load.image('goscreen', 'images/goscreen.png') // game over screen
        this.load.image('winscreen', 'images/winscreen.png')
        
        // load tilemap
        this.load.image('tilesetImage', 'dsea.png')
        this.load.tilemapTiledJSON('mapJSON', 'dirtyocean.json')
        
        // sprites
        this.load.image('bag', 'images/bag.png')
        this.load.image('bluebag', 'images/bluebag.png')
        this.load.image('box', 'images/box.png')
        this.load.image('soda', 'images/sodacan.png')
        this.load.image('Arrow', 'images/arrow.png')
        this.load.image('bottle', 'images/bottle.png')

        //loads spritesheets
        this.load.spritesheet('walking', 'images/walking.png', {
            frameWidth: 400, 
            frameHeight: 400
        })
        this.load.spritesheet('shooting', 'images/shooting.png',{
            frameWidth: 400,
            frameHeight: 400 
        })
        this.load.spritesheet('explosion', 'images/explosion.png', {
            frameWidth: 64, 
            frameHeight: 64,
            startFrame: 0,
            endFrame: 4
        })

        // load bitmap font
        this.load.bitmapFont('comixloud', 'fonts/comixloud.png', 'fonts/comixloud.xml')

        // load sound effects/music
        this.load.audio('underwater', 'sfx/underwater.wav')
        this.load.audio('bubding', '/sfx/bubbleding.wav')
    }

    create() {
        
        // go to the title screen
        this.scene.start('menuScene')
        
    }
}