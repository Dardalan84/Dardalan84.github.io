

var dots = [];
var baddots = [];
var stars = [];
let badcounter = 0;
let goodcounter = 0;
let playing = true;
function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch');
    background(255);
    for (var i = 0; i < 200; i++) {
        stars[i] = new Star();
    }
    for (var i = 0; i < 600; i++) {
        dots[i] = new Dot();
    }
    for (var k = 0; k < 28; k++) {
        baddots[k] = new Baddot();
    }
    
}

function draw() {
 if(playing === true){
     fill(255);
    // for (var i = 0; i < stars.length; i++) {
    //     stars[i].draw();
     
    // }
    for (var j = 0; j < dots.length; j++) {
        dots[j].show();
    }
    // for (var k = 0; k < baddots.length; k++) {
    //     baddots[k].show();
    // }
 }
}

function mousePressed() {
    for (var j = 0; j < dots.length; j++) {
        dots[j].click();
    }
    fill(0);
    text("VS Code supports multiple cursors for fast simultaneous edits. You can add secondary cursors (rendered thinner) with Alt+Click. Each cursor operates independently based on the context it sits in. A common way to add more cursors is with ⌥⌘↓ or ⌥⌘↑ that insert cursors below or above.",100,100)

}


function keyPressed() {
   // ellipse(200,200,50,50);
    if(playing===false){
        playing = true;
        badcounter=0;
        goodcounter=0;
        background(0);
    } else {
        playing = false;
    }
}


class Dot {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.col = color(255);
        this.size = random(30, 50);
        this.r = this.size / 2
    }
    show() {
        noStroke();
       fill(this.color);
       noStroke();
        ellipse(this.x, this.y, this.size/8, this.size/8);
        fill(255);
        textAlign(CENTER);
        if (this.x <= width / 2 && this.y <= height / 2) {
            //text('bob', this.x, this.y);
        } else {
           // text('jim', this.x, this.y)
        }
    }

    click() {
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.r) {
            goodcounter++;
            this.col = color(0, mouseX, mouseY);
            fill(this.col);
            ellipse(this.x, this.y, this.size, this.size);
        }
        
    }
}

class Baddot {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.col = color(0);
        this.size = random(30, 50);
        this.r = this.size / 2
    }
    show() {
       fill(255,random(180,255),random(180,255));
        ellipse(this.x, this.y, this.size/8, this.size/8);
        fill(80);
        textAlign(CENTER);
      
    }

    click() {
        let d = dist(this.x, this.y, mouseX, mouseY);
        if (d < this.r-5) {
            badcounter++;
            this.col = color(180, 0, 0);
            fill(this.col);
            ellipse(this.x, this.y, this.size, this.size);
            fill(255);
            // if (this.x <= width / 2 && this.y <= height / 2) {
            //     text('avoid', this.x, this.y);
            // } else {
            //     text('avoid', this.x, this.y)
            // }
        }
        
    }
}

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(.5, 4);
    }
    draw() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size)
    }
}