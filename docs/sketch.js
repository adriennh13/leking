function setup() {
  createCanvas(400, 400);
  lebronImg = loadImage("lebron.jpeg");
  kingImg = loadImage("king.jpeg");
  lekingImg = loadImage("leking.jpeg");
  goatImg = loadImage("goat.jpeg");
  sunshineImg = loadImage("sunshine.jpeg")
}

function draw() {
  background(220);
  if(mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 200){
    image(lebronImg, 0, 0, 200, 200);
  }
  if(mouseX > 200 && mouseX<400  && mouseY > 0 && mouseY < 200){
    image(kingImg, 200, 0, 200, 200);
  }
  if(mouseX > 0 && mouseX < 200 && mouseY > 200 && mouseY < 400){
    image(lekingImg, 0, 200, 200, 200);
  }
  if(mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400){
    image(goatImg, 200, 200, 200, 200);
  }
  
  if (mouseIsPressed){
    image(sunshineImg, 0, 0, 400, 400);
  }
}