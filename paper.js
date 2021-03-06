class paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':0.5,
          'isStatic':false,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius= radius;
      this.image= loadImage("paper.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0, 0, this.radius, this.radius);
      image(this.image,0,0,70);
      pop();
    }
  };
  