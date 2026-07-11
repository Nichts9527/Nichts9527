<template>
    <div class="about">
        About
        <button @click="btnClick">单击按钮 触发事件</button>
    </div>
</template>
<script>
import emitter from './eventbus';
export default {
    methods: {
        btnClick() {
            console.log("1.About页面的：单击按钮->触发全局why事件");
            emitter.emit("why", { name: "why", age: 18 });//参数1：事件名称。参数2：传递的数据
            console.log("2.About页面的：单击按钮->触发全局kobe事件");
            emitter.emit("kobe", { name: "kobe", age: 30 });

        }
    }
}
</script>