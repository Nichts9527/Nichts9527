<template>
    <div class="setup-return" style="border: 1px solid #ddd;margin: 10px;">
        SetupReturn组件
        <h4>当前计数：{{ counter }}</h4>
        <button @click="increment">+1</button>
    </div>
</template>
<script>
export default {
    setup(props, context) {
        let counter = 100;//局部变量
        const increment = () => {
            // 局部函数，代替在methods中定义的方法
            counter++;
            console.log(counter);
        }
        // setup函数的返回值，返回值中的属性可直接在模版中使用
        return {
            counter:counter,//返回一个内部变量，供模版使用
            increment:increment//返回一个方法/函数，供模版使用
        }
    }
}
</script>