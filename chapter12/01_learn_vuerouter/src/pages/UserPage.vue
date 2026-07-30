<template>
  <div class="user">
    <!-- 在template中获取路径参数值 -->
    <h4>User Page:{{ $route.params.username }}-{{$route.params.id}}</h4>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
  created(){
    console.log(this.$route.params.username,this.$route.params.id);//在created中获取路径参数值
  },
  setup(props,context){
    const route = useRoute();
    console.log(route.params.username,route.params.id);//使用useRoute函数获取路径参数值
  }
}
</script>
