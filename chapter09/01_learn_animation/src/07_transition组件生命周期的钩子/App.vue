<template>
    <div class="app">
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
            @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave">
            <h4 v-if="isShow" style="border: 1px solid #ddd;width: 100px ;">Hello World</h4>
        </transition>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isShow: true
        }
    },
    methods: {
        beforeEnter(el) {
            console.log("beforeEnter");//在元素插入DOM之前被调用
        },
        // 参数一:el表示当前DOM对象。参数二:done表示动画结束的回调函数
        enter(el, done) {
            console.log("enter");//在元素被插入DOM之后的下一帧被调用
            done()
        },
        afterEnter(el) {
            console.log("afterEnter");//当进入过渡完成时调用
        },
        beforeLeave(el) {
            console.log("beforeLeave");//在leave钩子之前调用
        },
        leave(el) {
            console.log("leave");//在离开过渡开始时调用
        },
        afterLeave(el) {
            console.log("afterLeave");//在离开过渡完成，且元素已从DOM中移除时调用
        },
    },
}
</script>
