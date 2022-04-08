import LinkedList, { Node } from './index'

export class DoublyNode extends Node {
  constructor(element: any) {
    super(element)
    this.pre = null
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  append(element: unknown) {
    const newNode = new DoublyNode(element)

    if (!this.root) {
      this.root = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.pre = this.tail
      this.tail = newNode
    }
  }

  insert(position: number, element: any): boolean {
    return false
  }

  indexOf(element: any): number {
    return 1
  }
}
