let o = 300;
let p = 300;

function setup() {
    let canvas = createCanvas(600, 600);
    canvas.parent('sketch');


    background(240,0);
    
fill(255);
   
}

function draw(){
    noStroke();
    fill(mouseX,0,mouseY);
ellipse(mouseX,mouseY, 80,80);


noFill();
strokeWeight(180);
stroke(10,0,86,12);

ellipse(width/2,height/2,700,700);
// strokeWeight(60);
// stroke(10,0,116,10);

// point(o,p);

// let randNum = floor(random(4));
//    if(randNum == 0){
//        o=o+3;
//    } else if(randNum == 1){
//     o=o-3;
// } else if(randNum == 2){
//     p=p+3;
// } else if(randNum == 3){
//     p=p-3;
// };


textSize(40);
noFill();
strokeWeight(3);
stroke(255);
rect(150,36,300,40);
strokeWeight(0);
fill(255);
    text("Recent Projects", 160, 70);
    textSize(28);
    text("Puzzle Arcade", 100,160);

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





