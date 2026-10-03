let n1: null = null;
let n2: undefined = undefined;
let n3 = null;//Typescript会自动推导为any类型
let n4 = undefined;//Typescript会自动推导为any类型
console.log(n1, n2);
console.log(n3, n4);
export { }
