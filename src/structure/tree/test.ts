import BinarySearchTree from '.'

const binarySearchTree = new BinarySearchTree()

binarySearchTree.insert(11)
binarySearchTree.insert(7)
binarySearchTree.insert(15)
binarySearchTree.insert(5)
binarySearchTree.insert(3)
binarySearchTree.insert(9)
binarySearchTree.insert(8)
binarySearchTree.insert(10)
binarySearchTree.insert(13)
binarySearchTree.insert(12)
binarySearchTree.insert(14)
binarySearchTree.insert(20)
binarySearchTree.insert(18)
binarySearchTree.insert(25)
binarySearchTree.insert(6)

// binarySearchTree.preOrderTranverse()

console.log(binarySearchTree.max())
console.log(binarySearchTree.min())

console.log(binarySearchTree.search(3))
