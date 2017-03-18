function Paddle(pos) {
  this.x;
  this.y = height/2;
  this.h = 100;
  this.w = 10;
  this.score = 0;
  this.mUp = false;
  this.mDown = false;
    if(pos){
      this.x = 10;
    } else{
      this.x= width-10;
    }
  
  this.show = function(){
   this.moveUp();
   this.moveDown();
   if(this.x == 10){
    fill(255, 102, 0);
   }else if(this.x == width-10){
    fill(0, 204, 255);
   }
   noStroke();
   rect(this.x,this.y,this.w,this.h,10);
  }
  
  this.scoreLeft = function(p){
    if(p.x>width){
      this.score++;
    }
  }
  this.scoreRight = function(p){
    if(p.x<0){
      this.score++;
    }
  }
  
  
  this.moveUp = function(){
   if(this.mUp){
     this.y -= 7;
   } else{
     this.y -= 0;
   } 
  }
  
  this.moveDown = function(){
   if(this.mDown){
     this.y += 7;
   } else{
     this.y+=0;
   }
  }
}