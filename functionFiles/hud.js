function hudPreload(){
    hpIndImg = loadImage("assets/heart.png");
}

function hudSetup(){


   hpIndic = new Sprite(500,500);
   hpIndic.img = hpIndImg;
   hpIndic.scale = 1;
   hpIndic.collider = 'none';

}

function hudDraw(){

    hudFollow();

    if(kb.presses('escape')){
        /*
        Changing back to menu gamestate:
            - Reverting gameState to the menu state
            - resetting options colliders
            - changing the visibilities
            - setting camera back to origin
        

        console.log("gamestate changed");
        console.log("camera X: " + camera.x + "\n Camera Y: " + camera.y);
        */

        camera.x = 500;
        camera.y = 300;
        gameState = 0;
        options.collider = 'static';
        visiblityControl(false);

    }
}

function hudFollow(){
	hpIndic.x = player.x-width*(1/14);
	hpIndic.y = player.y+width/4;
}

function hudVisibility(visControl){
    
}