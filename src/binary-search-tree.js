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

  has(data) {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    const rnLoop = true;
    while (rnLoop) {
      if (!current) return false;
      if (data === current.data) return true;
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  find(data) 
  {
    if (!this.rootNode) return null;
    let current = this.rootNode;
    while (true) {
      if (data != current) return null;
      if (data === current.data) return current;
      if (data < current.data) {
        current = current.left;
        // return current;
      } else {
        current = current.right; 
        // return current;
      }
    }
  }
  
 
  remove(val, node = this.rootNode) {
    if (!node) {
      return null;
    }

    if (val < node.data) {
      node.left = this.remove(val, node.left);
    } else if (val > node.data) {
      node.right = this.remove(val, node.right);
    } else {
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        node.data = this.min(node.right);
        node.right = this.remove(node.data, node.right);
      }
    }
    return node;
  }

  min(node = this.rootNode) {
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max(node = this.rootNode) {
    if (node.right === null) {
      return node.value;
    }
    return this.max(node.right);
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree()
console.log(tree)
tree.add(9);
console.log(JSON.stringify(tree))
