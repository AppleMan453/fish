class Example extends Phaser.Scene {

    preload () {
        this.load.image('fish', 'assets/Fish-cool.png');
        this.load.audio('theme', ['assets/Fish-audio.mp3']);
    }

    create () {
        this.input.addPointer(4); 

        this.score = 0;
        

        this.scoreText = this.add.text(20, 20, 'Fish: ' + this.score, {
            font: '32px Arial',
            fill: '#ffffff'
        }).setDepth(9999);

        this.music = this.sound.add('theme');



        this.input.on('pointerdown', (p) => {
            this.spawnFish(p);
        });
    }

    spawnFish(pointer) {



        this.score += 1;
        this.scoreText.setText('Fish: ' + this.score);

        let fish = this.add.image(pointer.x, pointer.y, 'fish');
        let choice = Math.floor(Math.random()*6)
        if (choice === 1) {
             fish.setTint(0xffffff);
        } if (choice === 0) {
             fish.setTint(0xff0000);
        }if (choice === 2){
            fish.setTint(0xffff00);
        }if (choice === 3){
            fish.setTint(0x00ff00);
        }if (choice === 4){
            fish.setTint(0xff00ff);
        }if (choice === 5){
            fish.setTint(0xff00f0);
        }
       
        

        let angle = Phaser.Math.Angle.Between(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            pointer.x,
            pointer.y
        );

        fish.setRotation(angle);

        if (!this.music.isPlaying) {
            this.music.play();
        }
    }

    update () {
        this.input.manager.pointers.forEach(p => {
            if (p.isDown) {
                this.spawnFish(p);
            }
        });
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',

    // Make it mobile-friendly
    width: window.innerWidth,
    height: window.innerHeight,

    backgroundColor: '#000000',

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: Example
};

const game = new Phaser.Game(config);
