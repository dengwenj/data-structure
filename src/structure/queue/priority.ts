import Queue from "."

class QueueElement {
  element: unknown
  priority: number

  constructor(element: unknown, priority: number) {
    this.element = element
    this.priority =  priority
  }
}

class Priority extends Queue {
  enQueue(element: unknown, priority: number) {
    const queueElement = new QueueElement(element, priority)

    if (this.isEmpty()) {
      this.addQueue(queueElement)
    } else {
      let isAdd = false

      for (let i = 0; i < this.arr.length; i++) {
        if (this.arr[i].priority > priority) {
          this.arr.splice(i, 0, queueElement)
          isAdd = true
        }
        break
      }

      // 没进入 if 里面就加入到最后
      if (!isAdd) {
        this.addQueue(queueElement)
      }
    }
  }
}

const p = new Priority()

p.enQueue('xiaodeng', 110)
p.enQueue('xiaozheng', 100)
p.enQueue('xiaowang', 120)
p.enQueue('xiaoli', 150)

console.log(p.arr)
