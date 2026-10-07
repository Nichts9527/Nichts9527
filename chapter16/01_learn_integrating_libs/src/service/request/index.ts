import axios from "axios";
import type { AxiosResponse, AxiosInstance, AxiosRequestConfig } from "axios";

// 定义拦截器的类型，Tas响应结果(res.data)的类型
interface HDYRequestInterceptors<T = any> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (res: AxiosResponse<T>) => AxiosResponse<T> | Promise<AxiosResponse>;
    responseInterceptorCatch?: (error: any) => any;
};

interface HYRequestConfig<T = any> extends AxiosRequestConfig {
    // 可扩展自己的类型
    interceptors?: HDYRequestInterceptors<T>
};

class HYRequest<T = any> {
    instance: AxiosInstance;//声明instance的类型
    interceptors?:HDYRequestInterceptors;//指定拦截器的类型
    constructor(config: HYRequestConfig<T>) {
        // 创建axios实例
        this.instance = axios.create(config);
        // 从config中取出对应实例的拦截器
        this.interceptors = config.interceptors;
        // 如果某个实例的config中有定义拦截的回调函数，那么将这些函数添加到实例的拦截器中
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        );
        // 为所有实例添加全局拦截器
        this.instance.interceptors.request.use(
            (config) => {
                console.log("所有的实例都有的拦截器：请求成功拦截");
                return config;
            },
            (err) => {
                console.log("所有的实例都有的拦截器：请求失败拦截");
                return err;
            }
        );
        this.instance.interceptors.response.use(
            (res) => {
                console.log("所有的实例都有的拦截器：请求成功拦截");
                return res.data;
            },
            (err) => {
                console.log("所有的实例都有的拦截器：请求失败拦截");
                // 例子：判断不同的HttpErrorCode显示不同的错误信息
                if (err.response.status === 404) {
                    console.log("404的错误~");
                };
                return err;
            }
        );
        
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