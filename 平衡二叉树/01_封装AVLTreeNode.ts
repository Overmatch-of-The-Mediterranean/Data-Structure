import { TreeNode } from "./00_二叉搜索树";
import { btPrint } from "hy-algokit";

class AVLTreeNode<T> extends TreeNode<T> { 
    left: AVLTreeNode<T> | null = null;
    right: AVLTreeNode<T> | null = null;
    parent: AVLTreeNode<T> | null = null;

    // 计算节点的高度
    getHeight(): number { 
        let leftHeight = this.left ? this.left.getHeight() : 0
        let rightHeight = this.right ? this.right.getHeight() : 0


        return Math.max(leftHeight,rightHeight) + 1
     }
    
    // 计算节点的权重(平衡因子)
    private getBalanceFactor(): number { 
        let leftHeight = this.left ? this.left.getHeight() : 0
        let rightHeight = this.right ? this.right.getHeight() : 0

        return leftHeight - rightHeight
     }
    
    // 判断该节点是否平衡
    get isBalanced(): boolean { 
        const factor = this.getBalanceFactor()
        return Math.abs(factor) <= 1
    }
    
    // 获取节点的更大高度的子节点
    public get higherChild():AVLTreeNode<T> | null { 
        let leftHeight = this.left ? this.left.getHeight() : 0
        let rightHeight = this.right ? this.right.getHeight() : 0
        if (leftHeight > rightHeight)  return this.left
        if (leftHeight < rightHeight) return this.right
        
        return this.isLeft? this.left:this.right

    }
    
    // 右旋转
    rightRotation() { 
        let isLeft = this.isLeft
        let isRight = this.isRight

        // 1. 处理pivot
        const pivot = this.left!
        pivot.parent = this.parent

        // 2. 处理pivot.right
        this.left = pivot.right
        if (pivot.right) { 
            pivot.right.parent = this
         }
        
        // 3. 处理this(root)
        pivot.right = this
        this.parent = pivot
        

        // 4. 将pivot插入合适的位置
        if (!pivot.parent) {
            return pivot
        } else if (isLeft) {
            pivot.parent.left = pivot
        } else if (isRight) { 
            pivot.parent.right = pivot
        }
        
        return pivot
     }

    // 左旋转
    leftRotation() { 
        let isLeft = this.isLeft
        let isRight = this.isRight

        // 1. 处理pivot
        const pivot = this.right!
        pivot.parent = this.parent
        // 2. 处理pivot.left
        this.right = pivot.left
        if (pivot.left) { 
            pivot.left.parent = this
         }

        // 3. 处理this(root)
        pivot.left = this
        this.parent = pivot
        

        // 4. 将pivot插入合适的位置
        if (!pivot.parent) {
            return pivot
        } else if (isLeft) {
            pivot.parent.left = pivot
        } else if (isRight) { 
            pivot.parent.right = pivot
        }
        
        return pivot
    }
}
 
// 左
// const av1Node1 = new AVLTreeNode(10)
// av1Node1.left = new AVLTreeNode(8)
// av1Node1.left.parent = av1Node1
// av1Node1.left.left = new AVLTreeNode(5)
// av1Node1.left.left.parent = av1Node1.left

// console.log(av1Node1.getHeight());
// console.log(av1Node1.left.getHeight());
// console.log(av1Node1.left.left.getHeight());
// console.log(av1Node1.isBalanced);
// console.log(av1Node1.left.isBalanced);


// const parent = new AVLTreeNode(12)
// parent.left = av1Node1

// av1Node1.parent = parent

// btPrint(parent)

// av1Node1.rightRotation()
// btPrint(parent)


// 右
// const av1Node1 = new AVLTreeNode(5)
// av1Node1.right = new AVLTreeNode(8)
// av1Node1.right.parent = av1Node1 
// av1Node1.right.right = new AVLTreeNode(10)
// av1Node1.right.right.parent = av1Node1.right

// console.log(av1Node1.getHeight());
// console.log(av1Node1.right.getHeight());
// console.log(av1Node1.right.right.getHeight());
// console.log(av1Node1.isBalanced);
// console.log(av1Node1.right.isBalanced);


// const parent = new AVLTreeNode(12)
// parent.right = av1Node1

// av1Node1.parent = parent

// btPrint(parent)

// av1Node1.leftRotation()
// btPrint(parent)


export default AVLTreeNode