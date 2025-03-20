// enemy octopusprefab
class Sodaenemy extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'soda')

        // Store scene reference
        this.sceneRef = scene

        scene.add.existing(this)
        scene.physics.add.existing(this)
    
        this.setCollideWorldBounds(true)
        this.setScale(0.5)
        this.body.allowGravity = false
        this.speed = 60;
    }

    update(player) {
        if (player) {
            this.scene.physics.moveToObject(this, player, this.speed)
        }
    }

    destroyAndRespawn() {
        if (!this.scene) return;


        // Disable the enemy instead of destroying it
        this.setActive(false)
        this.setVisible(false)
        this.body.enable = false

        this.scene.time.delayedCall(3000, () => {
            if (!this.scene || !this.scene.map) return;
            let spawn = this.scene.map.findObject('Spawns', obj => obj.name === 'sodaSpawn')
            if (spawn) {
                this.setPosition(spawn.x, spawn.y)
                this.setActive(true)
                this.setVisible(true)
                this.body.enable = true // Ensure body is re-enabled when respawning
            }
        })
    }
}