import * as P5 from "p5";
import { color1, color2 } from "./colors";
import { shape1, shape2 } from "./shapes";

class SketchManager {
    private mainP5: P5;
    private sketches: {[key: string]: (p5: P5) => void};
    private keys: string[];
    private index: number;

    constructor(id: string) {
        this.populateSketches();
        this.index = 0;
        this.keys = Object.keys(this.sketches);

        let button = document.getElementById(id);
        button.addEventListener("click", (e: Event) => {
            this.changeSketch(this.keys[this.index]);
            ++this.index;
            if (this.index >= this.keys.length) {
                this.index = 0;
            }
        });
    }

    private populateSketches() {
        this.sketches = {};
        this.sketches["color1"] = color1;
        this.sketches["color2"] = color2;
        this.sketches["shape1"] = shape1;
        this.sketches["shape2"] = shape2;
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

new SketchManager("change-sketch");