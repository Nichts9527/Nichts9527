interface IFoo {
    name: string
};
interface IFoo {
    age: number
};
// IFoo类型是上面两个IFoo接口的合并
const foo: IFoo = {
    name: "why",
    age: 18
}
// 类型别名不能重复
// type IBar = {
//     // 报错
//     name: string
// };

// type IBar = {
//     // 报错
//     age: number
// }
export { }