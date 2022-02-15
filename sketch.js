
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var kirpa
var chandra

function setup()
{
  createCanvas(400,400);
  kirpa=Engine.create()
  chandra= kirpa.world

 var ground_options={
   isStatic:true
 }

  ground= Bodies.rectangle(200,380,400,10,ground_options)
  World.add(chandra,ground)

  var ball_options={
    restitution:1
  }
 // circle(x,y,r)
  ball= Bodies.circle(200,200,30,ball_options)
  World.add(chandra,ball)

  var box_options={
    restitution:2,
    friction:1
  }

  box= Bodies.rectangle(300,200,50,50,box_options)
  World.add(chandra,box)

}

function draw(){
  Engine.update(kirpa)
  background("pink");
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,10)

  ellipseMode(RADIUS)
  //ellipse(x,y,radius,radius)
  ellipse(ball.position.x,ball.position.y,30,30)
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)
  
 
}


