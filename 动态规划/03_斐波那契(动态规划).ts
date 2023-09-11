function fibo(n: number) { 
    // 1.定义状态dp[i] 2.初始化状态
    const dp:number[] = [0, 1]
    
    // 3.状态转移方程，一般都放在for/while循环中
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2]
    }
    
    // 4.计算出最终结果
    return dp[n]

 }



console.log(fibo(50));

export { }