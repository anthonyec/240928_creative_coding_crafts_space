import P5 from "p5";

import "./style.css";

function sketch(p5: P5) {
  p5.setup = () => {
    p5.createCanvas(800, 600);

    p5.stroke(255, 0, 0);
    p5.strokeWeight(2);
    p5.noCursor();
  };

  p5.draw = () => {
    p5.background("white");
    p5.circle(p5.mouseX, p5.mouseY, 50 + (p5.sin(p5.frameCount / 50) * 100));
  };
}

new P5(sketch);
