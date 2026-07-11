<template>
    <div class="app">
        <!-- 1.默认没有插入内容 -->
        <my-slot-cpn></my-slot-cpn>
        <!-- 2.插入一个元素 -->
        <my-slot-cpn>
            <button>我是按钮</button>
        </my-slot-cpn>
        <!-- 3.插入一个文本 -->
        <my-slot-cpn>
            我是普通的文本
        </my-slot-cpn>
        <!-- 4.插入一个组件 -->
        <my-slot-cpn>
            <my-button></my-button>
        </my-slot-cpn>
        <!-- 5.插入多个内容 -->
        <my-slot-cpn>
            <span>我是span</span>
            <button>我是button</button>
            <strong>我是strong</strong>
            我是文本
        </my-slot-cpn>
    </div>
</template>
<script>
import MyButton from './MyButton.vue';
import MySlotCpn from './MySlotCpn.vue';

export default {
    components: {
        MySlotCpn,
        MyButton
    }
}
</script>