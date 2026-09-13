<template>
    <div>
        <h4>书籍总价：{{ $store.getters.totalPrice }}</h4>
        <h4>Vue.js 书籍总价：{{ totalPriceByName('Vue.js') }}</h4>
        <!-- <h4>mapGetters 书籍总价：{{ totalPrice }}</h4>
        <h4>mapGetters 书籍折扣：{{ discount }}</h4> -->
    </div>
</template>
<script>
import { mapGetters, useGetters } from '../hooks';//导入mapGetters辅助函数
export default {
    // computed: {
    //     ...mapGetters(["totalPrice"]),//mapGetters函数接收数组的语法
    //     ...mapGetters({
    //         // 接收对象的语法
    //         discount: "currentDiscount"
    //     })
    // },
    setup() {
        const stateGetters = useGetters(["totalPriceByName"])//调用自定义Hook
        return {
            ...stateGetters
        }
    }
}
</script>