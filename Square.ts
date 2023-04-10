import {Resizeable} from "./Resizeable";

export class Square implements Resizeable {
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
    getArea(): number{
        return this._size * this._size
    }
    getAreaAfter(percent:number):number{
        this.resize(percent)
        return this._size * this._size
    }

    resize(percent:number): void {
        this._size += this._size * percent/100
    }
}

// let square: Square = new Square(10)
// let square1: Square = new Square(6)
// let square2: Square = new Square(3)
// let square3: Square = new Square(5)
//
// let sArr: Square[] = [square, square1, square2, square3]
//
// sArr.forEach((i) => {
//     console.log('Before: ' + i.getArea())
//     console.log('After: ' + i.getAreaAfter(50))
// })