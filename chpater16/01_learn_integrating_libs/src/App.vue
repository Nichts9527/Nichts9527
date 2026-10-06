<template>
  <!-- Vue Router -->
  <router-link class="tab" to="/home">首页</router-link>
  <router-link class="tab" to="/about">关于</router-link>
  <router-view></router-view>
  <!-- Vuex -->
  <div>当前计数：{{ store.state.counter }}</div>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
  <!-- element-plus -->
  <el-button>Default</el-button>
  <el-button type="primary">Primary</el-button>
  <el-button type="success">Success</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
// 导入自定义的IRootState类型
import type { IRootState } from './store/index';
import HelloWorld from './components/HelloWorld.vue';

export default defineComponent({
  name: 'App',
  setup() {
    // 指定store的类型为IRootState，这里应用了泛型
    const store = useStore<IRootState>();

    const increment = () => {
      store.commit('increment');
    };

    const decrement = () => {
      store.commit('decrement');
    };

    return {
      store,
      increment,
      decrement
    };
  },
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
