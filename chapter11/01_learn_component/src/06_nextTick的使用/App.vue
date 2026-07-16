<template>
    <div class="app" style="border: 1px solid #ddd;margin: 4px;">
        App组件
        <!-- <NextTickExample1></NextTickExample1> -->
        <!-- <NextTickExample2></NextTickExample2> -->
        <NextTickExample3></NextTickExample3>
    </div>
</template>

<script>
import NextTickExample1 from './NextTickExample1.vue';
import NextTickExample2 from './NextTickExample2.vue';
import NextTickExample3 from './NextTickExample3.vue';

export default {
    components: {
        NextTickExample1,
        NextTickExample2,
        NextTickExample3
    }
}
</script>