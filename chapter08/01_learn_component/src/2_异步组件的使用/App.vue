<template>
    <div class="app">
        App组件
    </div>
</template>
<script>
// import { sum } from './utils/math';
import("./utils/math").then(res => {
    //使用import函数导入math.js模块，导包时可省略拓展名
    console.log(res.sum(20, 30));
})
export default {}
</script>