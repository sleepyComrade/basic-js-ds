const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let last = this.head;
      while (last.next) {
        last = last.next;
      }
      last.next = new ListNode(value);
    }
  }

  dequeue() {
    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

module.exports = {
  Queue
};
