import SinglyLinkedList from '../SinglyLinkedList';
import SinglyNode from '../SinglyNode';

const head = new SinglyNode(0);
[1, 2, 3, 4, 5].reduce((total, currentValue) => {
  total.next = new SinglyNode(currentValue);
  return total.next;
}, head);

describe('SinglyNode', () => {
  it('should create single linkedList with head', () => {
    const singleLinkedList = new SinglyLinkedList(head);
    expect(singleLinkedList.head.value).toBe(0);
    expect(singleLinkedList.length()).toBe(6);
  });
  it('should get single linkedList head', () => {
    const singleLinkedList = new SinglyLinkedList(head);
    expect(singleLinkedList.get(0).value).toBe(0);
    expect(singleLinkedList.tail().value).toBe(5);
  });
  it('should revert single linkedList', () => {
    const singleLinkedList = new SinglyLinkedList(head);
    singleLinkedList.reverse();
    expect(singleLinkedList.get(0).value).toBe(5);
    expect(singleLinkedList.get(5).value).toBe(0);
    singleLinkedList.reverse();
    expect(singleLinkedList.get(0).value).toBe(0);
    expect(singleLinkedList.get(5).value).toBe(5);
  });
  it('should append node to linked list', () => {
    const singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.head).toBeNull();
    expect(singlyLinkedList.tail()).toBeNull();

    singlyLinkedList.append(1);
    singlyLinkedList.append(2);

    expect(singlyLinkedList.toString()).toBe('1,2');
  });
  it('should prepend node to linked list', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.prepend(2);
    expect(singlyLinkedList.head.toString()).toBe('2');
    expect(singlyLinkedList.tail().toString()).toBe('2');

    singlyLinkedList.append(1);
    singlyLinkedList.prepend(3);

    expect(singlyLinkedList.toString()).toBe('3,2,1');
  });
  it('should delete node by value from linked list', () => {
    const singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.delete(5)).toBeNull();

    singlyLinkedList.append(1);
    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(3);
    singlyLinkedList.append(3);
    singlyLinkedList.append(3);
    singlyLinkedList.append(4);
    singlyLinkedList.append(5);

    expect(singlyLinkedList.head.toString()).toBe('1');
    expect(singlyLinkedList.tail().toString()).toBe('5');

    const deletedNode = singlyLinkedList.delete(3);
    expect(deletedNode.value).toBe(3);
    expect(singlyLinkedList.toString()).toBe('1,1,2,4,5');

    singlyLinkedList.delete(3);
    expect(singlyLinkedList.toString()).toBe('1,1,2,4,5');

    singlyLinkedList.delete(1);
    expect(singlyLinkedList.toString()).toBe('2,4,5');

    expect(singlyLinkedList.head.toString()).toBe('2');
    expect(singlyLinkedList.tail().toString()).toBe('5');

    singlyLinkedList.delete(5);
    expect(singlyLinkedList.toString()).toBe('2,4');

    expect(singlyLinkedList.head.toString()).toBe('2');
    expect(singlyLinkedList.tail().toString()).toBe('4');

    singlyLinkedList.delete(4);
    expect(singlyLinkedList.toString()).toBe('2');

    expect(singlyLinkedList.head.toString()).toBe('2');
    expect(singlyLinkedList.tail().toString()).toBe('2');

    singlyLinkedList.delete(2);
    expect(singlyLinkedList.toString()).toBe('');
  });
  it('should delete linked list tail', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList.append(1);
    singlyLinkedList.append(2);
    singlyLinkedList.append(3);

    expect(singlyLinkedList.head.toString()).toBe('1');
    expect(singlyLinkedList.tail().toString()).toBe('3');

    const deletedNode1 = singlyLinkedList.deleteTail();

    expect(deletedNode1.value).toBe(3);
    expect(singlyLinkedList.toString()).toBe('1,2');
    expect(singlyLinkedList.head.toString()).toBe('1');
    expect(singlyLinkedList.tail().toString()).toBe('2');

    const deletedNode2 = singlyLinkedList.deleteTail();

    expect(deletedNode2.value).toBe(2);
    expect(singlyLinkedList.toString()).toBe('1');
    expect(singlyLinkedList.head.toString()).toBe('1');
    expect(singlyLinkedList.tail().toString()).toBe('1');

    const deletedNode3 = singlyLinkedList.deleteTail();

    expect(deletedNode3.value).toBe(1);
    expect(singlyLinkedList.toString()).toBe('');
    expect(singlyLinkedList.head).toBeNull();
    expect(singlyLinkedList.tail()).toBeNull();
  });
  it('should delete linked list head', () => {
    const singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.deleteHead()).toBeNull();

    singlyLinkedList.append(1);
    singlyLinkedList.append(2);

    expect(singlyLinkedList.head.toString()).toBe('1');
    expect(singlyLinkedList.tail().toString()).toBe('2');

    const deletedNode1 = singlyLinkedList.deleteHead();

    expect(deletedNode1.value).toBe(1);
    expect(singlyLinkedList.toString()).toBe('2');
    expect(singlyLinkedList.head.toString()).toBe('2');
    expect(singlyLinkedList.tail().toString()).toBe('2');

    const deletedNode2 = singlyLinkedList.deleteHead();

    expect(deletedNode2.value).toBe(2);
    expect(singlyLinkedList.toString()).toBe('');
    expect(singlyLinkedList.head).toBeNull();
    expect(singlyLinkedList.tail()).toBeNull();
  });
  it('should be possible to store objects in the list and to print them out', () => {
    const singlyLinkedList = new SinglyLinkedList();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };

    singlyLinkedList
    .append(nodeValue1)
    .prepend(nodeValue2);

    const nodeStringifier = value => `${value.key}:${value.value}`;

    expect(singlyLinkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  });
  it('should find node by value', () => {
    const singlyLinkedList = new SinglyLinkedList();

    expect(singlyLinkedList.find({ value: 5 })).toBeNull();

    singlyLinkedList.append(1);
    expect(singlyLinkedList.find({ value: 1 })).toBeDefined();

    singlyLinkedList
    .append(2)
    .append(3);

    const node = singlyLinkedList.find({ value: 2 });

    expect(node.value).toBe(2);
    expect(singlyLinkedList.find({ value: 5 })).toBeNull();
  });
  it('should find node by callback', () => {
    const singlyLinkedList = new SinglyLinkedList();

    singlyLinkedList
    .append({ value: 1, key: 'test1' })
    .append({ value: 2, key: 'test2' })
    .append({ value: 3, key: 'test3' });

    const node = singlyLinkedList.find({ callback: value => value.key === 'test2' });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.key).toBe('test2');
    expect(singlyLinkedList.find({ callback: value => value.key === 'test5' })).toBeNull();
  });
  it('should find node by means of custom compare function', () => {
    const comparatorFunction = (a, b) => {
      if (a.customValue === b.customValue) {
        return 0;
      }

      return a.customValue < b.customValue ? -1 : 1;
    };

    const singlyLinkedList = new SinglyLinkedList(null, comparatorFunction);

    singlyLinkedList
    .append({ value: 1, customValue: 'test1' })
    .append({ value: 2, customValue: 'test2' })
    .append({ value: 3, customValue: 'test3' });

    const node = singlyLinkedList.find({
      value: { value: 2, customValue: 'test2' },
    });

    expect(node).toBeDefined();
    expect(node.value.value).toBe(2);
    expect(node.value.customValue).toBe('test2');
    expect(singlyLinkedList.find({ value: 2, customValue: 'test5' })).toBeNull();
  });
});
