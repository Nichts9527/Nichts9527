// 1.type用于定义类型别名
type PointType = {
    x: number,
    y: number,
    z: number
}

// 2.PointType是对象类型的别名
function printPoint(point: PointType) { }
export { }

// 3.IDType是联合类型string、number、boolean的别名
type IDType = string | number | boolean;
export {}