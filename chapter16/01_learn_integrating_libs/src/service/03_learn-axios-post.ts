import axios from "axios";
const API_POST = 'https://httpbin.org/post';//测试POST请求的接口url

// 方式一：发起一个POST请求
axios.post(API_POST, { id: 100400 }).then((res) => {
    console.log('res.data:', res.data)//处理响应结果
});

// 方式二：发起一个POST请求
axios.request({
    url: API_POST,
    method: 'post',
    data: { id: 100400 }
}).then((res) => {
    console.log('res.data:', res.data)//处理响应结果
});