import HashTable, { hashFunc } from '.'

// console.log(hashFunc('dwj', 10));
// console.log(hashFunc('zww', 10));
// console.log(hashFunc('hmm', 10));
// console.log(hashFunc('wxr', 10));

const hashTable = new HashTable()

hashTable.put('name', 'dwj')

hashTable.put('age', '22')
hashTable.put('sex', '男')
console.log(hashTable.storage)
hashTable.put('name', 'ww')
console.log(hashTable.storage)
