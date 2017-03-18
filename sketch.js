
var left;
var right;
var puck;
var pause = false;
var x =0;

function setup(){
  createCanvas(700,400);
  rectMode(CENTER);
  puck =new Puck();
  left = new Paddle(true);
  right = new Paddle(false);
//    rules();
}

function draw(){
  background(51);
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
    push();
    stroke(127);
    strokeWeight(4);
  beginShape(LINES);
    vertex(0,2);
    vertex(width,2);
    vertex(width,height-2);
    vertex(0,height-2);
    vertex(0,2);
  endShape();
  line(700/2,0,700/2,400);
    pop();
}

function keyPressed(){  
  if(key === "W"){
      console.log("asa");
    left.mUp= true;
  }
  if(key === 'S'){
    left.mDown = true;
  }
     
  if(key === 'K'){
    right.mUp = true;
  }
  if(key === 'M'){
    right.mDown = true;
  }
  if(key === 'P' && pause == false){
    pause = true;
      noLoop();
  }
  else  if(key === 'P' && pause == true){
    pause = false;
      loop();
  }
}


function keyReleased(){  
  if(key === 'W'){
    left.mUp = false;
  }
  if(key === 'S'){
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


function rules() {
    var canvas = document.getElementById("defaultCanvas0");
    var rule = document.createElement("h2");
    var data = document.createTextNode("Rules");
    rule.appendChild(data);
    canvas.after(rule,canvas);
    canvas.insertAfter
}


