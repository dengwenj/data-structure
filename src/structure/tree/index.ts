interface INode {
  data: number
  left: INode | null
  right: INode | null
}

export class Node {
  data: number
  left: INode | null
  right: INode | null

  constructor(data: number) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  root: INode | null

  constructor() {
    this.root = null
  }

  insert(data: number) {
    const newNode = new Node(data)

    if (!this.root) {
      this.root = newNode
      return
    }
    this.insertNode(this.root, newNode)
  }

  insertNode(node: INode, newNode: INode) {
    if (newNode.data > node.data) {
      if (!node.right) {
        node.right = newNode
        return
      }
      this.insertNode(node.right, newNode)
    } else {
      if (!node.left) {
        node.left = newNode
        return
      }
      this.insertNode(node.left, newNode)
    }
  }

  // 先序遍历
  preOrderTranverse() {
    this.preOrderTranverseNode(this.root)
  }

  preOrderTranverseNode(node: INode | null) {
    if (node === null) return

    console.log(node.data)
    this.preOrderTranverseNode(node.left)
    this.preOrderTranverseNode(node.right)
  }

  // 中序遍历
  inOrderTranverse() {
    this.preOrderTranverseNode(this.root)
  }

  inOrderTranverseNode(node: INode | null) {
    if (node === null) return
    
    this.preOrderTranverseNode(node.left)
    console.log(node.data)
    this.preOrderTranverseNode(node.right)
  }

  // 后续遍历
  postOrderTranverse() {
    this.preOrderTranverseNode(this.root)
  }

  postOrderTranverseNode(node: INode | null) {
    if (node === null) return

    this.preOrderTranverseNode(node.left)
    this.preOrderTranverseNode(node.right)
    console.log(node.data)
  }

  min() {
    let node = this.root

    while (node?.left !== null) {
      node = node!.left
    }

    return node.data
  }

  max() {
    let node = this.root

    while (node?.right !== null) {
      node = node!.right
    }

    return node.data
  }

  search(data: number) {
    return this.searchNode(this.root, data) 
  }

  searchNode(node: INode | null, data: number): boolean {
    if (node === null) return false

    if (data > node.data) {
      return this.searchNode(node.right, data)
    } else if (data < node.data) {
      return this.searchNode(node.left, data)
    } else {
      return true
    }
  }
}
