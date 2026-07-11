<template>
    <div class="app" style="border: 1px solid #ddd;margin: 4px;">
        App组件
        <!-- <OptionsAPIExample></OptionsAPIExample> -->
        <CompositionAPIExample></CompositionAPIExample>
    </div>

</template>

<script>
import CompositionAPIExample from './CompositionAPIExample.vue';
import OptionsAPIExample from './OptionsAPIExample.vue';

export default {
    components: {
        OptionsAPIExample,
        CompositionAPIExample
    }
}
</script>