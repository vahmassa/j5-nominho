function setup() {
    createCanvas(500, 500);
    background("white")
  }
  
  function draw() {
    stroke("maroon");
    fill("darkblue");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 10, 25);
    }
  }
  