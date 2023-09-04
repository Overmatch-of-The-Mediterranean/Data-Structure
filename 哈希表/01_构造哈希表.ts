class HashTable<T> {
    
    storage:[string,T][][]= []
    private length: number = 7
    private count: number = 0
    
    private hashFunc(key: string, max: number) {

        let hashCode = 0
        for (let i = 0; i < key.length; i++) {
            // 霍纳法则
            hashCode = 31 * hashCode + key.charCodeAt(i)
        }

        const index = hashCode % max
        return index
        
    }

    private isPrime(num:number):boolean { 
        
        const sqrt = Math.sqrt(num)

        for (let i = 2; i <= sqrt; i++) { 
            if (num % i === 0) { 
                return false
             }
        }
        return true

     }

    private getNextPrime(num:number) { 
        let newPrime = num
        
        while (!this.isPrime(newPrime)) { 
            newPrime++
        }
        
        
        return newPrime
    }
    
    // 扩容或缩容
    private resize(newLength: number) { 

        let newPrime = this.getNextPrime(newLength)

        if (newPrime < 7) {
            newPrime = 7
        }
        
        this.length = newPrime
        console.log('容量',newPrime);
        const oldStorage = this.storage
        this.storage = []
        this.count = 0

        oldStorage.forEach(bucket => {
            if (!bucket) return
            
            for (let i = 0; i < bucket.length; i++) { 
                const tuple = bucket[i]
                
                this.put(tuple[0], tuple[1])
             }
         })
        
     }

    // 插入和更新操作
    put(key: string, value: T): void{
        const index = this.hashFunc(key, this.length)
        
        let bucket = this.storage[index]
        if (!bucket) {
            bucket = []
            this.storage[index] = bucket
        }

        // 更新操作
        let isUpdate = false
        for (let i = 0; i < bucket.length; i++) {
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            if (tupleKey === key) { 
                tuple[1] = value
                isUpdate = true
            }
        }

        // 插入操作
        if (!isUpdate) { 
            bucket.push([key, value])
            this.count++
            const loadFactor = this.count / this.length
            if (loadFactor > 0.75) { 
                this.resize(this.length * 2)
             }
         }
    }

    get(key: string): T | undefined {
        
        const index = this.hashFunc(key, this.length)
        
        const bucket = this.storage[index]

        if (!bucket) {
            return undefined
        }
        
        for (let i = 0; i < bucket.length; i++) { 
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            if (tupleKey === key) { 
                return tuple[1]
             }
        }
        return undefined
    }

    delete(key: string): T | undefined { 

        const index = this.hashFunc(key, this.length)
        
        const bucket = this.storage[index]

        if (!bucket) { 
            return undefined
        }
        
        for (let i = 0; i < bucket.length; i++) { 
            const tuple = bucket[i]
            const tupleKey = tuple[0]
            const tupleValue = tuple[1]
            if (tupleKey === key) { 
                bucket.splice(i, 1)
                this.count--
                const loadFactor = this.count / this.length
                if (loadFactor < 0.25 && this.length > 7) { 
                    this.resize(Math.floor(this.length / 2))
                }
                return tupleValue
             }
         }

        return undefined
     }
}

const hashTable = new HashTable<number>()

hashTable.put('abc', 111)
hashTable.put('cba', 222)
hashTable.put('nba', 333)
hashTable.put('mba', 444)
hashTable.put('cuba', 555)
hashTable.put('uba', 666)
console.log(hashTable.storage);

hashTable.delete('mba');
hashTable.delete('cuba');
hashTable.delete('uba');
hashTable.delete('nba');
hashTable.delete('cba');



console.log(hashTable.storage);

export { }



    
