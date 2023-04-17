class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  Node
};

const list = new Node(3)
console.log(list);