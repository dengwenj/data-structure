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
  // get：获取对应位置的元素
  // indexOf：返回元素在列表中的索引，没有该元素返回 -1
  // update：更新某个位置的元素
  // removeAt：从列表的特定位置移除一项
  // isEmpty：看链表中有没有元素
  // size：链表的元素个数
}