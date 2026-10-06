class Student {
    static time: string = "24:00:00"//定义静态属性
    static attendClass() {
        // 定义静态方法
        console.log("去学习~");
    };
};
console.log(Student.time);//访问静态属性
Student.attendClass();//调用静态方法
export { }
