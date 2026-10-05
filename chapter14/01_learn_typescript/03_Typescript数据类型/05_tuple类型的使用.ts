// 1.数组的弊端：数组中的每个元素都为任意类型
// const info:any[]=["why",18,1.88]
// const name = info[0] //使用name时，提示类型为any

// 2.元组的特点：可指定数组中每个元素的类型
const info: [string, number, number] = ["why", 18, 1.88];
const name = info[0];//使用name时，提示类型为string
console.log(name.length);
const age = info[1];//使用age时，提示类型为number
//console.log(age.length);//将age当做string类型使用时，会报错
export { }
