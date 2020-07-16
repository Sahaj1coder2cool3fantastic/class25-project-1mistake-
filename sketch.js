
var paper2
var ground1
var clean_dustbin
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

paper2 = new Paper(100,400,30);
ground1 = new Ground(600,height,1200,20);
clean_dustbin = new Dustbin(680,681,20,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper2.display();
ground1.display();
clean_dustbin.display();
keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper2.body,paper2.body.position,{x:1,y:-8})
  }
}




