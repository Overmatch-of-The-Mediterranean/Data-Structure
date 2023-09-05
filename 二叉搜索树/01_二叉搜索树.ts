import Node from "../type/Node";
import { btPrint } from 'hy-algokit'

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

    preOrderTraverseNode(node: TreeNode<T>|null) {
        if (node) { 
            console.log(node.value);
            this.preOrderTraverseNode(node.left)
            this.preOrderTraverseNode(node.right)
            
         }
    }
    
    // 中序遍历
    inOrderTraverse() {
        this.inOrderTraverseNode(this.root)
     }
    
    inOrderTraverseNode(node: TreeNode<T> | null) { 
        if (node) { 
            this.inOrderTraverseNode(node.left)
            console.log(node.value);
            this.inOrderTraverseNode(node.right)
         }
    }
    
    // 后序遍历
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root)
     }
    postOrderTraverseNode(node: TreeNode<T>|null) { 
        if (node) { 
            this.postOrderTraverseNode(node.left)
            this.postOrderTraverseNode(node.right)
            console.log(node.value);
            
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

    getSuccessor(deleteNode: TreeNode<T> | null) { 
        let current = deleteNode!.right
        let successor:TreeNode<T>|null = null
        while (current) { 
            successor = current
            current = current.left
            if (current) { 
                current.parent = successor
             }
        }
        
        if (successor !== deleteNode?.right) { 
            successor!.parent!.left = successor!.right
            successor!.right = deleteNode!.right
         }


        return successor
     }
    
    delete(value: T): boolean { 
        
        let current = this.getSearchNode(value)
        
        if (!current) return false
        
        // 删除叶子节点
        if (current.left === null && current.right === null) {
            if (current === this.root) {
                this.root = null
            } else {
                if (current.isLeft) {
                    current.parent!.left = null
                } else {
                    current.parent!.right = null
                }
            }
            return true
            
        }
        
        // 删除只有左子节点的节点
        else if (current.right === null) {
            if (current === this.root) {
                this.root = current.left
            } else {
                if (current.isLeft) {
                    current.parent!.left = current.left
                } else {
                    current.parent!.right = current.left
                }
            }
            
            return true
        }

        // 删除只有右子节点的节点
        else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right
            } else {
                if (current.isLeft) {
                    current.parent!.left = current.right
                } else {
                    current.parent!.right = current.right
                }
            }
            return true
        }

        // 删除有双节点的节点
        else { 
            if (current === this.root) {
                this.root = this.getSuccessor(current)
            } else { 
                if (current.isLeft) {
                    current.parent!.left = this.getSuccessor(current)
                } else { 
                    current.parent!.right = this.getSuccessor(current)
                 }
            }
            return true
         }
    } 
    
    // 删除有双节点的节点

    // searchNode
}
 
const bst = new BSTree<number>()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)
bst.insert(6)
bst.insert(19)
bst.print()
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
bst.delete(3)
// bst.delete(6)
bst.delete(8)
// bst.delete(10)
bst.delete(14)
bst.delete(25)
bst.print()

// 删除只有左子节点的节点
// bst.delete(20)
// bst.delete(13)
// bst.print()

// 删除只有右子节点的节点
// bst.delete(5)
// bst.delete(9)
// bst.print()

// 删除有两个节点的节点
bst.delete(15)



