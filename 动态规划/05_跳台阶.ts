function climbStairs(n: number): number {
    // 1.定义状态 2.初始化状态 -----状态压缩
    let prev = 1
    let cur = 1
    // 3.状态转移方程
    for(let i = 2;i<=n; i++){
        const newValue = prev + cur
        prev = cur
        cur = newValue
    }
    // 4.计算出最终结果
    return cur
};