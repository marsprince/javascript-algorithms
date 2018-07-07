import SinglyNode from './SinglyNode';
import Comparator from '../../utils/comparator/Comparator';

export default class SinglyLinkedList {
  constructor(node = null, comparatorFunction) {
    this.head = node;
    this.compare = new Comparator(comparatorFunction);
  }

  reverse() {
    let result = null;
    for (let node = this.head; node; node = node.next) {
      result = new SinglyNode(node.value, result);
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

  remove(position) {
    return this;
  }

  delete(value) {
    if (!this.head) return null;
    let deleteNode = null;
    for (let node = this.head, pre = this.head; node !== null; node = node.next) {
      if (node.value === value) {
        if (node === this.head) {
          this.head = node.next;
          pre = node;
        } else {
          pre.next = node.next;
        }
        deleteNode = node;
      } else {
        pre = node;
      }
    }
    return deleteNode;
  }

  deleteTail() {
    if (!this.head) return null;
    if (this.head.next === null) {
      const deleteNode = this.head;
      this.head = null;
      return deleteNode;
    }
    for (let node = this.head, pre = this.head; node !== null; pre = node, node = node.next) {
      if (node.next === null) {
        pre.next = null;
        return node;
      }
    }
    return null;
  }

  deleteHead() {
    if (!this.head) return null;
    const deletedNode = this.head;
    this.head = this.head.next;
    return deletedNode;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new SinglyNode(value, null);
    } else {
      const newHead = new SinglyNode(value, this.head);
      this.head = newHead;
    }
    return this;
  }

  append(value) {
    if (this.head === null) {
      this.head = new SinglyNode(value, null);
    } else {
      this.tail().next = new SinglyNode(value, null);
    }
    return this;
  }

  find({value = undefined, callback = undefined}) {
    if (!this.head) return null;
    for (let node = this.head; node !== null; node = node.next) {
      if (callback ? callback(node.value) : this.compare.equal(node.value, value)) {
        return node;
      }
    }
    return null;
  }

  toString(cb) {
    const strArr = [];
    for (let node = this.head; node !== null; node = node.next) {
      strArr.push(cb ? cb(node.value) : node.value.toString());
    }
    return strArr.join(',');
  }
}
