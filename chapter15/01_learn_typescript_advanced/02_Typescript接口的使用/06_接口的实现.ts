interface ISwim {
    swimming: () => void;
};
interface IEat {
    eating: () => void;
};
class Aniaml { }

// 继承（extends）：只能实现单继承
// 实现接口（implements）：类可以实现多个接口
class Fish extends Aniaml implements ISwim, IEat {
    swimming() {
        //实现ISwim接口对应的swimming方法 
        console.log("Fish Swimming");
    };
    eating() {
        // 实现IEat接口对应的eating方法
        console.log("Fish Eating");
    };
};
class Person implements ISwim {
    swimming() {
        console.log("Person Swimming");
    };
};

// 编写一些公共的API。下面是面向接口编程，即swimAction函数接收的是ISwim接口
function SwimAction(swimable: ISwim) {
    swimable.swimming()
};

// 只要实现了ISwim接口的类对应的对象，都可以传给swimAction函数
SwimAction(new Fish());
SwimAction(new Person());