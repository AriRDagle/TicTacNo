var ticOne = '';

function setup() {
  // put setup code here
  createCanvas (500,500);
}

function draw() {
  // put drawing code here
  background("#1BE7FF");//light blue
  stroke("#E4FF1A");//yellow
  strokeWeight(5);
  //grid
  line(191.66,75,191.66,425);//X1,Y1,X2,Y2
  line(308.33,75,308.33,425);
  line(75,191.66,425,191.66);
  line(75,308.33,425,308.33);
  line(75,75,75,425);
  line(75,75,425,75);
  line(425,425,75,425);
  line(425,75,425,425);
  //header
  fill("#FF5714");//brick red
  stroke("#FF5714");
  textSize(60);
  textFont("Courier New");
  text('TIC TAC NO.',60,55);
  //instructions
  noStroke();
  textSize(21.5);
  text('→ press in order →',123.5,447);
  text('1-Q-2-W-3-E-4-R-5-T-6-Y-7-U-8-I-9-O-0',10,470);
  text('SPACE = Clear Board',115,493);
  //rectangles
  fill("#F866C4");//pink
  stroke("#E4FF1A");//yellow
  rect(83,83,100,100);//rect.1
  fill("#957FEF");//violet
  rect(200,83,100,100);//rect.2
  fill("#2CF6B3");//light teal
  rect(316.33,83,100,100);//rect.3
  fill("#F4845F");//burnt peach
  rect(83,200,100,100);//rect.4
  fill("#FF6978");//watermelon
  rect(200,200,100,100);//rect.5
  fill("#2DC2BD");//grey blue
  rect(316.33,200,100,100);//rect.6
  fill("#F4989C");//light peach
  rect(83,316.33,100,100);//rect.7
  fill("#DAC4F7");//lavender
  rect(200,316.33,100,100);//rect.8
  fill("#7CCC77");//olive green
  rect(316.33,316.33,100,100);//rect.9
  //Variable letters
  fill("#000000FF");//black=all variable letters
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,95,290);//Letter.1
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,95,173.33);//letter.2
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,209,173.33);//letter.3
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,327,173.33);//letter.4
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,209,290);//letter.5
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,209,406);//letter.6
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,95,406);//letter.7
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,327,406);//letter.8
  fill("#000000FF");
  noStroke();
  textSize(135);
  textFont("Courier New");
  text(ticOne,327,290);//letter.9
 }
 //Letter commands
function keyPressed(){
  if (keyCode === 49){//X
    ticOne = 'X';
  } else if (keyCode === 81){//O
    ticOne = 'O';
  } else if (keyCode === 50){//I
    ticOne = 'I';
  } else if (keyCode === 87){//G
    ticOne = 'G';
  } else if (keyCode === 51){//I
    ticOne = 'I';
  } else if (keyCode === 69){//V
    ticOne = 'V';
  } else if (keyCode === 52){//E
    ticOne = 'E';
  } else if (keyCode === 82){//U
    ticOne = 'U';
  } else if (keyCode === 53){//P
    ticOne = 'P';
  } else if (keyCode === 84){//T
    ticOne = 'T';
  } else if (keyCode === 54){//H
    ticOne = 'H';
  } else if (keyCode === 89){//I
    ticOne = 'I';
  } else if (keyCode === 55){//S
    ticOne = 'S';
  } else if (keyCode === 85){//I
    ticOne = 'I';
  } else if (keyCode === 56){//S
    ticOne = 'S';
  } else if (keyCode === 73){//H
    ticOne = 'H';
  } else if (keyCode === 57){//A
    ticOne = 'A';
  } else if (keyCode === 79){//R
    ticOne = 'R';
  } else if (keyCode === 48){//D
    ticOne = 'D';
  } else if (keyCode === 32){//Clear board
    ticOne = '';
  }
}

