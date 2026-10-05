function foo() { return "abc" };
function bar() { return 123 };
// 1.unknown类型：只能赋值给any和unknown类型
// 2.any类型：可以赋值给任意类型
let flag = true;
let result: unknown;//可接收类型
if (flag) {
    result = foo()//接收string类型
} else {
    result = bar()//接收number类型
}
console.log(result);


//下面两个赋值会报错，因为unknown类型只能赋值给any和unknown类型 
// let message: string = result;
// let num: number = result;
export { }
