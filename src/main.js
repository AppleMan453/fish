class Example extends Phaser.Scene {

    preload () {
        this.load.image('fish', 'assets/Fish-cool.png');
        this.load.audio('theme', ['assets/Fish-audio.mp3']);
    }

    create () {
        this.input.addPointer(4); // total 5 touches

        this.score = 0;

        this.scoreText = this.add.text(20, 20, 'Fish: ' + this.score, {
            font: '32px Arial',
            fill: '#ffffff'
        }).setDepth(9999);

        // Load music ONCE
        this.music = this.sound.add('theme');

        // Control spawn rate (important for mobile)
        this.lastSpawnTime = 0;
        this.spawnDelay = 100; // milliseconds

        // Handle touch / click
        this.input.on('pointerdown', (p) => {
            this.spawnFish(p);
        });
    }

    spawnFish(pointer) {
        

        this.score += 1;
        this.scoreText.setText('Fish: ' + this.score);

        this.add.image(pointer.x, pointer.y, 'fish');

        // play sound safely
        if (!this.music.isPlaying) {
            this.music.play();
        }
    }

    update () {
        // Optional: allow holding touch (controlled rate)
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
