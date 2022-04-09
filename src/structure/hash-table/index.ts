export function hashFunc(str: string, max: number) {
  let hashCode = 0

  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i)
  }

  hashCode = hashCode % max

  return hashCode
}


type Arr = [string, unknown][]
export default class HashTable {
  storage: Arr[]
  count: number
  limit: number

  constructor() {
    this.storage = []
    this.count = 0
    this.limit = 10
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
    }
  }
}
