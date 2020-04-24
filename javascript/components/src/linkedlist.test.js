import Linked from './linkedlist.js';

// Reference: https://jestjs.io/docs/en/using-matchers
test('Check the ListNode class instantiation', () => {

    const node = new Linked.ListNode("Test",10);
    expect(node.forwardNode).toBe(null);
    expect(node.backwardNode).toBe(null);
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);
});

test('Check the LinkedList class instantiation', () => {

    const list = new Linked.LinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.current).toBe(null);
});

test('Check the ListNode class insert method', () => {

    const list = new Linked.LinkedList();
    let currentNode = list.insert("Test",10);
    expect(list.head).not.toBe(null);
    expect(list.head.subject).toBe("Test");
    expect(list.head.amount).toBe(10);
    expect(list.head).toEqual(currentNode);
    expect(list.tail).toEqual(currentNode);

    currentNode = list.head;
    list.insert("Test2",20);
    currentNode = currentNode.forwardNode;
    expect(currentNode.subject).toBe("Test2");
    expect(currentNode.amount).toBe(20);
    expect(currentNode.backwardNode).toEqual(list.head);    
    expect(list.head.forwardNode).toEqual(currentNode);
    expect(list.tail).toEqual(currentNode);    

    let prevnode = currentNode;       
    currentNode = list.insert("Test3",30);
    expect(currentNode.subject).toBe("Test3");
    expect(currentNode.amount).toBe(30);
    expect(currentNode.backwardNode).toEqual(prevnode);    
    expect(prevnode.forwardNode).toEqual(currentNode);        
    expect(list.tail).toEqual(currentNode);
});

test('Check the ListNode class first method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    let node = list.first();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);

    list.insert("Test2",20);
    node = list.first();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);   
});

test('Check the ListNode class last method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    list.insert("Test2",20);
    let node = list.last();
    expect(node.subject).toBe("Test2");
    expect(node.amount).toBe(20);

    list.insert("Test3",30);
    node = list.last();
    expect(node.subject).toBe("Test3");
    expect(node.amount).toBe(30);   
});