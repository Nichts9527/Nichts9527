// "Hello World"也可作为一种类型，叫做字面量类型
let message: "Hello World" = "Hello World";
// message = 'coder'//报错
message = 'Hello World';//只能赋值Hello World

// 123也可作为一种类型，叫做字面量类型
let num: 123 = 123;

// 要体现字面量类型的意义，必须结合联合类型
type Alignment = 'left' | 'right' | 'center';
let align: Alignment = 'left';//ok
align = 'right';//ok
align = 'center';//ok
//align = 'bottom';//报错
export { }