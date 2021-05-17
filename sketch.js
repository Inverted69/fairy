var starImg,bgImg,fairyFly;
var star, starBody,fairy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var myEngine,myWorld;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	fairyFly = loadAnimation("fairyImage1.png","fairyImage2.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairy = createSprite(130,520);
	fairy.addAnimation("flying",fairyFly);
	fairy.scale = 0.4;


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	myEngine = Engine.create();
	myWorld = myEngine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {isStatic:true});
	World.add(myWorld, starBody);
	
	Engine.run(myEngine);
}

function draw() {
  background(bgImg);

  star.x= starBody.position.x;
  star.y= starBody.position.y;

  if(star.y > 470 && starBody.position.y > 470){
		Matter.Body.setStatic(starBody,true);
  }
  keyPressed();
  drawSprites();

}

function keyPressed() {

	if (keyDown(DOWN_ARROW) || keyDown("space")) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyDown(RIGHT_ARROW)){
		fairy.x +=20;
	}
	if(keyDown(LEFT_ARROW)){
		fairy.x -=20;
	}
}