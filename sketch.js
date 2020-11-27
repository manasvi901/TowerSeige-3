const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var a;
var circles=[];

var score=0;

function setup() {
  createCanvas(800,800);
  stroke(255)
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(getBackgroundImg);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

 text("SCORE : "+score,750,40);
 
 ground = new Ground(5,650,20,800);
 stand = new Ground(360,275,20,170);

block1 = new Box(330,235,30,40);

block2 = new Box(300,275,30,40);
block3 = new Box(330,275,30,40);
block4 = new Box(360,275,30,40);

block5 = new Box(270,315,30,40);
block6 = new Box(300,315,30,40);
block7 = new Box(330,315,30,40);
block8 = new Box(360,315,30,40);
block9 = new Box(390,315,30,40);

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();

getBackgroundImg();
keyPressed();

 drawSprites();
}

function display(){
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  ground.display();
  stand.display();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    polygon.fly();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "white";
  }
  else{
      bg = "black";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}
