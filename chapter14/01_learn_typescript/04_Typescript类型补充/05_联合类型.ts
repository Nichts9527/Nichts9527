// 1.将参数id指定为联合类型:number|string|boolean
function printID(id: number | string | boolean) {
    console.log("你的id是:", id);
};
printID(123);
printID("abc");
printID(true);
export { }