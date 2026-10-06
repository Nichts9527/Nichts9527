interface IPerson {
    name: string;
};
// const info: IPerson = {
//     name: "why",//ok
//     age: 18//报错
// };

const info = {
    name: "why",//ok
    age: 18//ok
};
// 字面量赋值。Typescript会擦除（freshness）IPerson类型之外的类型检查
const p: IPerson = info;
export { }

function printInfo(person: IPerson) {
    console.log(person);
};
// 将字面量对象直接传给函数的参数
printInfo({
    name: "why",
    // age: 18//报错
});
printInfo(info);