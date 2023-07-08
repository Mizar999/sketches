import * as P5 from "p5";

export const colorGrid = (p5: P5) => {
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

export const colorShapes = (p5: P5) => {
    var values: { x: number, y: number, vertices: number, radius: number }[] = [];

    p5.setup = () => {
        p5.createCanvas(800, 800);
        p5.noStroke();
        p5.colorMode(p5.HSB, 360, p5.width, p5.height);

        for (var counter = p5.random(10, 25); counter >= 0; --counter) {
            var radius = p5.random(50, 100);
            values.push({
                x: p5.random(radius, p5.width - radius),
                y: p5.random(radius, p5.height - radius),
                vertices: p5.random([6, 12, 24, 45, 90, 180, 360]),
                radius: radius
            });
        }
    }

    p5.draw = () => {
        p5.background(360, 0, p5.height);
        values.forEach((value) => {

            p5.beginShape(p5.TRIANGLE_FAN);
            p5.vertex(value.x, value.y);

            var step = 360 / value.vertices;
            for (var degree = 0; degree <= 360; degree += step) {
                p5.fill(p5.int(degree), p5.mouseX, p5.mouseY);
                p5.vertex(
                    value.x + p5.cos(p5.radians(degree)) * value.radius,
                    value.y + p5.sin(p5.radians(degree)) * value.radius
                );
            }

            p5.endShape();
        });
    }
}