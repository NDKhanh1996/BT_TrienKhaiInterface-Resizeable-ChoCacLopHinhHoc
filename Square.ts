import {Resizeable} from "./Resizeable";

class Square implements Resizeable{
    private _size: number;
    constructor(size: number) {
        this._size = size;
    }

    getSize(): number {
        return this._size;
    }

    setSize(value: number) {
        this._size = value;
    }
    resize(percent: number) {
       return this._size *=  percent
    }
}
let square = new Square(10)
console.log(square.resize(0.5))