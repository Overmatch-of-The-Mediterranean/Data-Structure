function fibo(n: number) { 
    
    // 1.定义状态 2.初始化
    let prev = 0
    let cur = 1
    // 3.状态方程
    for (let i = 2; i <= n; i++) { 
        const newValue = cur + prev
        prev = cur
        cur = newValue
    }
    
    // 4.计算出最终结果
    return cur


 }

console.log(fibo(50));
