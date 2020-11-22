
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

paper1 = new paper (60,240,20);
ground1 = new Ground (30,550,1600,20);
dustbin1 = new dustbin (500,500,70,10);
dustbin1 = new dustbin (500,500,70,10);
dustbin1 = new dustbin (470,450,13,150);
dustbin2 = new dustbin (560,530,150,13);
dustbin3 = new dustbin (650,450,13,150);
 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  keypressed();
  drawSprites();
 paper1.display();
 ground1.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}

function keypressed(){
	if(keyCode ===UP_ARROW){
		Matter.Bodies.applyForce(paperObject.body,paperObject.body.position,{x:45 , y:-45});
	}
}



