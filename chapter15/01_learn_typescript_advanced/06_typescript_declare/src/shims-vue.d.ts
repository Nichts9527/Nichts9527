/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明全局变量，告诉编译器该变量以声明了
declare const appName: string;
declare const appVersion: string;
declare function getAppName(): void;

// 声明全局类
declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number)
};

// 声明导入的模块
declare module 'lodash' { 
  export function join(arg:any[]):any;//声明模块中有一个join函数，即lodash.join()函数
  // 可以继续导出Lodash的其他方法
}