import mitt from 'mitt';
//创建emitter对象
const emitter = mitt();
// 也可以创建多个emitter对象
const emitter2 = mitt();
export default emitter;