
abstract class Shape {
    protected length: number;
    protected breadth: number;

    constructor(length: number, breadth: number) {
        this.length = length;
        this.breadth = breadth;
    }

    public abstract getAreaAbstract(): number;  // abstract method
}

class Rectangle extends Shape {
    public getAreaAbstract(): number { //Abstract method implementation
        return this.length * this.breadth;
    }
}

class Triangle extends Shape {
    public getAreaAbstract(): number { // Abstract method implementation
        return 0.5 * this.length * this.breadth;
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(length: number, breadth: number, radius: number) {
        super(length, breadth);
        this.radius = radius;
    }

    public getAreaAbstract(): number {
        return 3.14 * this.radius * this.radius;
    }
}

const rObj = new Rectangle(12, 12);
const area = rObj.getAreaAbstract();
console.log("Rectangle Area", area);

const tObj = new Triangle(3, 6);
const tArea = tObj.getAreaAbstract();
console.log("Triangle Area", tArea);

const cObj = new Circle(0, 0, 9)
const cArea = cObj.getAreaAbstract();
console.log("Circle Area", cArea);

