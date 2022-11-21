let t = 0;


function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent('sketch')
  background(0);
};

function draw() {


  background(5, 0, 20);

  translate(width / 2, height / 2);

  stroke(random(160, 240), random(20), random(80, 140), 60);
  strokeWeight(1.5);
  //loop for adding 100 lines
  for (let i = 0; i < 100; i++) {

    line(x1(t + i), y1(t + i), x2(t + i) + 20, y2(t + i) + 20);
    t += 0.008;
  }

}
function x1(t) {
  return sin(t / 10) * 80 + sin(t / 18) * 125 + sin(t / 30) * 125;
}

function y1(t) {
  return cos(t / 10) * 125 + cos(t / 20) * 125 + cos(t / 30) * 125;
}

function x2(t) {
  return sin(t / 15) * 125 + sin(t / 25) * 125 + sin(t / 35) * 125;
}

function y2(t) {
  return cos(t / 15) * 125 + cos(t / 25) * 125 + cos(t / 35) * 125;
}
