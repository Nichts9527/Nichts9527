<template>
    <div class="base-echart">
        <div ref="chartDivRef" :style="{ width: Width, height: height }"></div>
    </div>
</template>

<script lang="ts" setup>
// 导包
import * as echarts from 'echarts';
import { ref, onMounted, watchEffect } from 'vue';
import type { EChartsOption } from 'echarts';
import useEcharts  from '../hooks/useEcharts';

interface BaseEchartProps {
    Width?: string;
    height?: string;
    options?: EChartsOption;
}

// 定义props
const props = withDefaults(defineProps<BaseEchartProps>(), {
    Width: '100%',
    height: '300px',
});

// 定义变量
const echartDivRef = ref<HTMLElement>();

// 组件加载完成
onMounted(() => {
    // 初始化echart实例
    const echartInstance = echarts.init(echartDivRef.value!)//也可用as类型断言明确具体类型
    // 窗口变化，echart重新计算图表尺寸
    window.addEventListener('resize', () => {
        echartInstance.resize()
    });
    const setOptions = (options:echarts.EChartsOption) => {
        echartInstance.setOption(props.options!)
    };
    watchEffect(() => {
        // 为echart设置一个图标配置信息
        setOptions(props.options!)
    })
});
</script>