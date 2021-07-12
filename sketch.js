const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2,box3,box4;
var ground;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;

    box1=new Box(200,200,100,100);   
    box2=new Box(230,50,120,190); 
    box3=new Box(400,200,110,170);   
    box4=new Box(430,50,150,130);   
    ground=new Ground(400,790,800,20);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    
}

