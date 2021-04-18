class Paper {
  constructor(x, y, width, height) {
    var options = {
      isStatic: false,
      restitution: 1,
      friction: 0,
      density: 0.1
    }
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("cPaperMain.png");
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    // var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    // rotate(angle);
    fill("black");
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    imageMode(CENTER);
    image(this.image, 2.2, 0, this.width+23, this.height+30);
    pop();
  }
};

