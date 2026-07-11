<template>
    <div class="app">
        App
        <home></home>
        <button @click="addFriend">addFriend</button>
    </div>
</template>
<script>
import Home from './Home.vue';
import { computed } from 'vue';
export default {
    components: {
        Home
    },
    // 在根组件中通过provide属性为子组件和孙子组件提供数据
    provide() {//provide属性为函数，并返回一个对象
        return {
            name: this.name,
            age: this.age,
            friends: this.friends,
            // computed函数返回的是ref响应式对象
            friendLength: computed(() => this.friends.length)//继续提供friendLength数据
        }
    },
    data() {
        return {
            friends: ["jack", "rose"],
            age: 18,
            name: "why"
        }
    },
    methods: {
        addFriend() {
            this.friends.push("Tony");
            console.log(this.friends);
        }
    }
}
</script>