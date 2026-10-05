// 为参数加上类型注释num1:number,num2:number
// 为返回值加上类型注释():number
function sum(num1: number, num2: number): number {
    return num1 + num2
};
sum(123, 321);
export { }

// 当调用sum函数时，如果传入的参数类型或者数量不正确，就会报错
// sum(123);
// sum('123','321')
