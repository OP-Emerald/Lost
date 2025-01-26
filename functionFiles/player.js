//creates player Sprite;


function playerCreation(){
	player = new Sprite(width/2, height);
	player.diameter = 50;
	player.img = airplane;
	player.scale = 2;
	player.collider
}

function playerSave(){
	playerData1[]
}

//basic player movement function
function playerMovement(){
	if (kb.pressing('up')) {
		player.vel.y = -2;
	} else if(kb.pressing('down')){
		player.vel.y = 2;
	} else {
		player.vel.y = 0;
	}

	if(kb.pressing('left')){
		player.vel.x = -2;
	} else if(kb.pressing('right')){
		player.vel.x = 2;
	} else {
		player.vel.x = 0;
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
	locTextX.text = player.x;

	locTextY.x = locTextX.x+150;
	locTextY.y = locTextX.y;
	locTextY.text = player.y;
}