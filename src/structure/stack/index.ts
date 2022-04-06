export default class Stack {
  arr: string[]

  constructor() {
    this.arr = []
  }

  // push：添加一个新元素到栈的位置
  push(element: string) {
    this.arr.push(element)
  }

  // pop：移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.arr.pop()
  }

  // peek：返回栈顶的元素，查看栈顶的元素
  peek() {
    return this.arr[this.arr.length - 1]
  }

  // isEmpty：如果栈里面没有任何元素就返回 true，反之
  isEmpty() {
    return this.arr.length === 0
  }

  // size：返回栈里面的元素个数
  size() {
    return this.arr.length
  }
}
