// ...nums为剩余参数
function sum(initalNum: number, ...nums: number[]): number {
    let total: number = initalNum;
    for (const num of nums) {
        total += num;
    };
    return total;
};
console.log(sum(20, 30));//这里将30传递给nums
console.log(sum(20, 30, 40));//这里将30和40传递给nums

