//sketch.js variables
var player, airplane;
var bgImage, backgroundImage;
var locTextX, locTextY;
var gameState = 0;

//player.js variables
var playerData1 = [],
	playerData2 = [],
	playerData3 = [];

//menu.js variables
var menubgImg, options, option, saveOptions, saveOption;

//hud.js variables
var menuOptButtonImg, hpIndImg, hpIndic, xVal, yVal;

function preload(){
	airplane = loadImage("assets/playerPrototype5.png");
	bgImage = loadImage("assets/grid image.jpg");

	hudPreload();
}

function setup() {
	new Canvas(1000, 600);
	displayMode('centered');

	if(gameState == 0)	
		menuSetup();
	
	//background grid creation
	backgroundImage = new Sprite(width/2,height/2)
	backgroundImage.img = bgImage;
	backgroundImage.scale = 4;
	backgroundImage.collider = 'none';

	//location text sprite creation
	locTextY = new Sprite();
	locTextX = new Sprite();

	playerCreation();
	hudSetup();


	visiblityControl(false);
}

function draw() {	
	background('white');
	
	/*
	different situations based on what gamestate the game is in
		gameState states: 
			~ 0 = menu
			~ 1 = start
			~ 2 = play
			~ 3 = setting new Game
			~ 4 = pause
	*/
	switch(gameState) {
		case 0:	menuDraw();
				break;

		case 1: break;

		case 2:	playerMovement();
				cameraMovement();
				locationText();
				hudDraw();
				break;
		
		case 3: break;

		case 4: break;
	}

}

//turns off visibility of gameplay sprites
function visiblityControl(x){
	locTextY.visible = x;
	locTextX.visible = x;
	backgroundImage.visible = x;
	player.visible = x;
	hpIndic.visible = x;

	options.visible = !x;
}

