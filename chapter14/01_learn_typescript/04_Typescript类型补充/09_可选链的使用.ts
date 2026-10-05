// 为对象类型起一个Person别名
type Person = {
    name: string,
    friend?: {
        name: string,
        age?: number,
        girlFriend?: {
            name: string
        }
    }
}

// 定义一个对象，指定类型为Person类型
const info: Person = {
    name: "why",
    friend: {
        name: "kobe",
        girlFriend: {
            name: "lily"
        }
    }
};

// 获取info对象的属性，用到了可选链？
console.log(info.name);
console.log(info.friend!.name);//断言friend不为空，当为空时，运行程序会报错
console.log(info.friend?.age);//当friend不为空，才取age。类似if语句判定
console.log(info.friend?.girlFriend?.name);//当friend、girlfriend都不为空时，才取name
export { }