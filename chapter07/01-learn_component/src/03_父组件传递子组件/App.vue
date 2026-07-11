<template>
    <div class="app">
        <!-- 直接传递字符串 -->
        <show-message title="我是标题" content="我是内容"></show-message>
        <!-- 绑定字符串类型的变量 -->
        <show-message :title="title" :content="content"></show-message>
        <!-- 绑定对象中字符串类型的属性 -->
        <show-message :title="message.title" :content="message.content"></show-message>
        <!-- 直接绑定一个对象，会自动将对象的每个属性拆出来逐一绑定 -->
        <show-message v-bind="message"></show-message>
        <!-- 传递非props的属性：id,class和name -->
        <no-prop-attribute id="coder" class="why" name="coderwhy"></no-prop-attribute>
    </div>
</template>
<script>
import NoPropAttribute from './NoPropAttribute.vue';
import ShowMessage from './ShowMessage.vue';

export default {
    components: {
        ShowMessage,
        NoPropAttribute
    },
    data() {
        return {
            title: '我是标题title',
            content: '我是内容content',
            message: {
                title: '我是标题message.title',
                content: '我是内容message.content'
            }
        }
    }
}
</script>