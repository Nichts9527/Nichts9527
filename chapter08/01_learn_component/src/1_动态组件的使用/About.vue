<template>
    <div>
        About组件
        <button @click="counter++">单击递增：{{ counter }}</button>
    </div>
</template>
<script>
export default {
    name: "about",
    data() {
        return {
            counter: 0
        }
    },
    created() {
        console.log("about created");
    },
    unmounted() {
        console.log("about unmounted");
    },
    // 下面是Keep-alive缓存组件实例的两个生命周期函数
    activated() {
        console.log("about activated");//组件显示时回调

    },
    deactivated() { 
        console.log("about deactivated");//组件隐藏时回调
        
    }
}
</script>