const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight=300;
var score =0;
var particle, gameState = "start";
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  yellowLine = createSprite(width/2, 450, width, 10);
  yellowLine.shapeColor = "yellow";


  for (var k = 0; k <=width; k = k + 80) {
     divisions.push(division1 = new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }


  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }
    
}

function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
 
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }
   
/*  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }*/
 
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  if (particle != null){
    if (particle.body.position.y > 450 && particle.body.position.x < 300){
      score = score + 500;
    }
  }

  ground.display();

  drawSprites();
  text(mouseX, 100, 100);

  textSize(20);
  text("Score: "+score,100, 50);

  text("500", 25, 530);
  text("500", 100, 530);
  text("500", 180, 530);
  text("500", 260, 530);
  text("100", 340, 530);
  text("100", 420, 530);
  text("100", 500, 530);
  text("200", 580, 530);
  text("200", 660, 530);
  text("200", 740, 530);

}

function mousePressed(){
  if (gameState !== "end"){
    count++;
    particles.push(
    particle = new Particle(mouseX, 10, 10)
    );
  }
}