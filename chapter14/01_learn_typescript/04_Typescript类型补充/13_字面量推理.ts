type Method = 'GET' | 'POST';
function request(url: string, method: Method) { };
const options = {
    url: "https://www.coderwhy.org/abc",
    method: "POST"
};

// 参数二报错
// request(options.url, options.method);//options.method推导出了string类型，但需要是Method类型

// 方式一：使用类型断言as
request(options.url, options.method as Method);

// 方式二：为options指定类型
// type Request = {
//     url: string,
//     method: Method
// };
// const options: Request = {
//     url: "https://www.coderwhy.org/abc",
//     method: "POST"
// }

// 方式三：使用字面量推理 as const
// const options = {
//     url: "https://www.coderwhy.org/abc",
//     method: "POST"
// } as const;//将options对象的类型tuidaowei
export { }