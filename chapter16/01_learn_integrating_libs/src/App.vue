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

  <!-- ECharts -->
  <echart-demo></echart-demo>

  <!-- <echart-demo></echart-demo> -->
  <base-echart :options="options"></base-echart>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
// 手动导入ElButton组件
import 'element-plus/dist/index.css';//手动导入样式
import { ElButton } from 'element-plus';
// 导入自定义的IRootState类型
import type { IRootState } from './store/index';
import HelloWorld from './components/HelloWorld.vue';
import echartDemo from './base-ui/echart-demo.vue';

import BaseEchart from './base-ui/base-echart.vue';
import type { EChartsOption } from 'echarts';

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

    // echart图表的配置选项
    const options = computed<EChartsOption>(() => { 
      return {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
          }
        ]
      }
    });

return {
  store,
  increment,
  decrement,
  options
};
  },
components: {
  HelloWorld,
    ElButton,//局部注册ElButton组件
    echartDemo,
    BaseEchart
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
