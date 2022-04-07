

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch');


    background(240,02);
fill(10,0,116);
    text("whatever is clever", 200,200);
    let a = createA('http://p5js.org/', 'powered by p5.js');
    let b = createA('http://p5js.org/', 'powered by p5.js');

    let c = createA('http://p5js.org/', 'powered by p5.js');

let x=random(220,380);
let y=random(220,520);
a.style('color', '0');
a.position(x,y);
b.style('color', '0');
b.position(x,y+25);
c.style('color', '0');
c.position(x,y-25);
}

function draw(){
    noStroke();
    fill(mouseX,0,mouseY);
ellipse(mouseX,mouseY, 80,80);


noFill();
strokeWeight(200);
stroke(10,0,116,80);
ellipse(width/2,height/2,700,700);
fill(0);
textSize(28);

}

function mousePressed() {
    noStroke();
    fill(10,0,116);

     ellipse(random(width-200), random(height-200), 80, 80);
     ellipse(random(width-200), random(height-200), 80, 80);
     ellipse(random(width-200), random(height-200), 80, 80);
  
}

class Hole {
    constructor() {
        this.x=random(width);
        this.y=random(height);
        this.size=random(20,60);
        this.col=color(240);
    }

    show() {
        fill(this.col);
        ellipse(this.x,this.y, this.size, this.size);
    }
}





