const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
const removeKFromList = (l, k) => {
  let node = l;
  let prev;
  let isNotDone = true;
  while (isNotDone) {
    while (node.value !== k) {
      if (node.next !== null) {
        prev = node;
        node = node.next;
      } else break;
    }
    
    if (node.value !== k && node.next === null) break;

    if (prev) {
      prev.next = node.next ? node.next : null;
      if (prev.next) {
        node = prev.next;
      }
    } else {
      l = node.next;
      node = l;
    }
    isNotDone = node.next ? true : false;
  }
  return l;
}

module.exports = {
  removeKFromList
};
