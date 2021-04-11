// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.head = null;
    this.len = 0;
  }

  get size() {
    return this.len;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.len === 0) {
      this.head = node;
      this.len++;
      return;
    }
    let lastQueue = this.head;
    while (lastQueue.next) {
      lastQueue = lastQueue.next;
    }
    lastQueue.next = node;
    this.len++;
  }

  dequeue() {
    const topQueue = this.head;
    this.head = topQueue.next;
    this.len--;
    return topQueue.value;
  }
}

module.exports = Queue;
