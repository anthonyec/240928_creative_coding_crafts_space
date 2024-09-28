import P5 from "p5";

import "./style.css";

function sketch(p5: P5) {
  console.log("HELLO", p5);

  p5.setup = () => {
    p5.createCanvas(800, 600);

    // p5.background("red")

    p5.stroke(255, 255, 0);
    p5.line(30, 20, 200, 200);
  };

  p5.draw = () => {};
}

new P5(sketch);
