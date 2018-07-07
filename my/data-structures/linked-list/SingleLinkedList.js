import LinkedListNode from './LinkedListNode';

export default class SingleLinkedList {
  constructor(node) {
    this.head = node;
  }

  reverse() {
    let result = null;
    for (let node = this.head; node; node = node.next) {
      result = new LinkedListNode(node.value, result);
    }
    this.head = result;
    return this;
  }

  tail() {
    for (let node = this.head; ; node = node.next) {
      if (node.next === null) {
        return node;
      }
    }
  }

  length() {
    for (let node = this.head, count = 1; ; node = node.next, count += 1) {
      if (node.next === null) {
        return count;
      }
    }
  }

  get(position) {
    for (let node = this.head, count = 0; ; node = node.next, count += 1) {
      if (count === position) {
        return node;
      }
    }
  }
}
