// 定义Direction枚举
enum Direction {
    LEFT,//默认值为0
    RIGHT//默认值为1
};
// 指定direction参数为Direction枚举类型
function turnDirection(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            console.log("改变角色的方向向左");
            break;
        case Direction.RIGHT:
            console.log("改变角色的方向向右");
            break;
        default:
            const foo: never = direction;//确保枚举的每个成员都被处理过
            break;
    }
};

// 使用枚举。调用turnDirection函数时传入对应的枚举项
turnDirection(Direction.LEFT);
turnDirection(Direction.RIGHT);