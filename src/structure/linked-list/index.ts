interface INode {
  element: unknown
  next: INode | null
  pre?: INode | null
}

export class Node {
  element: unknown
  next: INode | null
  pre?: INode | null

  constructor(element: unknown) {
    this.element = element
    this.next = null
  }
}

export default class LinkedList {
  root: INode | null
  tail?: INode | null
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
    if (!this.root) {
      this.root = newNode
    } else {
      // linkedList.root 不为空
      let current = this.root
      while (current.next) {
        current = current.next
      }

      // current.next 为 null
      current.next = newNode
    }
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
  indexOf(element: any) {
    if (!element) throw `${element} is not allow`

    let idx = 0
    let current = this.root
    while (current!.element !== element && current!.next !== null) {
      current = current!.next
      idx++
    }

    if (current!.element === element) {
      return idx
    }
    return -1
  }

  // update：更新某个位置的元素
  update(position: number, element: any) {
    if (position < 0 || position > this.length - 1) return null

    let idx = 0
    let current = this.root
    while (idx++ < position) {
      current = current!.next
    }

    current!.element = element

    return current
  }

  // removeAt：从列表的特定位置移除一项
  removeAt(position: number) {
    if (position < 0 || position > this.length - 1) return false

    let remove
    let idx = 0
    let pre = null
    let current = this.root
    if (position === 0) {
      this.root = current!.next
      remove = current
    } else {
      while (idx++ < position) {
        pre = current
        current = current!.next
      }

      remove = current
      pre!.next = current!.next
    }

    this.length--
    return remove
  }

  remove(element: any) {
    const idx = this.indexOf(element)

    return this.removeAt(idx)
  }

  // isEmpty：看链表中有没有元素
  isEmpty() {
    return this.length === 0
  }
  // size：链表的元素个数
  size() {
    return this.length
  }
}