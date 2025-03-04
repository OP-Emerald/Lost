function npcPreload(){
    n1ani = loadAni("assets/NPC/npc1/Frame1.png", 2);
    n2ani = loadAni("assets/NPC/npc2/Frame1.png", 2);
    n3ani = loadAni("assets/NPC/npc3/Frame1.png", 2);
}

function npcSetup(){
    n1ani.frameDelay = 45;

    /*
    npcs = new Group();
    npcs.diameter = 50;
	npcs.scale = 3;
    npcs.debug = true;
    npcs.collider = 'none';

    npcs.addAni('npc1', n1ani);
    npcs.addAni('npc2', n2ani);
    npcs.addAni('npc3', n3ani);
    */

    npcs.push(new Sprite(400, 400));
    npcs[0].diameter = 1;
	npcs[0].scale = 3;
    npcs[0].addAni(n1ani);
    npcs[0].addSensor(0, 0, 100)

    npcColliders.push(new Sprite(400, 430, 10, 40));
    npcColliders[0].overlaps(npcs[0]);
    npcColliders[0].collider = 's';
    npcColliders[0].opacity = 0;


    
}

function npcDraw(){
    if(player.overlapping(npcs[0])){
        npcInteraction(0);
    }
}

function npcInteraction(npcNum){
    if(npcNum==0){
        console.log("test success");
    }
}