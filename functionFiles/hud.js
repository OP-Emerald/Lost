function hudPreload(){
    hpIndImg = loadImage("assets/heart.png");
}

function hudSetup(){
   xVal = player.x-width*(1/6);
   yVal = (player.y)*(39/20);
    

   hpIndic = new Sprite(500,500);
   hpIndic.img = hpIndImg;
   hpIndic.scale = 1;
   hpIndic.collider = 'none';

}

function hudDraw(){

    hudFollow();
}

function hudFollow(){
	hpIndic.x = player.x-width*(1/14);
	hpIndic.y = player.y+width/4;

}