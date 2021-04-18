const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var groundObj, garbageObj, paperObj, bgImg;


function setup() {
    createCanvas(1400, 700);

    engine = Engine.create();
    world = engine.world;
    bgImg = loadImage("bgImg.png");

    paperObj = new Paper(215, -100, 34, 24);
    garbageObj = new GarbageCan(1200, 668);
    groundObj = new Ground(width/2, height-17, width, 12);

}

function draw() {
    background('lightblue');
    Engine.update(engine);
    
    groundObj.display();
    paperObj.display();
    garbageObj.display();
}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x: 4.5, y: -5});
    }
}