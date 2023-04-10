import {Resizeable} from "./Resizeable";

export class Rectangle implements Resizeable {
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
    getArea(): number{
        return this._height * this._width
    }
    getAreaAfter(percent:number):number{
        this.resize(percent)
        return this._height * this._width
    }

    resize(percent:number): void {
        this._width += this._width * percent/100
        this._height += this._height * percent/100
    }
}

// let rect: Rectangle = new Rectangle(4, 7)
// let rect1: Rectangle = new Rectangle(8, 2)
// let rect2: Rectangle = new Rectangle(10, 5)
// let rArr: Rectangle[] = [rect, rect1, rect2]
// rArr.forEach((i) => {
//     console.log('Before: ' + i.getArea())
//     console.log('After: ' + i.getAreaAfter(50))
// })
