//sketch.js variables
var player, airplane;
var bgImage, backgroundImage, bgImgs;
var locTextX, locTextY;
var gameState = 0;

//player.js variables
var pForwardSprites,
	pMovingU = false, 
	pMovingD = false, 
	pMovingL = false, 
	pMovingR = false,
	playerCoords = [];

//menu.js variables
var menubgImg, 
	options, option, 
	saveOptions, saveOption, 
	gameStarted, 
	alerts, alert, alertInfo1;

//hud.js variables
var menuOptButtonImg, hpIndImg, hpIndic;

//npc.js variables
var npcs = [], npcColliders = [], npcInfo = [],
	npc, npcCollider,
	n1ani, n2ani, n3ani, n4ani, n5ani; 

function preload(){
	bgImage = loadImage("assets/grid image.jpg");
	hudPreload();
	npcPreload();
}

function setup() {
	new Canvas(1000, 600);
	displayMode('centered');
	//allSprites.autoCull = false;
	p5play.renderStats = true;
	//console.log("camera X: " + camera.x + "\n Camera Y: " + camera.y);

	menuSetup();	
	/*
	//background grid creation
	bgImgs = new Group();
	bgImgs.x = canvas.hw;
	bgImgs.y = canvas.hh;
	bgImgs.image = bgImage;
	bgImgs.scale = 4;
	bgImgs.collider = 'none';
	bgImgs.cull(10000000000);
	new bgImgs.Sprite();
*/
	playerSetup();
	hudSetup();
	npcSetup();
	visiblityControl(false);
}

function draw() {	
	background('white');
	
	/*
	different situations based on what gamestate the game is in
		gameState states: 
			~ 0 = menu
			~ 1 = play
			~ 2 = pause
			~ 3 = started a new Game (setting all NPC interactions to false)
	*/
	switch(gameState) {
		case 0:	menuDraw();
				break;

		case 1:	playerDraw();
				hudDraw();
				npcDraw();
				deBugging();
				break;
		
		case 2: break;

	}

}

//turns off visibility of gameplay sprites
function visiblityControl(x){
	locTextY.visible = x;
	locTextX.visible = x;
	player.visible = x;
	hpIndic.visible = x;
	//bgImgs.visible = x;
	npcs[0].visible = x;
	npcColliders[0] = x;
	
	options.visible = !x;
}

function deBugging(){
	//console.log(npc.x + " " + npc.y);

	//console.log("Up Boolean: " + pMovingU + '  Down Boolean: ' + pMovingD);
	//console.log("Left Boolean: " + pMovingL);
	//console.log("Right Boolean: " + pMovingR);

}

