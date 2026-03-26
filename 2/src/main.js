class Example extends Phaser.Scene
{
    preload ()
    {

        this.load.image('fish', 'assets/Fish-cool.png');
        this.load.audio('theme', [
            'assets/Fish-audio.mp3'
        ]);
    }

    create ()
    {

        this.input.on('pointerdown', function (pointer)
        {

            console.log('down');

            this.add.image(pointer.x, pointer.y, 'fish');
            const music = this.sound.add('theme');

            music.play();
        }, this);

    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    scene: Example
};

const game = new Phaser.Game(config);