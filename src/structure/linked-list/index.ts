interface INode {
  element: unknown
  next: INode | null
}

class Node {
  element: unknown
  next: INode | null

  constructor(element: unknown) {
    this.element = element
    this.next = null
  }
}

export default class LinkedList {
  root: INode | null
  length: number

  constructor() {
    this.root = null
    this.length = 0
  }

  // append：向列表尾部添加一个新的项
  append(element: unknown) {
    this.length++

    const newNode = new Node(element)

    // linkedList.root 为空
    if (!this.root) return this.root = newNode

    // linkedList.root 不为空
    let current = this.root
    while (current.next) {
      current = current.next
    }

    // current.next 为 null
    current.next = newNode
  }

  // insert：向列表的特定位置插入一个新的项
  insert(position: number, element: any) {
    const newNode = new Node(element)

    if (position < 0 || position > this.length) return false

    if (position === 0) {
      newNode.next = this.root
      this.root = newNode
    } else {
      // 插入其他位置
      let idx = 0
      let pre = null
      let current = this.root
      while (idx++ < position) {
        pre = current
        current = current!.next
      }

      pre!.next = newNode
      newNode.next = current
    }

    this.length++
    return true
  }

  // get：获取对应位置的元素
  get(position: number) {
    if (position < 0 || position > this.length - 1) return null

    let idx = 0
    let current = this.root
    while (idx++ < position) {
      current = current!.next
    }

    return current!.element
  }

  // indexOf：返回元素在列表中的索引，没有该元素返回 -1
  // update：更新某个位置的元素
  // removeAt：从列表的特定位置移除一项
  // isEmpty：看链表中有没有元素
  // size：链表的元素个数
}