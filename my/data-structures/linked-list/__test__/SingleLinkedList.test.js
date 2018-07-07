import SingleLinkedList from '../SingleLinkedList';
import LinkedListNode from '../LinkedListNode';

const head = new LinkedListNode(0);
[1, 2, 3, 4, 5].reduce((total, currentValue) => {
  total.next = new LinkedListNode(currentValue);
  return total.next;
}, head);

describe('LinkedListNode', () => {
  it('should create single linkedList with head', () => {
    const singleLinkedList = new SingleLinkedList(head);
    expect(singleLinkedList.head.value).toBe(0);
  });
  it('should get single linkedList head', () => {
    const singleLinkedList = new SingleLinkedList(head);
    expect(singleLinkedList.get(0).value).toBe(0);
  });
  it('should revert single linkedList', () => {
    const singleLinkedList = new SingleLinkedList(head);
    singleLinkedList.reverse();
    expect(singleLinkedList.get(0).value).toBe(5);
    expect(singleLinkedList.get(5).value).toBe(0);
    singleLinkedList.reverse();
    expect(singleLinkedList.get(0).value).toBe(0);
    expect(singleLinkedList.get(5).value).toBe(5);
  });
});
