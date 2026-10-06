class Person {
    private _name: string;//私有属性一般习惯以下划线开头命名
    constructor(name: string) {
        this._name = name;
    };
    set name(newName) {
        // setter访问器
        this._name = newName;
    };
    get name() {
        // getter访问器
        return this._name;
    }
};
const p = new Person("why");
p.name = "coderwhy";//调用setter访问器为_name设置值
console.log(p.name);//调用getter访问器获取_name的值
export{}
