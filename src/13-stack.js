/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.StackItem = function StackItem (data) {
      this.data = data;
      this.next = null;
    };
    this.size = 0;
    this.head = null;
  }

  push(element) {
    const newItem = new this.StackItem(element);
    newItem.next = this.head;
    this.head = newItem;
    this.size++;
  }

  pop() {
    const poppedData = this.head.data;
    this.head = this.head.next;
    return poppedData;
  }

  peek() {
    if (!this.head) return null;
    return this.head.data;
  }
}

module.exports = Stack;
