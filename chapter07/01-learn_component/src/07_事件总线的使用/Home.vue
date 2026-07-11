<template>
    <div class="home">
        Home
        <home-content></home-content>
    </div>
</template>
<script>
import Home from '@/06_Provide和inject使用/Home.vue';
import HomeContent from './HomeContent.vue';

export default {
    components:{
        HomeContent
    }
}
</script>