// 参数y是可选参数，y的类型可以为undefinded|number
function foo(x: number, y?: number) {
    console.log(x, y);
};
foo(20, 30)//这时y为30
foo(20)//这时y为undefined
export { }