import axios from "axios";
axios.all([
    axios.get('https://httpbin.org/get', { params: { name: 'why', age: 18 } }),
    axios.post('https://httpbin.org/post', { data: { name: 'why', age: 18 } })
]).then((res) => {
    console.log('res.data:', res[0].data);//处理第一个响应结果
    console.log('res.data:', res[1].data);//处理第二个响应结果
});