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

    this.length++
  }

  insert(position: number, element: any) {
    if (position < 0 || position > this.length) return false

    const newNode = new DoublyNode(element)
    if (position === 0) {
      if (!this.root) {
        this.root = newNode
        this.tail = newNode
      } else {
        this.root.pre = newNode
        newNode.next = this.root
      }
    } else if (position === this.length) {
      this.tail!.next = newNode
      newNode.pre = this.tail
      this.tail = newNode
    } else {
      let idx = 0
      let pre = null
      let current = this.root
      while (idx++ < position) {
        pre = current
        current = current!.next
      }

      newNode.pre = pre
      newNode.next = current
      pre!.next = newNode
      current!.pre = newNode
    }

    this.length++
    return true
  }

  removeAt(position: number) {
    if (position < 0 || position > this.length - 1) return null

    let idx = 0
    let remove
    let pre = null
    let current = this.root
    if (position === 0) {
      if (this.root) {
        if (this.length === 1) {
          this.root = null
          this.tail = null
        } else {
          this.root = this.root.next
          this.root!.pre = null
        }
      }
    } else if (position === this.length - 1) {
      this.tail = this.tail!.pre
      this.tail!.next = null
    } else {
      while (idx++ < position) {
        pre = current
        current = current!.next
      }

      pre!.next = current!.next
      current!.next!.pre = pre
    }

    this.length--
    return remove = current
  }
}
