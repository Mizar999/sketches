import * as P5 from "p5";

const sketch = (p5: P5) => {
    var value = 0;
    var radius: number;
    var resolutions: number[] = [];

    p5.setup = () => {
        p5.createCanvas(800, 800);
        p5.noFill();
        p5.background(255);
        p5.strokeWeight(2);
        p5.stroke(0, 25);

        radius = -p5.width / 2;
        var counter = p5.int(p5.random(2, 8));
        while (counter > 0) {
            resolutions.push(p5.int(p5.random(3, 10)));
            --counter;
        }
    }

    p5.draw = () => {
        if (radius > (p5.width / 2)) {
            return;
        }

        p5.push();
        p5.translate(p5.width / 2, p5.height / 2);
        
        var resolution = p5.random(resolutions);
        var angle = p5.TAU / resolution;
        var x, y;

        p5.beginShape();
        for (var counter = 0; counter <= resolution; ++counter) {
            x = p5.cos(angle * counter) * radius;
            y = p5.sin(angle * counter) * radius;
            p5.vertex(x, y);
        }
        p5.endShape();

        value += p5.int(p5.random(-2, 4));
        radius = value - p5.width / 2;
        p5.pop();
    }
}

new P5(sketch);