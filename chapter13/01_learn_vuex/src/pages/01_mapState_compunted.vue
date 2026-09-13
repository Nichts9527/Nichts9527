<template>
    <div>
        <h4>Home:{{ $store.state.counter }}</h4>
        <h4>Home:{{ counter }}</h4>
        <h4>Name:{{ name }}</h4>
        <h4>Age:{{ hyAge }}</h4>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    // data(){
    //     return {
    //         firstName:"coder"
    //     }
    // },
    // // computed: {
    // //     // 使用计算属性读取状态
    // //     // counter() {
    // //     //     return this.$store.state.counter
    // //     // }
    // // }
    // computed:mapState({
    //     // mapState函数接收对象类型参数
    //     counter:(state)=>{
    //         return state.counter//这里的箭头函数不绑定this
    //     },
    //     name(state){
    //         // 普通函数会绑定this，这里的this是组件的实例
    //         return this.firstName + state.name
    //     },
    //     hyAge:"age",//key可自定义，这里定义为hyAge
    // })
    // computed:mapState(['counter','name'])//mapState函数接收数组类型参数
    computed:{
        counter(){
            return this.$store.state.counter
        },
        ...mapState(['name']),//mapState函数的解构
        ...mapState({
            // mapState函数的解构
            hyAge:"age"
        })
    }
}
</script>