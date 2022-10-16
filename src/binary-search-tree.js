const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
  return this.rootNode;
  }

  add(data) {
    const addNode = (node, data) => {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }

    this.rootNode = addNode(this.rootNode, data);
  }

  has(data) {
    const searchNode = (node, data) => {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (node.data > data) {
        return searchNode(node.left, data);
      } else return searchNode(node.right, data);
    }
    return searchNode(this.rootNode, data);
  }

  find(data) {
    if (!this.has(data)) {
      return null;
    }

    const searchNode = (node, data) => {
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return searchNode(node.left, data);
      } else return searchNode(node.right, data);
    }
    return searchNode(this.rootNode, data);
  }

  remove(data) {
    const removeNode = (node, data) => {
      this.checkNull(node);

      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        const minRight = this.getIn(node.right, 'left');
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    this.checkNull(this.rootNode);
    const node = this.getIn(this.rootNode, 'left');
    return node.data;
  }

  max() {
    this.checkNull(this.rootNode);
    const node = this.getIn(this.rootNode, 'right');
    return node.data;
  }

  checkNull(node) {
    if (!node) {
      return null;
    }
  }

  getIn(initialNode, side) {
    let node = initialNode;
    while (node[side]) {
      node = node[side];
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};