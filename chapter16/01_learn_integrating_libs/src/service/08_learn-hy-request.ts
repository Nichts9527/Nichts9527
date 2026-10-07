import hyRequest from "./index";
// 定义响应res.data对象的类型
interface IResponseData {
    args: any;
    headers: any;
    origin: string;
    url: string;
    data: any;
}

// 发起网络请求，<IResponseData>用于指定res.data对象的类型
hyRequest.request<IResponseData>({
    url: '/get',
    method: "get"
}).then((res) => {
    console.log(res.data);//Typescript会自动推导出res.data的类型为IResponseData

});