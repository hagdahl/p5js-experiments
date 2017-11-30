//var colmod = keyTyped();
var fillerR,fillerG,fillerB;
var colmod;

function setup() {
createCanvas(windowWidth, windowHeight);
background(228);
colorMode(RGB); //default
colmod = "RGB"
}

function draw() {

// Textbox with info
fill(255);
noStroke();
rect((windowWidth/2)-110,0,220,25)
fill(0);
textSize(12);
text("Press R,H or L to change colormode",(windowWidth/2)-100,15)
};

function mouseMoved() {

  fillerR = round(mouseX/windowWidth*255)
  fillerG = round(mouseY/windowHeight*255)
  fillerB = abs(fillerG-255)

  fill(fillerR,fillerG,fillerB,255);
  noStroke();
  ellipse(mouseX, mouseY, 80, 80)


  fill(128,255);
  noStroke();
  ellipse(windowWidth/2, windowHeight/2, 80, 80)

  fill(0,255);
  textSize(12);
  text(colmod+":\n"+fillerR+",\n"+fillerG+",\n"+fillerB,(windowWidth/2)-10,(windowHeight/2)-20);

};

function keyTyped() {
  if (key === 'h') {
    colorMode(HSB);
    colmod = "HSB";
  } else if (key === 'r') {
    colorMode(RGB);
    colmod = "RGB";
      } else if (key === 'l') {
    colorMode(HSL);
    colmod = "HSL";
  } else {
     return false;
 }
}
