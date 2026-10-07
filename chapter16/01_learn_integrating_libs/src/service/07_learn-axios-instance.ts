import axios from "axios";
const API_POST = '/post';//测试POST请求的接口url

// 创建一个axios实例.下面是该实例的默认配置
const instance = axios.create({
    baseURL: 'https://httpbin.org',//设置axios的默认请求url
    timeout: 10000,//设置请求超时时间
});

instance.post(API_POST, { id: 100400 },{
    // 每个请求单独配置，优先级最高
    timeout: 5000,//比axios实例的配置优先级高
    headers: {
        'Content-Type': 'application/json',
        'access_token': 'aabbccdd'
    }
}).then((res) => {
    console.log('res.data:', res.data)//处理响应结果
})