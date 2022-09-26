let o = 300;
let p = 300;

function setup() {
    let canvas = createCanvas(500, 500);
    canvas.parent('sketch');

}

function draw() {
    noStroke();
    fill(mouseX, 0, mouseY);
    ellipse(mouseX, mouseY, random(40, 50), random(40, 50));
    noFill();
    strokeWeight(160);
    stroke(10, 0, 86, 12);

    ellipse(width / 2, height / 2, 600, 600);



    textSize(40);
    noFill();
    strokeWeight(3);
    stroke(255);
    strokeWeight(0);
    fill(255);


}

function mousePressed() {
    noStroke();
    fill(10, 0, 116);
    ellipse(width/2, height/2, 800, 800);

}

class Hole {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(20, 60);
        this.col = color(240);
    }

    show() {
        fill(this.col);
        ellipse(this.x, this.y, this.size, this.size);
    }
}





