const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  ROOT = null;

  root() {
    return this.ROOT;
  }

  add(data) {
    this.ROOT = addData(this.ROOT, data);

    function addData(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addData(node.left, data);
      } else {
        node.right = addData(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    if (this.find(data)) {
      return true;
    } else {
      return false;
    }
  }

  find(data) {
    return findData(this.ROOT, data);
    function findData(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        return findData(node.left, data);
      } else {
        return findData(node.right, data);
      }
    }
  }

  remove(data) {
    this.ROOT = removeData(this.ROOT, data);

    function removeData(node, data) {
      if (!node) {
        return null;
      }

      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        let minRight = node.right;

        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.ROOT) {
      return;
    }

    let node = this.ROOT;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.ROOT) {
      return;
    }

    let node = this.ROOT;

    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};