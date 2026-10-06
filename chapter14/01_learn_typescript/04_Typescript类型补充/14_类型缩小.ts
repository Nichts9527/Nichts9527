//1.typeof
type IDType = number | string;
function printID(id: IDType) {
    // 用typeof实现类型缩小，将id从联合类型缩小为string类型
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
};
export { }

//2.平等类型缩小
type Direction = "left" | "right" | "top" | "bottom";
function printDirection(direction: Direction) {
    // if判断，缩小类型
    if (direction === 'left') {
        console.log(direction);//类型缩小为left字面量类型
    } else if (direction === 'right') {
        console.log(direction);
    }

    // Switch判断，缩小类型
    switch (direction) {
        case 'top':
            console.log(direction);
            break;
        default:
            console.log(direction);
            break;
    }
};

//3.instanceof
class Student {
    studying() { }
}
class Teacher {
    teaching() { }
}
function work(p: Student | Teacher) {
    // 判断p是否为Student类型的实例，进行类型缩小
    if (p instanceof Student) {
        p.studying()
    } else {
        p.teaching()
    }
};
const stu = new Student();
work(stu);

// 4.in
// 定义Fish和Dog为对象类型
type Fish = {
    swimming: () => void;//swimming是函数类型
};
type Dog = {
    running: () => void
};
function walk(animal: Fish | Dog) {
    // 判断swimming是否为animal对象中的属性。进行类型缩小
    if ('swimming' in animal) {
        animal.swimming()
    } else {
        animal.running()
    }
};
// 创建fish对象，该对象的类型为Fish类型
const fish: Fish = {
    swimming() {
        console.log("swimming");
    },
};
walk(fish);
export { }