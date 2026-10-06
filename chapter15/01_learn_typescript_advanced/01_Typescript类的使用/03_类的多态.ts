class Aniaml {
    action() {
        console.log("animal action");
    }
};
class Dog extends Aniaml {
    // 继承是多态的前提
    action() {
        // 子类重写父类的action方法
        console.log("dog running!!!");
    }
};
class Fish extends Aniaml {
    action() {
        console.log("fish swimming");
    }
};

// 多态是为了写出更具通用性的代码
function makeActions(animals: Aniaml[]) {
    animals.forEach(animal => {
        // animals是父类的引用，指向子类对象
        animal.action()//调用子类的action方法
    })
};
makeActions([new Dog(), new Fish()]);
export { }