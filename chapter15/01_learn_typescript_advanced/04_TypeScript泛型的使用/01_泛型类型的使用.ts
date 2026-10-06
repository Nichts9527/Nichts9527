function foo<Type>(arg: Type): Type {
    return arg;
};

// 调用方式一：向类型变量Type传递具体的类型
foo<number>(20);//这时，Type为number类型
foo<{ name: string }>({ name: "why" });

// 调用方法二：Typescript会自动推导出Type具体的类型
foo(50);
foo("abc");//这时，Type为string类型

// foo函数上可以定义多个类型变量
function foo1<T, E>(a1: T, a2: E) {
    return a1;
};
foo1<number, string>(20, "abc");