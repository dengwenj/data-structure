export function hashFunc(str: string, max: number) {
  let hashCode = 0

  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i)
  }

  hashCode = hashCode % max

  return hashCode
}

export const isPrime = (num: number) => {
  let temp = Math.ceil(Math.sqrt(num))
  
  for (let i = 2; i < temp; i++) if (num % i === 0) return false
  return true
}

type Arr = [string, unknown][]
export default class HashTable {
  storage: Arr[]
  count: number
  limit: number

  constructor() {
    this.storage = [] // 数组存储元素
    this.count = 0 // 当前存放了多少个元素
    this.limit = 10 // 总个数
  }

  hashFunc(str: string, max: number) {
    let hashCode = 0

    for (let i = 0; i < str.length; i++) {
      hashCode = 31 * hashCode + str.charCodeAt(i)
    }

    hashCode = hashCode % max

    return hashCode
  }

  put(key: string, value: unknown) {
    const idx = this.hashFunc(key, this.limit)

    // item 可以是链表也可以是数组。解决冲突  
    let item = this.storage[idx]
    if (!item) {
      item = []
      this.storage[idx] = item
    }
    
    // 判断 key 是否一样
    let isKeySame = false
    for (let i = 0; i < item.length; i++) {
      if (item[i][0] === key) {
        item[i][1] = value
        isKeySame = true
      }
    }

    if (!isKeySame) {
      item.push([key, value])
      this.count++

      if (this.count > this.limit * 0.75) {
        let newLimit = this.limit * 2
        this.reSize(this.getPrime(newLimit))
      }
    }
  }

  get(key: string) {
    const idx = this.hashFunc(key, this.limit)

    const item = this.storage[idx]
    if (!item) return null

    for (let i = 0; i < item.length; i++) {
      if (item[i][0] === key) {
        return item[i][1]
      }
    }

    return null
  }

  remove(key: string) {
    const idx = this.hashFunc(key, this.limit)

    const item = this.storage[idx]
    if (!item) return null

    for (let i = 0; i < item.length; i++) {
      if (item[i][0] === key) {
        this.count--
        if (this.limit > 10 && this.count < this.limit * 0.25) {
          let newLimit = Math.floor(this.limit / 2)
          this.reSize(this.getPrime(newLimit))
        }

        return item.splice(i, 1)
      }
    }

    return null
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  // 扩容
  reSize(newLimit: number) {
    const oldStorage = this.storage

    // 重置
    this.count = 0
    this.storage = []
    this.limit = newLimit

    oldStorage.forEach((item) => {
      if (!item) return

      for (let i = 0; i < item.length; i++) {
        this.put(item[i][0], item[i][1])
      }
    })
  }

  isPrime(num: number) {
    let temp = Math.ceil(Math.sqrt(num))
    
    for (let i = 2; i < temp; i++) if (num % i === 0) return false
    return true
  }

  getPrime(num: number) {
    while (!isPrime(num)) {
        num++
    }

    return num
  }
}
