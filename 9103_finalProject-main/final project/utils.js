let apple = [];
let scale = [];
let arc1 = [];
let arc2 = [];
let color1 = [];
let color2 = [];
let branches;//Setting variables and arrays

function setup() {
  colorMode(HSL);
  createCanvas(windowWidth, windowHeight);
  for (branches = 0; branches < 17; branches++) {
    apple[branches] = [];
    scale[branches] = [];
    arc1[branches] = [];
    arc2[branches] = [];
    color1[branches] = [];
    color2[branches] = [];//Set up an array of colours, apple numbers, branch numbers, apple divider angles, and apple sizes.
    let i = 0;
    for (i = 0; i < 17; i++) {
      scale[branches][i] = random(30, 70);
      arc1[branches][i] = random(-1 / 4 * PI, 1 / 4 * PI);
      arc2[branches][i] = random(3 / 4 * PI, 5 / 4 * PI);
      let hg = random(45, 90);
      let hr = random(0, 20);
      let s = random(80, 100);
      let l = random(60, 80);
      color1[branches][i] = color(hg, s, l);
      color2[branches][i] = color(hr, s, l);//Fill the array with random values for colour, angle of apple divider, size of apple
    }

  }

  
}

function outpuApple(branch, AppleNum, x, y) {
  apple[branch][AppleNum] = new Apple(x, y, scale[branch][AppleNum], arc1[branch][AppleNum], arc2[branch][AppleNum], branch, color1[branch][AppleNum], color2[branch][AppleNum], AppleNum);
  return apple[branch][AppleNum].draw();//Encapsulate the methods for generating apples in the class into functions for ease of use.
}

class Apple {//Defining the Apple Class
  constructor(xPosIn, yPosIn, scaleIn, arc1In, arc2In, branchNum, color1In, color2In, numIn) {
    this.color_1 = color1In;
    this.color_2 = color2In;
    this.xPos = xPosIn;
    this.yPos = yPosIn;
    this.scalePrm = scaleIn;
    this.arc_1 = arc1In;
    this.arc_2 = arc2In;
    this.branch = branchNum;
    this.num = numIn;

  }
  calculateDrawPos() {
    if (this.branch % 2 == 0) {

      this.arc_1 -= 1 / 2 * PI;
      this.arc_2 -= 1 / 2 * PI;
      this.branch += 1;//If branch number even, apple dividing line vertical, if odd, apple dividing line horizontal
    }

  }
  getColor() {

    if (Math.round(this.scalePrm) % 2 == 1) {
      let swap = this.color_1;
      this.color_1 = this.color_2;
      this.color_2 = swap;//red and green colours of the apple halves determined by the size of the apple
      this.scalePrm += 1;// lock the size of the apple to an even number after colouring.
    }

  }


  draw() {
    this.getColor();
    this.calculateDrawPos();//
    fill(this.color_1);
    //arc(200,200,50,50,1/3*PI,3/4*PI,OPEN);
    arc(this.xPos, this.yPos, this.scalePrm, this.scalePrm, this.arc_1, this.arc_2, OPEN);
    fill(this.color_2);
    arc(this.xPos, this.yPos, this.scalePrm, this.scalePrm, this.arc_2, this.arc_1, OPEN);//Drawing and colouring apples
    //arc(200,200,50,50,3/4*PI,1/3*PI,OPEN);
    

  }
}


