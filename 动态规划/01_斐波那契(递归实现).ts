function fibo(n: number):number { 
    
    if (n <= 1) return n

    // 效率很低，存在大量重复计算
    return fibo(n - 1) + fibo(n - 2)

}
 
console.log(fibo(50));

export { }
