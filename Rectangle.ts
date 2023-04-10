import {Resizeable} from "./Resizeable";

class Rectangle implements Resizeable{
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
    resize(percent: number): string {
        return `${this._width *= percent} and ${this._height *= percent}`
    }
}
let rect = new Rectangle(10, 5)
console.log(rect.resize(0.5))