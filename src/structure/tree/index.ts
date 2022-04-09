interface INode {
  data: unknown
  left: INode | null
  right: INode | null
}

export class Node {
  data: unknown
  left: INode | null
  right: INode | null

  constructor(data: unknown) {
    this.data = data
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  tree: INode | null

  constructor() {
    this.tree = null
  }
}
