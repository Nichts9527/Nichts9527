<!--在render函数中使用h函数  -->
<!-- <script>
import { h } from "vue";//导入h函数
export default {
    render() {
        // 在render函数中使用h函数
        // 下面等价于创建：<h4 class = "title">RenderExample组件</h4>元素
        return h("h4", { class: "title" }, "RenderExample组件")
    }
}
</script> -->



<!-- 在setup函数中使用render函数 -->
<script>
import { h } from "vue";
export default {
    setup(props, context) {
        // 在setup函数中使用h函数，return需要返回一个函数
        return () => h("h4", { class: "title" }, "RenderExample组件")
    }
}
</script>
<style scoped>
.title {
    text-decoration: underline;
}
</style>