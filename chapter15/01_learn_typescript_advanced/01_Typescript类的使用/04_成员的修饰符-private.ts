class Person {
    // 1.私有属性不能被外部访问，需要封装方法类操作name属性
    private name: string = "";
    getName() {
        // 默认是public方式
        return this.name;//获取name
    };
    setName(newName: string) {
        this.name = newName;//设置name
    };
}
const p = new Person();
// console.log(p.name);//直接访问私有的name属性会报错
console.log(p.getName());//ok
p.setName("why");//ok
export { }

