<template>
    <div class="app">
        <nav-bar :name="name"><!--传递插槽名称给NavBar.vue组件  -->
            <template #[name]>
                <button class="btn">左边按钮</button><!--v-slot:[name]简写为#[name]-->
            </template>
            <template #center>
                <h4 class="title">我是标题</h4><!--v-slot:center简写为#cneter-->
            </template>
            <template #right>
                <i class="icon">右边的i元素</i><!--v-slot:right简写为#rightr-->
            </template>

        </nav-bar>
    </div>
</template>
<script>
import NavBar from './NavBar.vue';

export default {
    components: {
        NavBar
    },
    data() {
        return {
            name: 'coderwhy'//定义插槽的名称
        }
    }
}
</script>