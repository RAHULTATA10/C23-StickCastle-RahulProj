const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var base;
var bgbase;
var pillar1, pillar2;
var middle_pillar;
var window1_pillar1;
var window2_pillar1;
var window1_pillar2;
var window2_pillar2;
var door1, door2;
var roof1, roof2, roof3;
var flag1, flag2, flag3;
var bgImg;

function setup(){
    var canvas = createCanvas(600,500);
    engine = Engine.create();
    world = engine.world;

    bgImg = loadImage("images/bg.jpg");
    //bace part
    bgbase = new Box(250, 325, 400, 150);
    base = new Box(300, 450, 300, 100);
    
    //piller1
    pillar1 = new Box(100, 350, 100, 300);
    
    //piller2
    pillar2 = new Box(500, 350, 100, 300);
   
    //middle_piller
    middle_pillar = new Box(300, 275, 80, 250);
    
    //window1
    window1_pillar1 = new Window(100, 234, 50, 50);
    
    //window2
    window2_pillar1 = new Window(100,400,50,50);

    //window3
    window1_pillar2 = new Window(500, 234, 50, 50);
    
    //window4
    window2_pillar2 = new Window(500,400,50,50);

    door1 = new Window(275, 490, 35, 100);
    door2 = new Window(310, 490, 35, 100);

    roof1 = new Roof(30, 200, 165, 200, 100,120);
    roof2 = new Roof(440, 200, 565, 200, 500,120);
    roof3 = new Roof(240, 150, 355, 150, 295, 60);
 
    flag1 = new Flag(100, 120, 165, 110, 100,100);
    flag2 = new Flag(500, 120, 565, 110, 500,100);
    flag3 = new Flag(295, 60, 355, 50, 295, 40);
}

function draw(){
    background(bgImg);
    
    base.display();
    bgbase.display();
    pillar1.display();
    pillar2.display();
    middle_pillar.display();
    window1_pillar1.display();
    window2_pillar1.display();
    window1_pillar2.display();
    window2_pillar2.display();
    door1.display();
    door2.display();
    roof1.display();
    roof2.display();
    roof3.display();
    flag1.display();
    flag2.display();
    flag3.display();
}
