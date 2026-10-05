// 1.类型断言as(案例1)
// const myEl = document.getElementById("my-img");
// 报错：Property 'src' does not exist on type 'HTMLElement'
// myEl.src = "图片地址"
const myEl = document.getElementById("my-img") as HTMLImageElement;
myEl.src = "图片地址"//不会报错。因为明确断定myEl是HTMLImageElement

// 2.类型断言as(案例2)
class Person { };
class Student extends Person {
    studying() { }
};
function sayHello(p: Person) {
    // 使用类型断言as，将p断言为Student
    (p as Student).studying()//可以调用studying方法
};
const stu = new Student();
sayHello(stu);

// 3.类型断言as(案例3)
const message = "Hello World";
// const num1:number = message//报错
const num2: number = (message as unknown) as number//未报错
const num3: number = (message as any) as number//未报错
console.log(num2, num3);
export { }


