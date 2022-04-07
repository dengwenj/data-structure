export default class Queue {
  arr: any[]

  constructor() {
    this.arr = []
  }

  // addQueue：向队列尾部添加一个新的元素
  addQueue(element: any) {
    this.arr.push(element)
  }

  // removeQueue：移除队列的第一个元素
  removeQueue() {
    if (this.isEmpty()) return null
    return this.arr.shift()
  }

  // 返回队列的第一个元素
  front() {
    if (this.isEmpty()) return null
    return this.arr[0]
  }

  // 判断队列是否为空
  isEmpty() {
    return this.arr.length === 0
  }

  // 队列里有多少元素
  size() {
    return this.arr.length
  }
}
