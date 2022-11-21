import * as P5 from "p5";

const sketch = (p5: P5) => {
    p5.setup = () => {
        p5.createCanvas(640, 480);

        p5.ellipse(50, 50, 80, 80);
        p5.point(100, 60);

        p5.fill(128);
        p5.strokeWeight(1);
        p5.ellipse(40, 50, 60, 60);
        p5.rect(50, 50, 40, 20);

        p5.translate(20, 8);
        drawStar();
        p5.translate(80, 75);
        drawStar();
    }

    p5.draw = () => {
    }

    function drawStar() {
        p5.line(0, -10, 0, 10);
        p5.line(-8, -5, 8, 5);
        p5.line(-8, 5, 8, -5);
    }
}

new P5(sketch);