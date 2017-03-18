
var left;
var right;
var puck;
var pause = true;
var x =0;
var sizeSlider = 100;
var maxScore;
    var maxScore1;
function setup(){
  createCanvas(700,400);
  rectMode(CENTER);
//  sizeSlider = createSlider(10,100,100);
  puck =new Puck();
  left = new Paddle(true,sizeSlider);
  right = new Paddle(false,sizeSlider);
   var maxScore = document.getElementById("limit").value;
    var maxScore1 = document.getElementById("limit").value;
//    rules();
}

function draw(){
  background(51);
// Draw the boundary    
    push();
    stroke(127);
    strokeWeight(4);
    noFill()
    beginShape();
        vertex(0,0);
        vertex(width,0);
        vertex(width,height);
        vertex(0,height);
    endShape(CLOSE);
    line(700/2,0,700/2,400);
    pop();

    
    maxScore = document.getElementById("limit").value;
    if(maxScore == 0){
        maxScore = 1000;
    }
    if(maxScore != maxScore1){
        left.score = 0;
        right.score = 0;
        maxScore1 = maxScore;
    }
    if(left.score == maxScore){
        alert("Orange Wins");
        left.score = 0;
        right.score = 0;
        pause = true;
        reset();
    }else if(right.score == maxScore){
        alert("Blue Wins");
        left.score = 0;
        right.score = 0;
        pause = true;
        reset();
    }
  puck.update();
  puck.checkPaddleLeft(left);
  puck.checkPaddleRight(right);
  puck.show();
  left.show();
  right.show();
  left.scoreLeft(puck);
  right.scoreRight(puck);
  push();
      textSize(30);
      fill(255, 0, 255);
      text(left.score,5,30);
      text(right.score,width-40,30);
  pop();
  
  if(puck.x>width || puck.x<0){
    reset();
  }
  if(puck.y + (puck.r/2)>height || puck.y -(puck.r/2)<0){
    puck.yspeed *= -1;
  }
    
    if(pause){
        noLoop();
    }
    
}

function keyPressed(){
  if(key === "A"){
    left.mUp= true;
  }
  if(key === 'Z'){
    left.mDown = true;
  }
     
  if(key === 'K'){
    right.mUp = true;
  }
  if(key === 'M'){
    right.mDown = true;
  }
  if(key ==' ' && pause == false){
    pause = true;
      noLoop();
  }else if(key ==' ' && pause == true){
    pause = false;
      loop();
  }
}


function keyReleased(){  
  if(key === 'A'){
    left.mUp = false;
  }
  if(key === 'Z'){
    left.mDown = false;
  }
     
  if(key === 'K'){
    right.mUp = false;
  }
  if(key === 'M'){
    right.mDown = false;
  }
}


  function reset(){

  if(random(1) > 0.5){
    puck.xspeed *= -1;
  }
  puck.yspeed = random(-5,5);
  puck.x = width/2;
  puck.y = height/2;
      puck.re = 255;
      puck.g = 255;
      puck.b = 255;
}


