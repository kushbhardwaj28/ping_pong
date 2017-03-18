function Puck() {
  this.x = width/2;
  this.y = height/2;
  this.r = 20;
  this.xspeed = 3;
  this.yspeed = 1;
  this.angle = 5*random(90);
    this.re = 255;
    this.g = 255;
    this.b = 255;
  this.history = [];

  this.show = function() {

    fill(this.re,this.g,this.b);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
    var s = 5;
      for(var i = 0; i<this.history.length; i++){
          var pos = this.history[i];
          push();
          fill(this.re,this.g,this.b,s);
          noStroke();
          ellipse(pos.x,pos.y,20,20);
          pop();
          s += 2;
      }
  }

  this.update = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
    var v = createVector(this.x,this.y);
    this.history.push(v);
    if(this.history.length >10){
      this.history.splice(0,1);
    }
  }

  this.checkPaddleLeft = function(p) {
    if (this.y < p.y + p.h/2 && this.y > p.y - p.h/2 &&  this.x-this.r < p.x - p.w/2) {
        var diff = this.y-(p.y-p.h/2);
        var a = map(diff,0,p.h,-radians(45),radians(45));
        this.xspeed = 5*cos(a);
        this.yspeed = 5*sin(a);
        this.xspeed += 2;
        this.yspeed += 2;
        this.re = 255;
        this.g = 102;
        this.b = 0;
    }
  }
  this.checkPaddleRight = function(p) {
    if (this.y<p.y+p.h/2 && this.y>p.y-p.h/2 && this.x+this.r>p.x+p.w/2) {
        var diff = this.y - (p.y - p.h/2);
        var a = map(diff,0,p.h,radians(255),radians(135));
        this.xspeed = 5*cos(a);
        this.yspeed = 5*sin(a);
        this.xspeed -= 2;
        this.yspeed -= 2;
        this.re = 0;
        this.g = 204;
        this.b = 255;
    }
  }
}
