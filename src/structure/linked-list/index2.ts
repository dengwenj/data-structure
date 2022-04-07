import LinkedList, { Node } from './index'

class DoublyNode extends Node {
  constructor(element: any) {
    super(element)
    this.pre = null
  }
}

class DoublyLinkedList extends LinkedList {
  constructor() {
    super()
    this.tail = null
  }

  append(element: unknown) {
    
  }

  insert(position: number, element: any): boolean {
    return false
  }

  indexOf(element: any): number {
    return 1
  }
}
