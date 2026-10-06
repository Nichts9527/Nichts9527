// y参数设默认值为20，y的类型可以为undefined或number
function foo(x: number, y: number = 20) {
    console.log(x, y);
};
foo(30);//这时y的值为20
export { }