function Paddle(pos) {
  this.x;
  this.y = height/2;
  this.h = 100;
  this.w = 10;
  this.score = 0;
  this.mUp = false;
  this.mDown = false;
    this.re = 255;
    this.g = 255;
    this.b = 255;
  
    if(pos){
      this.x = 10;
    } else{
      this.x= width-10;
    }
  
  this.show = function(){
      this.y = constrain(this.y, this.h/2, height-this.h/2);
   this.moveUp();
   this.moveDown();
   if(this.x == 10){
    this.re = 255;
    this.g = 102;
    this.b = 0;
   }else if(this.x == width-10){
        this.re = 0;
        this.g = 204;
        this.b = 255;
   }
   fill(this.re, this.g, this.b);
   noStroke();
   rect(this.x,this.y,this.w,this.h,10);
      var s = 5;
      for(var i = 0; i<10; i++){
          push();
          var x = this.w+i;
          var y = this.h+i;
          fill(this.re, this.g, this.b,s);
          noStroke();
          rect(this.x,this.y,x,y,10);
          pop();
          s += 1;
      }
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
