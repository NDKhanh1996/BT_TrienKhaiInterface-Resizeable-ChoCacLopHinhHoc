import {Resizeable} from "./Resizeable";

class Square implements Resizeable {
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

    resize(): number {
        return this._size * Math.random() * 10
    }
}

let square: Square = new Square(10)
let square1: Square = new Square(6)
let square2: Square = new Square(3)
let square3: Square = new Square(5)

let sArr: Square[] = [square, square1, square2, square3]
sArr.forEach((i) => {
    console.log(i)
    console.log(i.resize())
})