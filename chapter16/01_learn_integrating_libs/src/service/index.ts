import HYRequest from "./request";//导入HYRequest类
let BASE_URL = 'https://httpbin.org';//默认基础的URL
const TIME_OUT = 10000;//默认超时时间

// 创建HYRequest实例对象
const hyRequest = new HYRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
});
export default hyRequest;//导出hyRequest实例对象