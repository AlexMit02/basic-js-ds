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
     
        this.rootNode = new Node(data);
     } else {
        let current = this.rootNode;
       while (true) { 
          if (data > current.data) {
            if (current.right === null) {
                current.right === new Node (data);
                break;
            } else {

              current = current.right;
            }
          } else if (data < current.data) {
              if (current.left === null) {
                current.left = new Node(data);
                break;
              } else {
                current = current.left;
              }

          }

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
tree.add(9);
console.log(JSON.stringify(tree))
