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
}
