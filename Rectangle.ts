import {Resizeable} from "./Resizeable";

class Rectangle implements Resizeable {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(value: number): void {
        this._width = value;
    }

    getHeight(): number {
        return this._height;
    }

    setHeight(value: number): void {
        this._height = value;
    }

    resize(): string {
        return `${this._width * Math.random() * 10} and ${this._height * Math.random() * 10}`
    }
}

let rect: Rectangle = new Rectangle(4, 7)
let rect1: Rectangle = new Rectangle(8, 2)
let rect2: Rectangle = new Rectangle(10, 5)
let rArr: Rectangle[] = [rect, rect1, rect2]
rArr.forEach((i) => {
    console.log(i)
    console.log(i.resize())
})