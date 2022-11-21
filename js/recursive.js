let angle = 0;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  imageMode(CENTER);

}

function draw() {
  frameRate(5);
  background(random(100, 255), random(100, 240), random(100, 240));
  stroke(0, 150, 150);
  strokeWeight(2);
  line(0, height, width, height);
  stroke(random(100, 240), 140, 140);
  angle = 0.48;
  stroke(30, random(80), 10);
  strokeWeight(3);
  translate(200, height + 100);
  branch(140);
  branch(130);
  rotate(.4);
  branch(140);
}

function branch(len) {
  strokeWeight(random(1, 4));
  line(0, 0, 0, -2 * len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(random(2 * angle));
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.5);
    pop();
    push();
    rotate(angle);
    branch(len * 0.5);
    pop();

  }
}


