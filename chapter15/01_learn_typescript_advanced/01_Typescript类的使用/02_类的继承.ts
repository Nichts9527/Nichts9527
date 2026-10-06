class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating(): void {
        console.log("eating");
    }
};
// Student继承Person
class Student extends Person {
    sno: number;
    constructor(name: string, age: number, sno: number) {
        super(name, age)//super调用父类的构造器
        this.sno = sno
    };
    studying(): void {
        console.log("studying");
    };
    // 重写父类的方法
    eating(){
        console.log("student eating");
        super.eating();//super调用父类的eating方法
    }
}

const stu = new Student('why', 18, 10100);
console.log(stu.name, stu.age);//访问继承父亲的属性
stu.eating();//调用继承父亲的方法
export { }