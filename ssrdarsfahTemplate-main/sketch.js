var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music=loadSound("music.mp3")
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = "blue";

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = "orange";

    
    block3=createSprite(505,580,200,30)
    block3.shapeColor="red"

    block4=createSprite(715,580,200,30)
    block4.shapeColor="green"

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX=6
    ball.velocityY=-8

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    
    if(block1.y-ball.y<=ball.height/2+block1.height/2){
        ball.velocityY=ball.velocityY*(-1)
    }
    if(block1.isTouching(ball) && block1.y-ball.y<=ball.height/2+block1.height/2){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
        ball.velocityX=0
        ball.velocityY=0

        music.stop()
    }
  
    if(block3.y-ball.y<=ball.height/2+block3.height/2){
        ball.velocityY=ball.velocityY*(-1)
    }
    if(block3.isTouching(ball) && block3.y-ball.y<=ball.height/2+block3.height/2){
        ball.shapeColor = "red";
        music.play();
    }
    

  
    if(block4.y-ball.y<=ball.height/2+block4.height/2){
        ball.velocityY=ball.velocityY*(-1)
    }
    if(block4.isTouching(ball) && block4.y-ball.y<=ball.height/2+block4.height/2){
        ball.shapeColor = "green";
        music.play();
    }

    drawSprites();
}
