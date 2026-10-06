type ThisType = { name: string };
function eating(this: ThisType, message: string) {
    // this报错
    console.log(this.name + "eating", message);
};
const info = {
    name: "why",
    eating: eating,//赋值一个eating函数
};
// 隐式绑定this
info.eating("哈哈哈");
// 使用call函数显式绑定this
eating.call({ name: "kobe" }, "呵呵呵");
export { }
