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
    expect(list.size).toBe(0);
});

test('Check the ListNode class insert method', () => {

    const list = new Linked.LinkedList();
    let currentNode = list.insert("Test",10);
    expect(list.head).not.toBe(null);
    expect(list.head.subject).toBe("Test");
    expect(list.head.amount).toBe(10);
    expect(list.head).toEqual(currentNode);
    expect(list.current).toEqual(currentNode);
    expect(list.tail).toEqual(currentNode);
    expect(list.size).toBe(1);

    currentNode = list.insert("Test2",20);
    expect(list.current.subject).toBe("Test2");
    expect(list.current.amount).toBe(20);
    expect(list.current.backwardNode).toEqual(list.head);    
    expect(list.head.forwardNode).toEqual(currentNode);
    expect(list.current).toEqual(currentNode); 
    expect(list.tail).toEqual(currentNode);
    expect(list.size).toBe(2);    

    let prevnode = currentNode;       
    currentNode = list.insert("Test3",30);
    expect(list.current.subject).toBe("Test3");
    expect(list.current.amount).toBe(30);
    expect(list.current.backwardNode).toEqual(prevnode);    
    expect(prevnode.forwardNode).toEqual(currentNode);
    expect(list.current).toEqual(currentNode);        
    expect(list.tail).toEqual(currentNode);
    expect(list.size).toBe(3);

    prevnode = currentNode;       
    currentNode = list.insert("Test4",40);
    expect(list.current.subject).toBe("Test4");
    expect(list.current.amount).toBe(40);
    expect(list.current.backwardNode).toEqual(prevnode);    
    expect(prevnode.forwardNode).toEqual(currentNode);
    expect(list.current).toEqual(currentNode);        
    expect(list.tail).toEqual(currentNode);
    expect(list.size).toBe(4);    
});

test('Check the ListNode class first method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    list.insert("Test2",20);
    list.insert("Test3",30);
    let node = list.first();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);

    list.insert("Test4",40);
    node = list.first();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);
    expect(node.forwardNode.subject).toBe("Test4");    
    expect(node.forwardNode.amount).toBe(40);
    
    list.insert("Test5",50);
    node = list.first();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);
    expect(node.forwardNode.subject).toBe("Test5");    
    expect(node.forwardNode.amount).toBe(50);    
});

test('Check the ListNode class last method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    let node = list.last();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);   
    list.insert("Test2",20);
    node = list.last();
    expect(node.subject).toBe("Test2");
    expect(node.amount).toBe(20);       
    list.insert("Test3",30);
    node = list.last();
    expect(node.subject).toBe("Test3");
    expect(node.amount).toBe(30);           
});

test('Check the ListNode class next method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    list.insert("Test2",20);
    list.insert("Test3",30);
    list.insert("Test4",40);
    let node = list.first();
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);
    node = list.next();    
    expect(node.subject).toBe("Test2");
    expect(node.amount).toBe(20);
    node = list.next();    
    expect(node.subject).toBe("Test3");
    expect(node.amount).toBe(30);
    node = list.next();    
    expect(node.subject).toBe("Test4");
    expect(node.amount).toBe(40);        
});

test('Check the ListNode class previous method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    list.insert("Test2",20);
    list.insert("Test3",30);
    list.insert("Test4",40);
    let node = list.previous();
    expect(node.subject).toBe("Test3");
    expect(node.amount).toBe(30);
    node = list.previous();    
    expect(node.subject).toBe("Test2");
    expect(node.amount).toBe(20);
    node = list.previous();    
    expect(node.subject).toBe("Test");
    expect(node.amount).toBe(10);     
});

test('Check the ListNode class show method', () => {

    const list = new Linked.LinkedList();    
    list.insert("Test",10);    
    let result = list.show();
    expect(result.subject).toBe("Test");
    expect(result.amount).toBe(10);
    list.insert("Test2",20);    
    result = list.show();
    expect(result.subject).toBe("Test2");
    expect(result.amount).toBe(20);  
    list.insert("Test3",30);    
    result = list.show();
    expect(result.subject).toBe("Test3");
    expect(result.amount).toBe(30);            
});

test('Check the ListNode class delete method', () => {

    const list = new Linked.LinkedList();    
    list.insert("Test",10);    
    list.insert("Test2",20);
    list.insert("Test3",30);
    list.insert("Test4",40);
    list.insert("Test5",50);
    expect(list.size).toBe(5);
    let current = list.delete();        
    expect(current.subject).toBe("Test4");
    expect(current.amount).toBe(40);
    expect(list.size).toBe(4);
    current = list.delete();        
    expect(current.subject).toBe("Test3");
    expect(current.amount).toBe(30);
    expect(list.size).toBe(3);
    list.previous();
    current = list.delete();        
    expect(current.subject).toBe("Test");
    expect(current.amount).toBe(10);
    expect(list.size).toBe(2);
    current = list.delete();        
    expect(current.subject).toBe("Test3");
    expect(current.amount).toBe(30);                          
    expect(list.size).toBe(1);
    list.delete();
    expect(list.head).toBe(null);
    expect(list.current).toBe(null);                          
    expect(list.tail).toBe(null);                          
    expect(list.size).toBe(0);
});


test('Check the ListNode class showtotal method', () => {

    const list = new Linked.LinkedList();
    list.insert("Test",10);
    list.insert("Test2",20);
    list.insert("Test3",30);
    list.insert("Test4",40);
    expect(list.showtotal()).toBe(100);
    list.insert("Test5",100);
    expect(list.showtotal()).toBe(200);    
    list.previous();
    list.previous();
    list.delete();
    expect(list.showtotal()).toBe(170);    
});