import Node from "../type/Node";
import { btPrint,PrintableNode } from 'hy-algokit'

/**
 * 1.插入节点
 * 2.遍历
 * 3.获取最大最小值
 * 4.查询
 * 5.删除
 */

class TreeNode<T> extends Node<T> { 
    left: TreeNode<T>|null = null
    right: TreeNode<T> | null = null
    parent: TreeNode<T> | null = null

    get isLeft(): boolean { 
        return this.parent?.left === this
    }
    
    get isRight(): boolean { 
        return this.parent?.right === this
     }
}
 

class BSTree<T> { 
    private root: TreeNode<T> | null = null
    
    print() { 
        btPrint(this.root)
     }

    // 插入节点
    insert(value: T) { 
        const newNode = new TreeNode<T>(value)

        if (!this.root) {
            this.root = newNode
        } else { 
            this.insertNode(this.root,newNode)
         }

    }



    insertNode(node: TreeNode<T>, newNode: TreeNode<T>) { 
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else { 

            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right,newNode)
             }

         }
         
    }
    
    // 先序遍历
    preOrderTraverse() { 
        this.preOrderTraverseNode(this.root)
     }

    // 递归
    // preOrderTraverseNode(node: TreeNode<T>|null) {
    //     if (node) { 
    //         console.log(node.value);
    //         this.preOrderTraverseNode(node.left)
    //         this.preOrderTraverseNode(node.right)
            
    //      }
    // }

    // 非递归
    preOrderTraverseNode(node: TreeNode<T>|null) {
        const stack: TreeNode<T>[] = []
        let current: TreeNode<T> | null = node
        
        while (current || stack.length > 0) { 
            while (current) { 
                console.log(current.value);
                stack.push(current)
                current = current.left
            }
            current = stack.pop() ?? null
            current = current?.right ?? null
         }
    }
    
    // 中序遍历
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
     }
    
    // 递归
    // inOrderTraverseNode(node: TreeNode<T> | null) { 
    //     if (node) { 
    //         this.inOrderTraverseNode(node.left)
    //         console.log(node.value);
    //         this.inOrderTraverseNode(node.right)
    //      }
    // }
    
    // 非递归
    inOrderTraverseNode(node: TreeNode<T> | null) { 
        const stack: TreeNode<T>[] = []
        let current: TreeNode<T> | null = node
        
        while (current || stack.length > 0) { 
            while (current) { 
                stack.push(current)
                current = current.left

            }

            current = stack.pop() ?? null
            console.log(current?.value);
            current = current?.right ?? null
            
         }
    }


    // 后序遍历
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
    }
    
    //递归
    // postOrderTraverseNode(node: TreeNode<T>|null) { 
    //     if (node) { 
    //         this.postOrderTraverseNode(node.left)
    //         this.postOrderTraverseNode(node.right)
    //         console.log(node.value);
            
    //      }
    // }
    
    // 非递归
    postOrderTraverseNode(node: TreeNode<T>|null) { 
        const stack: TreeNode<T>[] = []
        let current: TreeNode<T> | null = node
        let lastVisitedNode:TreeNode<T> | null = null

        while (current || stack.length > 0) { 
            
            while (current) { 
                stack.push(current)
                current = current.left
            }

            
            current = stack[stack.length - 1]
            
            if (current.right === null || current.right === lastVisitedNode) {
                console.log(current.value);
                lastVisitedNode = current
                stack.pop()
                current = null
                
            } else { 
                current = current.right
             }
            
         }
    }

    // 层序遍历
    levelOrderTraverse() { 
        if(!this.root) return null

        const queue: TreeNode<T>[] = []
        queue.push(this.root)

        while (queue.length) { 
            const node = queue.shift()
            console.log(node!.value);
            if(node?.left) queue.push(node.left)
            if(node?.right) queue.push(node.right)

         }

     }
    
    // 获取最小值
    getMin():T|null { 
        let current = this.root
        while (current && current.left) { 
            current = current.left
        }
        return current?.value ?? null
    }
    
    // 获取最大值
    getMax(): T | null { 
        let current = this.root
        while (current && current.right) { 
            current = current.right
        }
        
        return current?.value ?? null
     }

    // 搜索节点
    search(value: T) { 
        return  !!this.getSearchNode(value)
    }

    // 获取搜索到的节点
    getSearchNode(value: T):TreeNode<T>|undefined { 
        let current = this.root
        let parent: TreeNode<T> | null = null
        
        while (current) {

            if (current.value === value) {
                return current
            }

            parent = current
            if (value < current.value) {
                current = current.left!
            } else { 
                current = current.right!
             }


            if (current) { 
                current.parent = parent
             }
           
         }


        
    }

    // 获取删除节点的后继节点
    getSuccessor(deleteNode: TreeNode<T> | null) { 
        let current = deleteNode!.right
        let successor: TreeNode<T> | null = null
        
        while (current) { 
            successor = current
            current = current.left
            if (current) { 
                current.parent = successor
             }
        }
        
        // 如果删除节点的后继节点不是删除节点的右孩子
        if (successor !== deleteNode?.right) { 
            successor!.parent!.left = successor!.right
            successor!.right = deleteNode!.right
        }
        successor!.left = deleteNode!.left
        


        return successor
     }
    
    // 删除节点
    delete(value: T): boolean { 
        
        let current = this.getSearchNode(value)
        let replaceNode: TreeNode<T> | null = null
        
        if (!current) return false
        
        // 删除叶子节点
        if (current.left === null && current.right === null) {
            replaceNode = null
        }
        
        // 删除只有左子节点的节点
        else if (current.right === null) {
            replaceNode = current.left
        }

        // 删除只有右子节点的节点
        else if (current.left === null) {
            replaceNode = current.right
        }   

        // 删除有双节点的节点
        else { 
            replaceNode = this.getSuccessor(current)
        }
        
        if (current === this.root) {
            this.root = replaceNode
        } else { 
            if (current?.isLeft) {
                current!.parent!.left = replaceNode
            } else { 
                current!.parent!.right = replaceNode
            }
        }
        
        return true
    } 
    
}
 

