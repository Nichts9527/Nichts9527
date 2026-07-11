<script>
import { h, ref } from "vue";
export default {
    setup(props, context) {
        const counter = ref(0);
        // setup函数返回一个render函数，该函数可以直接使用在同一作用域中声明的响应式变量
        return () => {
            return h("div", { class: "app" }, [
                h("h4", null, `当前计数:${counter.value}`),
                h("button", { onClick: () => counter.value++ }, "+1"),
                h("button", { onClick: () => counter.value-- }, "-1")
            ])
        }
    }
}
</script>