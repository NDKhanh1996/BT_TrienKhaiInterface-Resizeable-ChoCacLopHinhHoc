import {Resizeable} from "./Resizeable";

class Circle implements Resizeable {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number): void {
        this._radius = value;
    }

    resize(): number {
        return this._radius * Math.random() * 10
    }
}

let circle: Circle = new Circle(10)
let circle1: Circle = new Circle(5)
let circle2: Circle = new Circle(8)

let cArr: Circle[] = [circle, circle1, circle2]

cArr.forEach((i) => {
    console.log(i)
    console.log(i.resize())
})