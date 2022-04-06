import Stack from './index'

const s = new Stack()

s.push('dengwenjie')
s.push('ww')
s.push('zhaosi')
s.push('xiaowang')
console.log(s.arr)

console.log(s.pop())
console.log(s.arr)

console.log(s.peek())

console.log(s.isEmpty())

console.log(s.size())
