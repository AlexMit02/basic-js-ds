const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');


class BinarySearchTree {
  constructor() {
    return this.rootNode = null

  }

  root() {
    return this.rootNode
  }

  add(data) {
     if (this.rootNode === null){
        this.rootNode === new Node (data);
      
     } else {
        let current = this.rootNode;
        while (true) {
          
        }

     }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    console.log("55")
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree()
console.log(tree)
console.log("111", tree.root())