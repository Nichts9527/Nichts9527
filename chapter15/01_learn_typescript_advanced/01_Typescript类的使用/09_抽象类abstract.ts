// 抽象类Shape
abstract class Shape {
    abstract getArea(): number;//抽象方法，没有具体实现
};

class Reactangle extends Shape {
    // 继承抽象类
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        super();//在类的继承中，构造器必须调用super函数
        this.width = width;
        this.height = height;
    };
    getArea(): number {
        // 实现抽象类中的getArea抽象方法
        return this.width * this.height
    }
};
class Circle extends Shape {
    private r: number;
    constructor(r: number) {
        super();
        this.r = r;
    };
    getArea(): number {
        // 实现抽象类中的getArea抽象方法
        return this.r * this.r * 3.14
    }
};
function makeArea(shape: Shape) {
    return shape.getArea();//多态的应用
};

const rectangle = new Reactangle(20, 30);
const circle = new Circle(10);
console.log(makeArea(rectangle));
console.log(makeArea(circle));
export { }

