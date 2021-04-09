const ListNode = require('../extensions/list-node');
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

class Queue {
  constructor() {
    this.length = 0;
    this.start = null;
    this.end = null;
  }

  set size(n) {
    this.length = n;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const newElement = new ListNode(element);
    if (this.size === 0) {
      this.end = newElement;
      this.start = newElement;
    } else {
      this.end.next = newElement;
      this.end = newElement;
    }
    this.size++;
  }

  dequeue() {
    const removedData = this.start.value;
    this.start = this.start.next;
    this.size--;
    return removedData;
  }
}

module.exports = Queue;
