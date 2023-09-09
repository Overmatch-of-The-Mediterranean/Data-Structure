import BSTree, { TreeNode } from "./00_二叉搜索树";
import AVLTreeNode from './01_封装AVLTreeNode'

class AVLTree<T> extends BSTree<T> { 

    // 合法：父类引用指向子类对象
    createNode(value: T): TreeNode<T> {
        const newNode = new AVLTreeNode(value)
        return newNode
    }

    checkBalanced(node: AVLTreeNode<T>,isAdd = true) {
        let current = node.parent
        while (current) { 
            if (!current.isBalanced) { 
                this.rebalance(current)
                if(isAdd) break
            }
            current = current.parent
         }
    }

    rebalance(root: AVLTreeNode<T>) { 
        const pivot = root.higherChild
        const current = pivot?.higherChild
        let resultNode:AVLTreeNode<T> | null = null

        if (pivot?.isLeft) {
            if (current?.isLeft) { // 左左情况，root右旋转
               resultNode = root.rightRotation()
            } else { //左右情况，pivot先左旋转，root再右旋转
                pivot.leftRotation()
                resultNode = root.rightRotation()
            }
        } else { 
            if (current?.isLeft) { // 右左情况，pivot先右旋转，root再左旋转
                pivot?.rightRotation()
                resultNode = root.leftRotation()
            } else { // 右右情况，root左旋转
                resultNode = root.leftRotation()
             }
        }

        // 针对pivot的parent为空的处理
        if (!resultNode.parent) { 
            this.root = resultNode
         }
     }
}
 
const avlTree = new AVLTree<number>()

// 测试插入
const dels:number[] = []
for (let i = 0; i < 20; i++) { 
    let random = Math.floor(Math.random() * 200)
    if (i % 2 === 0 && i < 8) { 
        dels.push(random)
     }
    
    avlTree.insert(random)
    
 }
console.log(dels);

avlTree.print()

for (let i = 0; i < dels.length; i++) { 
    const num = dels[i]
    avlTree.delete(num)
}
 avlTree.print()