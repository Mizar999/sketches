import * as P5 from "p5";

export const simpleShapes = (p5: P5) => {
    p5.setup = () => {
        p5.createCanvas(640, 480);
        p5.noLoop();
    }

    p5.draw = () => {
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

    function drawStar() {
        p5.line(0, -10, 0, 10);
        p5.line(-8, -5, 8, 5);
        p5.line(-8, 5, 8, -5);
    }
}

export const shapeSketch = (p5: P5) => {
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

        p5.noLoop();
    }

    p5.draw = () => {
        p5.push();
        p5.translate(p5.width / 2, p5.height / 2);

        var x, y;
        while (radius <= (p5.width / 2)) {   
            var resolution = p5.random(resolutions);
            var angle = p5.TAU / resolution;
            
            p5.beginShape();
            for (var counter = 0; counter <= resolution; ++counter) {
                x = p5.cos(angle * counter) * radius;
                y = p5.sin(angle * counter) * radius;
                p5.vertex(x, y);
            }
            p5.endShape();
            
            value += p5.int(p5.random(-2, 4));
            radius = value - p5.width / 2;
        }

        p5.pop();
    }
}