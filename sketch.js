const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var s1,s2,s3,s4,s5,s6;
var st1,st2,st3,st4,st5,st6;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
    world = engine.world

    s1 = new Sticks (100,498,80,200);
    s2 = new Sticks (700,498,80,200);
    s3 = new Sticks (190,473,100,250);
    s4 = new Sticks (610,473,100,250);
    s5 = new Sticks (400,463,320,300);
    s6 = new Sticks (450,45,100,50);

    st1 = new Stones (60,400,140,400,100,280);
    st2 = new Stones (140,350,240,350,185,200);
    st3 = new Stones (660,400,740,400,700,280);
    st4 = new Stones (560,350,660,350,610,200);
    st5 = new Stones (240,313,560,313,400,130);
    st6 = new Stones (400,130,400,130,400,20);

    //st1 = new Stones (200,200,3);
    
}

function draw() {
  background("pink");  
  Engine.update(engine);

 fill("lightgreen")
 strokeWeight(4);
 stroke("black");
  s4.display();
  s3.display();
 fill("violet")
  s1.display();
  s2.display();
 fill("lightblue")
  s5.display();
 fill("red");
  s6.display();

  fill("yellow");
  
  fill("orange")
  st1.display();
  st3.display();
  fill("yellow");
  st2.display();
  st4.display();
  fill("turquoise")
  st5.display();
  st6.display();
  
  drawSprites();
}