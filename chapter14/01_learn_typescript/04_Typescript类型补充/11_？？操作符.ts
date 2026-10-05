let message: string | null = 'Hello World';
// 以前的方式是使用三元运算符判空，赋默认值(会判断null、undefined、false为假)
const content1 = message ? message : "你好啊，李银河1";

// 使用||操作符判空，赋默认值(会判断null、undefined、false为假)
const content2 = message || "你好啊，李银河2";

// 使用？？操作符判空，赋默认值(只判断null或undefined为假)
const content3 = message ?? "你好啊，李银河3";
console.log(content1, content2, content3);
export { }
