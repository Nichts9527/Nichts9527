import axios from "axios";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";

interface HYRequestConfig extends AxiosRequestConfig {
    // 可扩展自己的类型
};

class HYRequest {
    instance: AxiosInstance;//声明instance的类型
    constructor(config: HYRequestConfig) {
        // 创建axios实例
        this.instance = axios.create(config);
        // 为所有实例添加全局拦截器
        this.instance
    }
    // 编写request函数，request中的T用于指定响应结果res.data的类型
    request<T = any>(config: HYRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance.request<any, AxiosResponse<T>>(config).then((res) => { //将结果resolve返回出去
                resolve(res.data);
            }).catch((err) => {
                reject(err);
                return err;
            });
        });
    }
}
export default HYRequest;//导出HYRequest类