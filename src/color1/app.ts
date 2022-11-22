import * as P5 from "p5";

const sketch = (p5: P5) => {
    var stepX, stepY;

    p5.setup = () => {
        p5.createCanvas(800, 640);
        p5.noStroke();
        p5.colorMode(p5.HSB, p5.width, p5.height, 100);
    }
    
    p5.draw = () => {
        stepX = p5.mouseX;
        if (stepX < 2) {
            stepX = 2;
        }
        stepY = p5.mouseY;
        if (stepY < 2) {
            stepY = 2;
        }

        for (var gridY = 0; gridY < p5.height; gridY += stepY) {
            for (var gridX = 0; gridX < p5.width; gridX += stepX) {
                p5.fill(gridX, p5.height - gridY, 100);
                p5.rect(gridX, gridY, stepX, stepY);
            }
        }
    }
}

new P5(sketch);