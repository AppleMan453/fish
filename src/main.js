class Example extends Phaser.Scene
{
    preload ()
    {

        this.load.image('fish', 'assets/Fish-cool.png');
        this.load.image('kill', 'assets/Kill.png');
        this.load.audio('theme', [
            'assets/Fish-audio.mp3'
        ]);
    }

    create ()
    {
        
        

       
       

        
    }
    update() {
    if (this.input.activePointer.isDown){
        console.log("Holding mouse / finger");
        this.add.image(this.input.activePointer.x,this.input.activePointer.y, 'fish');
            const music = this.sound.add('theme');

            music.play();
    }
    }   
}



const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 1350,
    height: 720,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: Example
};

const game = new Phaser.Game(config);
