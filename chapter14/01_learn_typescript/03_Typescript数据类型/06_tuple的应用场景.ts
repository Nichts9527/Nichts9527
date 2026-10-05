function useState(state: any) {
    let currentState = state;
    const changeState = (newState: any) => {
        currentState = newState;
    }
    const tuple: [any, (newState: any) => void] = [currentState, changeState]
    return tuple //返回元组类型:[any,(newState: any) => void]
}
const [counter, setCounter] = useState(10);//解构出来的counter、setCounter是有类型提示的
export { }