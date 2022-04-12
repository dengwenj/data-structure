export default class ArrayList {
  array: number[]

  constructor() {
    this.array = []
  }

  insert(item: number) {
    this.array.push(item)
  }

  // 冒泡排序

  // 选择排序

  // 插入排序

  // 希尔排序

  // 快速排序
}

const al = new ArrayList()
al.insert(10)
al.insert(32)
al.insert(9)
al.insert(12)
al.insert(245)
al.insert(123)
al.insert(541)
al.insert(1218)
console.log(al.array.join('-'))
