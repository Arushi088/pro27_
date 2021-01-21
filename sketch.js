
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObj;
var bobObj1, bobObj2, bobObj3, bobObj4, bobObj5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	roofObj = new Roof(400, 100, 700, 50);

	bobObj1 = new Bob(400, 600, 100);
	bobObj2 = new Bob(300, 600, 100);
	bobObj3 = new Bob(200, 600, 100);
	bobObj4 = new Bob(500, 600, 100);
	bobObj5 = new Bob(600, 600, 100);

	rope1 = new Rope(bobObj1.body, roofObj.body, -10, 10);
	rope2 = new Rope(bobObj2.body, roofObj.body, -110, 10);
	rope3 = new Rope(bobObj3.body, roofObj.body, -210, 10);
	rope4 = new Rope(bobObj4.body, roofObj.body, 90, 10);
	rope5 = new Rope(bobObj5.body, roofObj.body, 190, 10);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  drawSprites();
 
  roofObj.display();
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
