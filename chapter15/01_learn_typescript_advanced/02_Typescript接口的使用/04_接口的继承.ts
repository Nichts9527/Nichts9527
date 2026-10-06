interface ISwim {
    swimming: () => void
};
interface IFly {
    flying: () => void
};
// 接口的多继承
interface IAction extends ISwim, IFly { };
const action: IAction = {
    swimming(){},//必须实现接口中的方法
    flying(){}
};
export {}