class Product { 
    constructor(public name: string, public price: number) { 
        
    }
    valueOf() { 
        return this.price
     }
}
 

const p1 = new Product('苹果', 100)
const p2 = new Product('华为', 120)
const p3 = new Product('小米', 80)
const p4 = new Product('vivo',90)

const bst = new BSTree<Product>()

bst.insert(p1)
bst.insert(p2)
bst.insert(p3)
bst.insert(p4)
bst.print()

// const bst = new BSTree<number>()
// bst.insert(11)
// bst.insert(7)
// bst.insert(15)
// bst.insert(5)
// bst.insert(3)
// bst.insert(9)
// bst.insert(8)
// bst.insert(10)
// bst.insert(13)
// bst.insert(12)
// bst.insert(14)
// bst.insert(20)
// bst.insert(18)
// bst.insert(25)
// bst.insert(6)
// bst.insert(19)
// bst.print()
// bst.preOrderTraverse()
// bst.inOrderTraverse()
// bst.postOrderTraverse()
// bst.levelOrderTraverse()

// 获取最大/小值
// console.log(bst.getMin());
// console.log(bst.getMax());

// 查询
// console.log(bst.search(7));
// console.log(bst.search(25));
// console.log(bst.search(14));
// console.log(bst.search(30));
// console.log(bst.search(100));

// 删除叶子节点
// bst.delete(3)
// // bst.delete(6)
// bst.delete(8)
// // bst.delete(10)
// bst.delete(14)
// bst.delete(25)
// bst.print()

// 删除只有左子节点的节点
// bst.delete(20)
// bst.delete(13)
// bst.print()

// 删除只有右子节点的节点
// bst.delete(5)
// bst.delete(9)
// bst.print()

// 删除有两个节点的节点
// bst.delete(11)
// bst.delete(7)
// bst.delete(15)
// bst.print()



