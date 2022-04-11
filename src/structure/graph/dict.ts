export default class Dictionay {
  items: Record<string, string[]>

  constructor() {
    this.items = {}
  }

  set(key: string, value: string[]) {
    this.items[key] = value
  }

  has(key: string) {
    let hasKey = false
    const keyArr = Object.keys(this.items)

    for (let i = 0; i < keyArr.length; i++) {
      if (key === keyArr[i]) {
        return hasKey = true
      }
      hasKey = false
    }

    return hasKey
  }

  remove(key: string) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }

    return false
  }

  get(key: string) {
    if (!this.has(key)) return

    return this.items[key]
  }

  keys() {
    return Object.keys(this.items)
  }

  values() {
    return Object.values(this.items)
  }

  size() {
    return Object.keys(this.items).length
  }

  clear() {
    this.items = {}
  }
}
