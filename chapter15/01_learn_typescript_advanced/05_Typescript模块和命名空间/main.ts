// main.ts
import { add, sub } from "./untils/math";
// 导入命名空间：Time和Price
import { Time, Price } from './untils/format';
console.log(add(20, 30));
console.log(sub(20, 20));

console.log(Time.name);//coder
console.log(Time.format(['2022', '07', '10']));//2022-07-10
console.log(Price.format(2999.7834));//2999.78




