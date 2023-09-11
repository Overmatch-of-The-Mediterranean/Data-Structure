// 使用数组记忆已经计算的值
function fibo(n: number, memo: number[] = []): number { 
    if (n <= 1) return n
    
    if (memo[n]) { 
        return memo[n]
    }
    
    const result = fibo(n - 1,memo) + fibo(n - 2,memo) 
    memo[n] = result

    return result
}
 
console.log(fibo(50));

export { }
