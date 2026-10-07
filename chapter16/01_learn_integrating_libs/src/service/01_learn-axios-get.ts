import axios from "axios";
const API_GET = "https://httpbin.org/get";//测试GRT请求的URL

// 方式一：发起一个get请求
axios.get(API_GET + '?ID=100400')
    .then((response) => {
        console.log(response.data);//处理响应结果
    })

// 方式二：发起一个get请求
axios.get(API_GET, {
    params: {
        ID: 100400
    }
})
.then((response) => {
    console.log(response.data);//处理响应结果
})

// 方式三：发起一个get请求
axios.request({
    url: API_GET,
    method: 'get',
    params: {
        ID: 100400
    }
})
.then((response) => {
    console.log(response.data);//处理响应结果
})