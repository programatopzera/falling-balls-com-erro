
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle,angle1,angle2,angle3


function preload()
{
	
}

function setup(){ 
	createCanvas(550,600);
	 engine = Engine.create();
	  world = engine.world;
	   //crie corpos planos e blocos
	    var plane_options= { 
			isStatic: true }
			 plane = Bodies.rectangle(600,height,1200,20,plane_options);
			  World.add(world,plane);

			   block1=Bodies.rectangle(100,400,150,20,plane_options);
			    World.add(world,block1);
				
				 block2=Bodies.rectangle(400,400,150,20,plane_options);
				  World.add(world,block2); 
				  //crie múltiplos de corpos de partículas 
				  
			var rotator_options = {
				isStatic: true
			}
			rotator1 = Bodies.rectangle(250,200,150.20,rotator_options)
			World.add(world,rotator1);
			Matter.Body.rotate(rotator1,angle)
			push();
			translate(rotator1.position.x,rotator1.position.y);
			rotate(angle1);
			rect(0,0,150,20);
			pop();
			angle1 +=0.2;

			rotator2 = Bodies.rectangle(250,200,150.20,rotator_options)
			World.add(world,rotator2);
			Matter.Body.rotate(rotator2,angle2)
			push();
			translate(rotator2.position.x,rotator2.position.y);
			rotate(angle2);
			rect(0,0,150,20);
			pop();
			angle2 +=0.4;

			rotator3 = Bodies.rectangle(250,200,150.20,rotator_options)
			World.add(world,rotator3);
			Matter.Body.rotate(rotator3,angle3)
			push();
			translate(rotator3.position.x,rotator3.position.y);
			rotate(angle1);
			rect(0,0,150,20);
			pop();
			angle3 +=0.3;

			var particle_options = { 
				restitution:0.4,
				 friction:0.02 
				}
				particle1 = Bodies.circle(220,10,10,particle_options);
				World.add(world,particle1);

				particle2 = Bodies.circle(220,10,10,particle_options);
				World.add(world,particle2);

				particle3 = Bodies.circle(220,10,10,particle_options);
				World.add(world,particle3);

				particle4 = Bodies.circle(220,10,10,particle_options);
				World.add(world,particle4);

				particle5 = Bodies.circle(220,10,10,particle_options);
				World.add(world,particle5);

}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  drawSprites();
 

}



