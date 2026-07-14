<template>
    <div style="border: 1px solid #ddd;margin: 8px;">
        <!-- 使用v-focus指令 -->
        <input type="text" v-focus>
    </div>
</template>
<script>
export default {
    // directives: {
    //     // 自定义v-focus局部指令
    //     focus: {
    //         mounted(el, bindings) {
    //             // 自定义指令的生命周期mounted
    //             console.log("focus mounted");
    //             el.focus();//el是input元素对象
    //         }
    //     }
    // }
}
</script>