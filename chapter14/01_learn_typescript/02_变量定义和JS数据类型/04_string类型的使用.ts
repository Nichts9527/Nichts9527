// string类型表示
let message: string = "Hello World";
message = 'Hello TypeScript';

// 下面的Typescript都可以自动推导出对应标识符的类型，一般情况下可以不加声明
const name = "coder";
const age = 18;
const height = 1.88;
const info = `my name is ${name},age is ${age},height is ${height}`;
console.log(info);

export { }//export可以把该Typescript文件当成一个模块处理，防止与全局变量冲突（例如name变量）
