import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Square} from "./Square";

let circle: Circle = new Circle(10);
let rect: Rectangle = new Rectangle(5,10);
let square: Square = new Square(10);

let arr: (Circle | Rectangle | Square)[] = [circle,rect,square];

arr.forEach((i) => {
    console.log('Before: ' + i.getArea())
    console.log('After: ' + i.getAreaAfter(50))
})