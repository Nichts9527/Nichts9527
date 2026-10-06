type FriendType = { name: string };
class Person {
    // 只读属性可以在构造器中赋值，赋值之后就不可以修改
    readonly name: string;
    readonly friend?: FriendType;
    constructor(name: string, friend?: FriendType) {
        this.name = name;
        this.friend = friend;
    };
};

const p = new Person("why", { name: "kobe" });
//直接修改只读的name会报错
// p.name = 'liujun';
console.log(p.name, p.friend);//ok
// p.friend = { name: 'even' };//直接修改只读的friend会报错
if(p.friend){
    p.friend.name = 'evan';//friend对象中的name属性是可以修改的
};

export { }