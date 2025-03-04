//creates player Sprite;

function playerPreload(){
}

function playerSetup(){
	player = new Sprite(width/2, height);
	player.diameter = 50;
	player.scale = 2;
	player.rotationLock = true;
	player.collider = 'd';

	player.debug = true;
	
	player.addAni('down', 'assets/playerForwardAssets/PF1.png', 8);
	player.addAni('stand', 'assets/playerPrototype5.png', 1);
	player.ani.pause();
	player.ani.frame = 4;

	playerCoords[0] = player.x;
	playerCoords[1] = player.y;

//location text sprite creation
	locTextY = new Sprite();
	locTextX = new Sprite();
}


function playerDraw(){
	//keeps track of player location
	playerCoords[0] = player.x;
	playerCoords[1] = player.y;
	
	playerMovement();
	cameraMovement();
	locationText();
}

//basic player movement function
function playerMovement(){
	if (kb.pressing('up') && !kb.pressing('down')) {
		player.vel.y = -2;
		pMovingU = true;
		pMovingD = false;
	} else if(kb.pressing('down') && !kb.pressing('up')){
		player.vel.y = 2;
		pMovingU = false;
		pMovingD = true;
	} else {
		player.vel.y = 0;
		pMovingU = false;
		pMovingD = false;
	}

	if(kb.pressing('left') && !kb.pressing('right')){
		player.vel.x = -2;
		pMovingL = true;
		pMovingR = false;
	} else if(kb.pressing('right') && !kb.pressing('left')){
		player.vel.x = 2;
		pMovingL = false;
		pMovingR = true;
	} else {
		player.vel.x = 0;
		pMovingL = false;
		pMovingR = false;
	}

	playerSprite();
}

function playerSprite(){
	if(pMovingL && !pMovingR){
	
	} else if(pMovingR && !pMovingL){

	} else if(pMovingU && !pMovingD){

	} else if(pMovingD && !pMovingU){
		player.changeAni('down');
	} else {
		player.changeAni('stand');
		player.ani.pause();
		player.ani.frame = 4;
	}
}

//camera connected ot player movement
function cameraMovement(){
	camera.x = player.x;
	camera.y = player.y;
}

//player location sprite 
function locationText(){
	locTextX.x = player.x-width/4;
	locTextX.y = player.y-width/4;
	locTextX.text = playerCoords[0];

	locTextY.x = locTextX.x+150;
	locTextY.y = locTextX.y;
	locTextY.text = playerCoords[1];
}