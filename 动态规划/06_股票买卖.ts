function maxProfit(prices: number[]): number {

    // 1.定义状态 2.初始化状态 -----状态压缩
    const n = prices.length
    let minPrice = prices[0]
    let prev = 0
    // 3.状态转移方程
    for(let i = 1; i < n; i++){
        prev = Math.max(prev,prices[i] - minPrice)
        minPrice = Math.min(minPrice,prices[i])
    }
        // 4.计算出最终结果
    return prev
};