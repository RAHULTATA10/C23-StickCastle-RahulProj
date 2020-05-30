class Roof {
    constructor(x, y, side1, radius1, side2, radius2) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.polygon(x, y, side1, radius1, side2, radius2, options);
      this.side1 = side1;
      this.radius1 = radius1;
      this.side2 = side2;
      this.radius2 = radius2;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(240, 178, 122);
      triangle(pos.x, pos.y, this.side1, this.radius1, this.side2, this.radius2);
      pop();
    }
  };
  