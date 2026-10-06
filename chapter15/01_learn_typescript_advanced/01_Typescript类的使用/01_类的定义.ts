// 定义一个Person类
class Person {
    // 定义属性，需初始化，否则编译报错
    name: string
    age: number
    // 添加构造器，对属性进行初始化
    constructor(name: string, age: number) {
        this.name = name//属性初始化
        this.age = age
    }
    // 定义方法
    eating() {
        console.log(this.name + "eating");
    }
};
const p = new Person("why", 18);//新建一个类，传递name和age
console.log(p.name, p.age);//访问对象的属性
p.eating();
export { }
