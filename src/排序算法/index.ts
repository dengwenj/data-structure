export default class ArrayList {
  array: number[]

  constructor() {
    this.array = []
  }

  insert(item: number) {
    this.array.push(item)
  }

  swap(m: number, n: number) {
    let temp = this.array[m]
    this.array[m] = this.array[n]
    this.array[n] = temp
  }

  // 冒泡排序
  bubbleSort() {
    for (let j = this.array.length - 1; j >= 0; j--) {
      for (let i = 0; i < j; i++) {
        if (this.array[i] > this.array[i + 1]) {
          this.swap(i, i + 1)
        }
      }
    }
  }

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
al.insert(1120)
console.log(al.array.join('-'))

al.bubbleSort()
console.log(al.array.join('-'))
