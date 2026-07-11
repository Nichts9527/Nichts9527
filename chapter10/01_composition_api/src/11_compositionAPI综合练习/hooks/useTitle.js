import { ref, watch } from "vue";
//这次用匿名函数，该函数需要接受一个参数
export default function (title = "默认的title") {
    const titleRef = ref(title);
    // 监听titleRef变化，一旦被修改就更新
    watch(titleRef, (newValue, oldValue) => {
        document.title = newValue;
    }, {
        immediate: true //回调函数先执行一次
    })
    return titleRef;
};