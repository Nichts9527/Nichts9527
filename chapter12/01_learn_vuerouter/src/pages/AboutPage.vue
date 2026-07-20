<template>
  <div class="about">
    About Page
    <!-- 使用template直接获取query参数 -->
    <p>{{ $route.query.name }}-{{ $route.query.age }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "About",
  setup(props, context) {
    //useRoute会返回当前路由信息，相当于在模版中使用$route。useRoute必须在setup中调用
    const route = useRoute();
    console.log(route.name); //获取路由名称，打印about
    console.log(route.meta); //获取路由自定义数据，打印{name:"why",age:"18"}
    console.log(route.query);//通过route获取query参数，打印{name:"coder",age:"20"}
  },
};
</script>
