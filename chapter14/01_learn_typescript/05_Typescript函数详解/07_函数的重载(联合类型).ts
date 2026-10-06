// 函数重载，使用联合类型实现
function add(a1: number | string, a2: number | string) {
    if (typeof a1 === "number" && typeof a2 === "number") {
        // 类型缩小
        return a1 + a2;
    } else if (typeof a1 === "string" && typeof a2 === "string") {
        return a1 + a2;
    };
};
// 调用add函数，可以使字符串和数字类型相加
console.log(add(10, 20));
console.log(add('coder', 'why'));
export { }

