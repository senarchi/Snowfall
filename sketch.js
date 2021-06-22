const Engine = Matter.Engine;
const World = Matter.World;
 // Events = Matter.Events,
const Bodies = Matter.Bodies;

//var girl;
var snow = [];
var engine,world,bgimg,snow1img,snow2img;
//var ground;

function preload(){
  bgimg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;
 
  //girl = new Girl(300,100,50,50);
 // ground = new Ground(width/2,height,width,20);

 if (frameCount%50===0){
   for(var i=0;i<200;i++){
     snow.push(new createSnow(random(0,800),random(0,800)))
   }
 }

}

function draw() {
  background(bgimg);  
  drawSprites();
 
  
  Engine.update(engine);

 // girl.diplay();


  //for diplaying snow
  for (var i = 0; i < 200; i++) {
    snow[i].showDrop();
    snow[i].updateY();
  }

 

}