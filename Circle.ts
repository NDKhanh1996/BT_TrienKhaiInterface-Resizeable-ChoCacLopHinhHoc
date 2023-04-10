import {Resizeable} from "./Resizeable";

export class Circle implements Resizeable {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    getRadius(): number {
        return this._radius;
    }
    getArea(): number{
        return this._radius * this._radius * Math.PI
    }
    getAreaAfter(percent:number):number{
        this.resize(percent)
        return this._radius * this._radius * Math.PI
    }

    setRadius(value: number): void {
        this._radius = value;
    }

    resize(percent:number): void {
        this._radius += this._radius * percent/100
    }
}

// let circle: Circle = new Circle(10)
// let circle1: Circle = new Circle(5)
// let circle2: Circle = new Circle(8)
//
// let cArr: Circle[] = [circle, circle1, circle2]
//
// cArr.forEach((i) => {
//     console.log('Before: ' + i.getArea())
//     console.log('After: ' + i.getAreaAfter(50))
// })