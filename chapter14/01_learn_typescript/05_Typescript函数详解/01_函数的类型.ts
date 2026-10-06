// 1.add函数，未编写函数类型
// const add = (a1: number, a2: number) => {
//     return a1 + a2;
// }

// 2.为add函数编写函数类型
// 使用类型别名优化函数
type AddFnType = (num1: number, num2: number) => number;
const add: AddFnType = (a1: number, a2: number) => {
    return a1 + a2;
}
export { }

// fn函数作为bar函数参数时，也为fn函数编写类型
type FooFnType = () => void;
function bar(fn: FooFnType) {
    fn();
};