var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=width; k=k+100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var l = 100; l <=100; l = l + 100) {
    divisions.push(new Divisions(l, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var k = 200; k <=100; k = k + 100) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var j = 25; j <=width-20; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  //create 4th row of plinko objects
  for (var j = 10; j <=width-30; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

  //create particle objects


}



function draw() {
  background("black");
  textSize(20)

  Engine.update(engine);
  ground.display();
  if(frameCount%60===0){
  
   //To generate it randomly
   // particles.push(new Particle(random(10,780),0,10,10))
   //To generate based on mouse position
   particles.push(new Particle(mouseX,0,10,10))
  }
  for(var m = 0 ; m < particles.length; m++)  {

    particles[m].display();
}
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var l = 0; l < divisions.length; l++) {
    divisions[l].display();
  }
  //display the paricles 
}