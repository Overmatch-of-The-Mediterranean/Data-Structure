class Graph<T> { 
    vertexs: T[] = []
    // 邻接表
    adjList: Map<T, T[]> = new Map()
    
    // 添加顶点
    addVertex(vertex: T) {  
        this.vertexs.push(vertex)
        this.adjList.set(vertex,[])
    }

    // 添加边
    addEdges(v1: T, v2: T) { 
        this.adjList.get(v1)?.push(v2)
        this.adjList.get(v2)?.push(v1)
    }
    
    tranverse() { 
        this.vertexs.forEach(vertex => { 
            const edges = this.adjList.get(vertex)
            console.log(`${vertex} ->`,edges?.join(' '));
         })
    }
    
    // 广度优先遍历
    bfs() { 
        if (!this.vertexs.length) return null
        
        // 队列
        const queue: T[] = []
        queue.push(this.vertexs[0])

        // 记录访问过的顶点
        const visited:Set<T> = new Set()
        visited.add(this.vertexs[0])

        // 遍历
        while (queue.length) { 
            const vertex = queue.shift()!
            console.log(vertex);
            const neighbors = this.adjList.get(vertex)
            
            if(!neighbors) return null
            for (let i = 0; i < neighbors.length; i++) { 
                const nei = neighbors[i]
                if (!visited.has(nei)) { 
                    visited.add(nei)
                    queue.push(nei)
                 }
             }
         }
    }
    
    // 深度优先遍历
    dfs() {
        if (!this.vertexs.length) return null

        // 栈
        const stack: T[] = []
        stack.push(this.vertexs[0])

        // 记录访问过的顶点
        const visited:Set<T> = new Set()
        visited.add(this.vertexs[0])

        // 遍历
        while (stack.length) { 
            const vertex = stack.pop()!
            console.log(vertex);
            const neighbors = this.adjList.get(vertex)

            if(!neighbors) return null
            for (let i = neighbors.length - 1; i >= 0; i--) { 
                const nei = neighbors[i]
                if (!visited.has(nei)) { 
                    visited.add(nei)
                    stack.push(nei)
                 }
             }
         }
    }
}
 
const graph = new Graph()

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')
graph.addVertex('G')
graph.addVertex('H')
graph.addVertex('I')

graph.addEdges('A', 'B')
graph.addEdges('A', 'C')
graph.addEdges('A', 'D')
graph.addEdges('C', 'D')
graph.addEdges('C', 'G')
graph.addEdges('D', 'G')
graph.addEdges('D', 'H')
graph.addEdges('B', 'E')
graph.addEdges('B', 'F')
graph.addEdges('E', 'I')

// graph.tranverse()
graph.bfs()
// graph.dfs()


