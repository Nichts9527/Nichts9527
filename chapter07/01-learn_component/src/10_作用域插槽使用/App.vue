<template>
    <div class="app">
        <show-names :names="names">
            <!-- v-slot:default后面的值slotProps是插槽属性的集合。其中slotProps可任意命名 -->
            <template v-slot:default="slotProps">
                <span>
                    {{ slotProps.item }}-{{ slotProps.index }}
                </span>
            </template>
        </show-names>
        <!-- 默认插槽简写 -->
        <show-names :names="names">
            <template v-slot="slotProps">
                <span>
                    {{ slotProps.item }}-{{ slotProps.index }}
                </span>
            </template>
        </show-names>
        <!-- 在只有默认插槽时，组件的标签可以被当作插槽的模版使用，这样就可以将v-slot直接用在组件上，省略template元素 -->
        <show-names :names="names" v-slot="slotProps">
            <span>
                {{ slotProps.item }}-{{ slotProps.index }}
            </span>
        </show-names>
    </div>
</template>
<script>
import ShowNames from './ShowNames.vue';

export default {
    components: {
        ShowNames
    },
    data() {
        return {
            names: ["why", "kobe", "james", "curry"]
        }
    }
}
</script>