import axios from "axios";
const API_POST = '/post';//测试POST请求的接口url

// axios的全局配置，将作用于每个请求
axios.defaults.baseURL = 'https://httpbin.org';//设置axios的默认请求url
axios.defaults.timeout = 10000;

axios.post(API_POST, { id: 100400 },{
    // 最终的URL = baseRUL + API_POST
    // 每个请求单独配置，优先级最高
    timeout: 5000,//比全局配置优先级高
    headers: {
        'Content-Type': 'application/json',
        'access_token': 'aabbccdd'
    }
}).then((res) => {
    console.log('res.data:', res.data)//处理响应结果
});