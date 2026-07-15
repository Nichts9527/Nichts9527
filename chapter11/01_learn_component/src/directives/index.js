import registerFormatTime from "./format-time"
export default function registerDirectives (app){
    // 注册时间戳格式化的指令
    registerFormatTime(app);
    //还可以继续注册更多的全局指令
}