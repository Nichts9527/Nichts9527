function loopFpp(): never {
    // never类型，说明该函数不会返回任何内容
    while (true) {
        console.log("123");
    }
}

function loopBar(): never {
    throw new Error();
}

function handleMessage(message: number | string) {
    switch (typeof message) {
        case 'string':
            console.log('foo');
            break
        case 'number':
            console.log('bar');
            break
        default:
            // 当执行这里的代码时，将messgae复制给never类型的check会报错
            // 这样就可以保证，当修改参数的类型之后，一旦出现case没有处理到的情况，就会报错
            //例如，参数增加对Boolean类型的支持时，必须在case中编写对应的处理情况，否则报错
            const check: never = message
    }
}
handleMessage(123);
handleMessage('abc')