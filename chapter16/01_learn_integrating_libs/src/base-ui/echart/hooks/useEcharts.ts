import * as echarts from 'echarts';
// 这里为echarts注册了地图数据（如需展示地图，则应添加这两行代码，否则可删除）
echarts.registerMap('china', require('echarts/map/json/china.json'));

export default function useEcharts(el: HTMLElement) {
    const echartInstance = echarts.init(el);//初始化echart实例

    const setOptions = (options: echarts.EChartsOption) => {
        echartInstance.setOption(options);//为echart设置图标配置项

        // 对外提供手动修改图表尺寸的函数
        const updateSize = () => {
            echartInstance.resize();
        };
        window.addEventListener('resize', updateSize);
    };

    return { echartInstance, setOptions,};
}