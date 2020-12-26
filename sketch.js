const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4, box5;
var pig1, pig2 ,log1, log2, log3, log4, bird;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,350,70,70);
    box2 = new Box(800,350,70,70);
    ground = new Ground(500,380,1000,20);
    pig1 = new Pig(700,350);
    log1 =new Log(700,310,280,PI/2);
    box3 = new Box(600,300,70,70);
    box4 = new Box(800,300,70,70);
    log2 = new Log(700,265,280,PI/2);
    pig2 = new Pig(700,300)
    box5 = new Box(700,230,70,70);
    log3 = new Log(650,230,150,PI/7)
    log4 = new Log(750,230,150,-PI/7)
    bird= new Bird(100,100);

    console.log(ground);
}

function draw(){
    background("yellow");
    Engine.update(engine);

    box1.display()
    box2.display()
    ground.display()
    pig1.display()
    log1.display()
    box3.display()
    box4.display()
    log2.display()
    pig2.display()
    box5.display()
    log3.display()
    log4.display()
    bird.display()


    
    

    
}