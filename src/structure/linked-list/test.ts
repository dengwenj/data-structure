import LinkedList from "."

const linkedList = new LinkedList()

linkedList.append('dengwj')
linkedList.append('ww')
linkedList.append('wangxiaoer')
linkedList.append('hmm')
console.log(linkedList)

linkedList.insert(0, 'jknw')
linkedList.insert(2, 'dddd')
console.log(linkedList)

console.log(linkedList.get(2))
console.log(linkedList.get(1))

console.log(linkedList.indexOf('dddd'))
console.log(linkedList.indexOf('hhhh'))

console.log(linkedList.update(2, 'xxx'))
