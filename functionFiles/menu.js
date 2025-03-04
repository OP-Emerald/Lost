
function menuPreload(){
//    menubgImg = loadImage();
}

function menuSetup(){
//setting up template for options group
  options = new Group();
  options.width = 200;
  options.height = 60
  options.x = width*(7/8);
  options.color = '#a474db';
  options.textSize = 24;

//creating actual option objects
  for(var i=0; i<4; i++){
    option = new options.Sprite();
    option.y = height*(5/12);
    if(i>0)
    option.y = options[i-1].y+90;
  }

  options[0].text = "New Game";
  options[1].text = "Continue Game";
  options[2].text = "Options";
  options[3].text = "Credits";

  /* Commented out b/c save system being scrapped
//setting up template for save option group
  saveOptions = new Group();
  saveOptions.width = 200;
  saveOptions.height = 60
  saveOptions.x = width/2;
  saveOptions.color = '#a474db';
  saveOptions.textSize = 24;
  */

//creating game not been made alert 
  alerts = new Group();
  alerts.x = width/2;
  alerts.y = height/3;
  

//checking if a game has been started
  gameStarted = false;
}

function menuDraw(){
  
  if(options[0].mouse.pressing()){
    gameState = 1;
    options.collider = "none";
    visiblityControl(true);
    gameStarted = true;
    
  } else if(options[1].mouse.pressing()){
    if(gameStarted){
      gameState = 1;
      options.collider = "none";
      visiblityControl(true);
    } else {
      
    }

  } else if(options[2].mouse.pressing()){

  } else if(options[3].mouse.pressing()){

  }
}


/* Save System being scrapped
function saveOption(){
  for(var i=0; i<4; i++){
    saveOption = new saveOptions.Sprite();
    saveOption.y = height*(1/3);
    if(i>0)
      saveOption.y = saveOptions[i-1].y+90;
  }
}
*/