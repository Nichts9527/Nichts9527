<script>
export default {
    render() {
        // 定义方法，这些方法也可以写到methods选项中
        const increment = () => this.counter++;
        const decrement = () => this.counter--;
        // JSX语法，即允许在JavaScript中编写HTML元素
        return (
            <div style="border:1px solid #ddd;margin:8px">
                <div>HelloWorld组件</div>
                {/* 这里编写的是注释，下面定义了default插槽 */}
                {this.$slots.default ? this.$slots.default() : <span>插槽默认内容</span>}
            </div>
        )
    }
}
</script>