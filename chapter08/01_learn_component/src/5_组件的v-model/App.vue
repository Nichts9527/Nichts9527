<template>
    <div class="app">
        <h4>App组件message变量：{{ message }}</h4>
        <button @click="changeMessage">App组件修改message </button>
        <!-- 在组件中使用v-model指令 -->
        <hy-input v-model="message"></hy-input>
        <!-- 上面的v-model指令等价于下面的语法 -->
        <!--<hy-input :modelValue="message" @update:model-value="message"=$event></hy-input>  -->
        <hy-multiple-input v-model="message" ,v-model:title="title"></hy-multiple-input>

        <!-- v-model绑定对象 -->
        <h5>App组件formData.name:{{ formData.name }}</h5>
        <h5>App组件formData.title:{{ formData.title }}</h5>
        <hy-form v-model="formData"></hy-form>
    </div>
</template>
<script>
import HyForm from './HyForm.vue';
import HyInput from './HyInput.vue';
import HyMultipleInput from './HyMultipleInput.vue';

export default {
    components: {
        HyInput,
        HyMultipleInput,
        HyForm
    },
    data() {
        return {
            message: "Hellow",
            title: "World",
            formData: {
                name: 'coder',
                title: 'why'
            }
        }
    },
    methods: {
        changeMessage() {
            this.message = "coderwhy"
        }
    }
}
</script>
