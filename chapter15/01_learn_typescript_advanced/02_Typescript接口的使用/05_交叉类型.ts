interface ISwim {
    swimming: () => void;
};
interface IFly {
    flying: () => void;
};
type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;
// 联合类型
const obj1: MyType1 = {
    flying() { }
};
// 交叉类型。MyType2类型是ISwim和IFly类型的合并
const obj2: MyType2 = {
    swimming() {

    },
    flying() {

    },
};
export { }
