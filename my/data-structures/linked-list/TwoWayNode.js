export default class TwoWayNode {
  constructor(value, next = null, pre = null) {
    this.value = value;
    this.next = next;
    this.pre = pre;
  }

  toString(cb) {
    return cb ? cb.call(this, this.value) : this.value.toString();
  }
}
