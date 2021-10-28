var garden, rabbit, apple, gl, ol, rl,bomb;
var gardenimg, rabbitimg, appleimg, glimg, olimg, rlimg,bombimg;
var score=0//rabbitGroup;

function preload(){
  gardenimg = loadImage("garden.png");
  rabbitimg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  glimg = loadImage("leaf.png");
  olimg = loadImage("orangeLeaf.png");
  rlimg= loadImage("redImage.png");
  bombimg=loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  garden = createSprite(200,200);
  garden.addImage(gardenimg);
  rabbit = createSprite(160,340,20,20);
  rabbit.addImage(rabbitimg);
  rabbit.scale=0.09;
  //rabbitGroup = new Group();
  apple = createApples();
  gl = createGreenLeaves(); 
  ol = createOrangeLeaves(); 
  rl = createRedLeaves(); 
  bomb = createbomb();
}

function draw() {
  background("white");
  rabbit.x = World.mouseX;
  //rabbitGroup.add(rabbit);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  var sprites = Math.round(random(1,5));
  if (frameCount % 80 == 0) {
    if (sprites == 1) {
     createApples();
    } 
    else if (sprites == 2) {
      createGreenLeaves();
    }
    else if (sprites == 3){
     createOrangeLeaves(); 
    }
    else if(sprites == 4){
      createRedLeaves(); 
   }
   else{
     createbomb();
   }
  }
  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleimg);
  apple.scale=0.05;
  apple.velocityY = 8;
  apple.lifetime = 150;
}

function createGreenLeaves() {
  gl = createSprite(random(50, 350),40, 10, 10);
  gl.addImage(glimg); 
  gl.scale=0.05;
  gl.velocityY = 5;
  gl.lifetime = 150;
}

function createOrangeLeaves() {
  ol = createSprite(random(50, 350),40, 10, 10);
  ol.addImage(olimg);
  ol.scale=0.05;
  ol.velocityY = 7;
  ol.lifetime = 150;
}

function createRedLeaves() {
  rl = createSprite(random(50, 350),40, 10, 10);
  rl.addImage(rlimg);
  rl.scale=0.03;
  rl.velocityY = 5;
  rl.lifetime = 150;
}

function createbomb() {
  bomb = createSprite(random(50, 350),40, 10, 10);
  bomb.addImage(bombimg);
  bomb.scale=0.03;
  bomb.velocityY = 12;
  bomb.lifetime = 150;
}