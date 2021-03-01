const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var world,engine;

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21,block22,block23;
var block24,block25,block26,block27,block28,block29,block30;

var SLING;

var enemy, enemyimg;

var hero,heroimg;

var bgimg;
function preload() {
//preload the images here
  bgimg = loadImage("GamingBackground.png");

  heroimg = loadImage("Superhero-01.png");

  enemyimg = loadImage("Monster-01.png");
}

function setup() {

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  createCanvas(3000, 800);

  ground = new Ground(500,550,1200,20);

  //Creating the blocks
  block1 = new Block(500,515,50,50);
  block2 = new Block(500,470,50,50);
  block3 = new Block(500,425,50,50);
  block4 = new Block(500,380,50,50);
  block5 = new Block(500,335,50,50);
  block6 = new Block(500,290,50,50);
  block7 = new Block(500,245,50,50);
  block8 = new Block(580,515,50,50);
  block9 = new Block(580,515,50,50);
  block10 = new Block(580,470,50,50);
  block11 = new Block(580,425,50,50);
  block12 = new Block(580,380,50,50);
  block13 = new Block(580,335,50,50);
  block14 = new Block(580,290,50,50);
  block15 = new Block(660,515,50,50);
  block16 = new Block(660,515,50,50);
  block17 = new Block(660,470,50,50);
  block18 = new Block(660,425,50,50);
  block19 = new Block(660,380,50,50);
  block20 = new Block(660,335,50,50);
  block21 = new Block(660,290,50,50);
  block22 = new Block(660,245,50,50);
  block23 = new Block(660,200,50,50);
  block24 = new Block(740,515,50,50);
  block25 = new Block(740,470,50,50);
  block26 = new Block(740,425,50,50);
  block27 = new Block(740,380,50,50);
  block28 = new Block(740,335,50,50);

  hero = new Hero(100,400,150,150);

  enemy = new Enemy(1000,400,150,150);

  SLING = new SlingShot(hero.body,{x:150,y:350});
 
}

function draw() {
  //Engine.update(engine);
  background(bgimg);

  //Displaying the Ground
  ground.display();

  //Displaying the Blocks
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  SLING.display();
  hero.display();
  enemy.display();

}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
  SLING.fly();
}