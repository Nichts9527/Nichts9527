const names1: string[] = ['abc', 'cba', 'cba'];//推荐
const names2: Array<string> = ['abc', 'cba', 'nba']//不推荐，会与React、JSX产生冲突
names1.push("why");
names2.push("why");

// 会报错，因为数组中存放的数据类型是固定string
// names1.push(123)
// names2.push(123)
export { }