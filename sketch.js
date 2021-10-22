
function setup() {
    let canvas = createCanvas(windowWidth+200, windowHeight+200);
    canvas.position(-200, -200);
    // canvas.style.z-index(-10);
    // background(0);
    frameRate(60);

  }
  
  function draw() {
    // blendMode(REMOVE);
    stroke(220*sin(mouseX/600*PI), 60, 250, 80);
    strokeWeight (0);
    if (mouseIsPressed) {
      // blendMode(REMOVE);
      ellipse(mouseX, mouseY, 80);
      erase(255);
      // fill(127, 255, 0, 0.2);
    }
    else {
      // blendMode(OVERLAY);
      fill(220*sin(mouseX/600*PI), 250, 250*cos(mouseY/300*PI), 100);
      ellipse(mouseX, mouseY, random(20,50));
      noErase();
    }
  }
  
  // function draw() {
  //   blendMode(REMOVE);
  //   noStroke();
  //   fill(250,80,80, 120);
  //   if (mouseIsPressed === true) {
  //   ellipse(mouseX, mouseY, 50);
  // }
  // }
     
  
     
  