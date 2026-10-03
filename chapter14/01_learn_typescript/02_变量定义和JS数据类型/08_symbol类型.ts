const s1 = Symbol("identity");
const s2 = Symbol("identity");//Typescript会自动推导类型，无须手动指定

const person = {
    [s1]: "程序员",
    [s2]: "老师"
};

console.log(person);
export { }