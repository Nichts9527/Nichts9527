// 在Point类上定义T类型变量
class Point<T> {
    X: T
    Y: T
    Z: T
    constructor(X: T, Y: T, Z: T) {
        this.X = X;
        this.Y = Y;
        this.Z = Z
    };
};

// Typescript会自动推导T类型变量的具体类型
const p1 = new Point("1.33.2", "2.22.3", "4.22.1");
// 向Point类的T类型变量传递具体的string类型
const p2 = new Point<string>("1.33.2", "2.22.3", "4.22.1");
const p3: Point<string> = new Point("1.33.2", "2.22.3", "4.22.1");
