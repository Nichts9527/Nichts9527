// this可以被Typescript推导为info对象
const info = {
    name: "why",
    eating() {
        console.log(this.name + "eating");
    }
};
info.eating()
export { }