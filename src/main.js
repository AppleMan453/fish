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
        this.score = 0;
        this.scoreText = this.add.text(20, 20,'Fish: ' +this.score, {
        font: '32px Ariel',
        fill: '#ffffff'
        });
        this.scoreText.setDepth(Number.MAX_SAFE_INTEGER);
        
       
       

       
    }
    
    update() {
        let pointers = this.input.manager.pointers;

        for (let i = 0; i < pointers.length; i++) {
            let p = pointers[i];

            if (p.isDown ) {
                this.score += 1;
                this.scoreText.setText('Fish: ' + this.score);
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
    width: 2000,
    height: 2000,

    backgroundColor: '#000000',
    pixelArt: false,
    scene: Example
};

const game = new Phaser.Game(config);
