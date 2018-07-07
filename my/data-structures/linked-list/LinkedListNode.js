export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(cb) {
    return cb ? cb.call(this, this.value) : this.value.toString();
  }
}
