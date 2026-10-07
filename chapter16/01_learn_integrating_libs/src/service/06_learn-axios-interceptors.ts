import axios from "axios";
const API_POST = 'https://httpbin.org/post';//测试POST请求的接口url

// axios的请求拦截器
axios.interceptors.request.use(
    // fn1:请求发送成功会执行的函数
    (config) => {
        console.log('请求成功的拦截');
        // 可进行统一操作，例如：为请求添加access_token，isLoading动画等
        if (config.headers) {
            config.headers['access_token'] = 'aabbccdd';
        };
        return config;
    },
    // fn2:请求发送失败会执行的函数
    (error) => {
        console.log('请求发送错误');
        return error;
    }
);

// axios的响应拦截器
axios.interceptors.response.use(
    // fn1:响应数据处理成功会执行的函数
    (response) => {
        console.log('响应数据处理成功');
        return response;
    },
    // fn2:响应数据处理失败会执行的函数
    (error) => {
        console.log('响应数据处理错误');
        return error;
    }
);

// 发起一个POST请求
axios.post(API_POST, { id: 100400 }).then((res) => {
    console.log('res.data:', res.data)//处理响应结果
});