import{Resizeable} from "./Resizeable";

class Circle implements Resizeable{
    private _radius: number;
    constructor(radius: number) {
        this._radius = radius;
    }

    getRadius():number {
        return this._radius;
    }

    setRadius(value: number): void {
        this._radius = value;
    }

    resize(percent: number) : number {
        return this._radius = this._radius * percent
    }
}
let circle = new Circle(10)

console.log(circle.resize(0.5))