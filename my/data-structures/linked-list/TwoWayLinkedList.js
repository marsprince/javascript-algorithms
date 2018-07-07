import TwoWayNode from './TwoWayNode';
import SinglyNode from "./SinglyNode";

export default class TwoWayLinkedList {
  constructor(node = null) {
    this.head = node;
  }

  append(value) {
    if (this.head === null) {
      this.head = new TwoWayNode(value);
    } else {
      const tail = this.tail();
      tail.next = new TwoWayNode(value, null, tail);
    }
    return this;
  }

  reverse() {
    let result = null;
    for (let node = this.head; node; node = node.next) {
      result = new TwoWayNode(node.value, result, node);
    }
    this.head = result;
    return this;
  }

  tail() {
    if (!this.head) return null;
    for (let node = this.head; ; node = node.next) {
      if (node.next === null) {
        return node;
      }
    }
  }
}
