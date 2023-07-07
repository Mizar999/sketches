import * as P5 from "p5";
import { color1, color2 } from "./colors";
import { shape1, shape2 } from "./shapes";

class SketchManager {
    private mainP5: P5;
    private sketches: {[key: string]: (p5: P5) => void};

    constructor(id: string) {
        this.populateSketches();

        let select = document.getElementById(id) as HTMLSelectElement;
        let option;
        for(let key of Object.keys(this.sketches)) {
            option = document.createElement("option");
            option.text = key;
            select.add(option);
        }

        select.addEventListener("change", () => this.changeSketch(select.value));
    }

    private populateSketches() {
        this.sketches = {};
        this.sketches["Color Grid"] = color1;
        this.sketches["Color Shapes"] = color2;
        this.sketches["Simple Shapes"] = shape1;
        this.sketches["Shape Sketch"] = shape2;
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