import axios from 'axios';
const API_GET = 'https://httpbin.org/get';

// 定义GET/POST请求响应res.data对象的类型
interface IResponseData {
    args: any;
    headers: any;
    origin: string;
    url: string;
};

// 指定响应结果（res.data）的类型为IResponseData
axios.get<IResponseData,any>(API_GET + '?ID=100400').then((res) => {
    //Typescript会自动推导res类型为AxiosResponse;res.data类型为IResponseData
    console.log('res.data:', res.data)
});

// 指定响应结果(res.data)的类型为IResponseData
axios.request<IResponseData,any>({
    url: API_GET + '?ID=100400',
    method: 'get'
}).then((res) => {
    console.log('res.data:', res.data)
});