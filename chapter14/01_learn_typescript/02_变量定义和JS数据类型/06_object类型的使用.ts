// object类型表示。但是不推荐使用，因为推导不出明确的属性
// const info: object = {
//     name: "why",
//     age: 18
// }

// Typescript会自动进行类型推导（推荐）
const info = {
    name: "why",
    age: 18
}
console.log(info.name);
export { }
