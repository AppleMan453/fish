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
        this.input.addPointer(9);

       
       

       
    }
    
    update() {
        let pointers = this.input.manager.pointers;

        for (let i = 0; i < pointers.length; i++) {
            let p = pointers[i];

            if (p.isDown ) {
                 console.log("Holding mouse / finger");
                this.add.image(p.x,p.y, 'fish');
                const music = this.sound.add('theme');
             
                music.play();
            }
           


            
    }
    }   
}



const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 1350,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: false,
    scene: Example
};

const game = new Phaser.Game(config);
