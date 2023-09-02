import ArrayStack from "./01_实现栈结构(数组)";

/**
 * 思路
 *      1.遇见左括号就将相应的右括号进栈
 *      2.遇见右括号，栈顶元素与其必须相等
 *      3.最终栈要为空
 */

function isValid(str: string): boolean { 
    const stack = new ArrayStack<string>()

    for (let i = 0; i < str.length; i++) { 
        let c = str[i]
        switch (c) { 
            case '(':
                stack.push(')')
                break
            case '[':
                stack.push(']')
                break
            case '{':
                stack.push('}')
                break
            default:
                if (c !== stack.pop()) return false
                break
         }
    }

    return stack.isEmpty()

}
 

console.log(isValid('[]'));
console.log(isValid('()[]{}'));
console.log('-------------------');

console.log(isValid('([)]{}'));
console.log(isValid('()[]{}{'));
console.log(isValid('(]'));


