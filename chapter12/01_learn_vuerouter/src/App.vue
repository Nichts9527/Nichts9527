<template>
  <div class="nav">
    <!-- 切换路由，即切换页面 -->
    <!-- 为router-link添加custom属性和v-slot指令 -->
    <router-link class="tab" to="/home" custom v-slot="props">
      <strong @click="props.navigate">首页：</strong>
      <span>{{ props.href }}</span>
      <span>-{{ props.isActive }}</span>
      <!-- todo ...除了以上的元素，还支持插入自定义组件 -->
    </router-link>
    <router-link class="tab" to="/about">关于</router-link>
    <router-link class="tab" to="/user/why/id/0001">用户</router-link>
    <button @click="jumpToAbout">关于</button>
  </div>
  <!-- 路由组件的占位，为router-view添加v-slot指令 -->
  <router-view v-slot="{ props }">
    <transition name="why">
      <component :is="props.Component"></component>
    </transition>
  </router-view>
</template>
<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();//获取router对象，即创建的路由对象
    const jumpToAbout = () => {
      // 监听button事件
      // router.push('/about')//跳转到“关于”页面
      router.push({
        //接收对象类型的参数
        path: "/about",//指定跳转页面路径
        // 通过query属性向目标页面传递参数
        query: {
          name: "coder",
          age: "20"
        }
      })
    }
    return {
      router,
      jumpToAbout
    }
  }
}
</script>
<style scoped>
.why-enter-from .why-leave-to {
  opacity: 0;
}

.why-enter-active .why-leave-active {
  transition: opacity 1s ease;
}

.nav {
  margin: 20px 0px;
}

.tab {
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}
</style>
