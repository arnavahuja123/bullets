var bullet ,speed,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  bullet = createSprite(40, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height/2);
  speed=random(223,321);
  weight=random(30,52);
  thinkness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(collided(bullet,wall)){
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>180)
    {
      bullet.shapColor = color(255,0,0)
    }
    
    if(deformation<100){
      bullet.shapeColor=color(0,255,0);
    }
  }
  drawSprites();
}
function collided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge=wallLeftEdge){
    return  true;
  }
  return false;
}