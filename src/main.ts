import * as P5 from "p5";
import { colorGrid, colorShapes } from "./colors";
import { simpleShapes, shapeSketch } from "./shapes";

class SketchManager {
    private mainP5: P5;
    private sketches: { [key: string]: (p5: P5) => void };

    constructor(id: string) {
        this.populateSketches();

        let select = document.getElementById(id) as HTMLSelectElement;
        let option;
        for (let key of Object.keys(this.sketches)) {
            option = document.createElement("option");
            option.text = key;
            select.add(option);
        }
        
        if (sessionStorage.getItem("selectedSketch")) {
            select.value = sessionStorage.getItem("selectedSketch");
            this.changeSketch(select.value);
        }

        select.addEventListener("change", () => {
            this.changeSketch(select.value);
            sessionStorage.setItem("selectedSketch", select.value);
        });
    }

    private populateSketches() {
        this.sketches = {
            "Color Grid": colorGrid,
            "Color Shapes": colorShapes,
            "Simple Shapes": simpleShapes,
            "Shape Sketch": shapeSketch
        };
    }

    private changeSketch(name: string) {
        if (this.mainP5 != null) {
            this.mainP5.remove();
        }

        if (this.sketches[name] !== undefined) {
            this.mainP5 = new P5(this.sketches[name]);
        } else {
            this.mainP5 = null;
        }
    }
}

new SketchManager("sketch-select");