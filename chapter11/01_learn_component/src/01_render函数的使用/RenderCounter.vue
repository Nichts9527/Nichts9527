<script>
import { h } from "vue";
export default {
    data() {
        return {
            counter: 0
        }
    },
    render() {
        // 创建布局：div标签中包含一个h4元素和两个button元素
        return h("div", {
            class: "render-counter"
        }, [h("h4", null, `当前计数：${this.counter}`), h("button", {
            onClick: () => this.counter++
        }, "+1"), h("button", {//参数一：标签名称。参数二：标签属性。参数三：标签内容
            onClick: () => this.counter--
        }, "-1")])
    }
}
</script>