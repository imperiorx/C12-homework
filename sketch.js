var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applesImg=loadImage("apple.png")
  orangeleafImg=loadImage("orangeLeaf.png")
  leafImg=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
 
  drawSprites();

  var spr=Math.round(random(1,3));

  if(frameCount%60===0){
    if(spr===1){
      createApples();
    }
    else if(spr===2){
      createleaf();
    }
    else {
      createorangeleaf()
    }
    
  }
}
function createApples(){
  apples=createSprite(random(50,350),40,10,10);
apples.addImage(applesImg)
apples.scale=0.04;
apples.velocityY=3;
apples.lifetime=130;
}
function createleaf(){
  leaf=createSprite(random(50,350),40,10,10);
  leaf.addImage(leafImg)
  leaf.scale=0.04;
  leaf.velocityY=3;
  leaf.lifetime=130;
}
function createorangeleaf(){
  orangeleaf=createSprite(random(50,350),40,10,10);
  orangeleaf.addImage(orangeleafImg)
  orangeleaf.scale=0.04;
  orangeleaf.velocityY=3;
  orangeleaf.lifetime=130;
}