// 参数message是可选的，值可能为undefin或string
// function printMessageLength(message?: string) {
//     console.log(message?.length);//编译报错
// };
// printMessageLength("coder")

function printMessageLength(message?: string) {
    // 使用if进行非空判断
    // if (message) {
    //     console.log(message.length);
    // }
    // 使用非空类型断言。例如，message为undefined时，运行会报错，因为跳过了Typescript在编译阶段对它的检测
    console.log(message!.length);//这里断言message一定有值
};
printMessageLength("coder")