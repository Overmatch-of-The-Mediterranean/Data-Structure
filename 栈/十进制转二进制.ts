import ArrayStack from './01_实现栈结构(数组)'


function decimalToBinary(decimal: number): string { 
    let binary = ''
    const stack = new ArrayStack<number>()

    while (decimal > 0) { 
        const result = decimal % 2
        stack.push(result)

        decimal = Math.floor(decimal / 2)
    }

    while (!stack.isEmpty()) { 
        binary += stack.pop()
    }

    return binary


}
 

console.log(decimalToBinary(35));
console.log('---------------');
console.log(decimalToBinary(66));
console.log('---------------');
console.log(decimalToBinary(100));

export { }



