function maxSubArray(nums: number[]): number {
    let n = nums.length

    // 1.定义状态  2.初始化状态
    let prev = nums[0]
    let max = nums[0]
    // 3.状态转移方程
    for(let i = 1;i < n;i++) {
        prev = Math.max(nums[i], nums[i] + prev)
        max = Math.max(prev,max)
    }
    // 4.计算出最终结果
    return max

};