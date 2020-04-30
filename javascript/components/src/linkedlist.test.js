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


    let item1 = list.insert("Test",10);    
    let item2 = list.insert("Test2",20);
    let item3 = list.insert("Test3",30);
    let item4 = list.insert("Test4",40);
    let item5 = list.insert("Test5",50);
    list.first();
    list.delete();    
    expect(list.head).toEqual(item2);
    expect(list.current).toEqual(item2);                          
    expect(list.tail).toEqual(item5);
    list.first();
    list.delete();    
    expect(list.head).toEqual(item3);
    expect(list.current).toEqual(item3);                          
    expect(list.tail).toEqual(item5); 
    list.first();
    list.delete();    
    expect(list.head).toEqual(item4);
    expect(list.current).toEqual(item4);                          
    expect(list.tail).toEqual(item5); 
    list.first();
    list.delete();    
    expect(list.head).toEqual(item5);
    expect(list.current).toEqual(item5);                          
    expect(list.tail).toEqual(item5);
    list.first();
    list.delete();    
    expect(list.head).toEqual(null);
    expect(list.current).toEqual(null);                          
    expect(list.tail).toEqual(null);                                             
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

test('Check the ListNode class sort method', () => {

    const list = new Linked.LinkedList();
    expect(list.sort()).toBe(null);
    list.insert("Test",10);
    expect(list.sort().amount).toBe(10);
});

test('Check the frontBackSplit function', () => {

    let list = new Linked.LinkedList();    
    let headrefs = Linked.utility.frontBackSplit(list.head);
    expect(headrefs[0]).toBe(null);
    expect(headrefs[1]).toBe(null);

    list.insert("Test",10);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    expect(headrefs[0]).toBe(list.head);
    expect(headrefs[1]).toBe(null);

    list = new Linked.LinkedList();    
    list.insert("Test",10);
    list.insert("Test2",20);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    expect(headrefs[0].amount).toBe(10);
    expect(headrefs[1].amount).toBe(20);    

    list = new Linked.LinkedList();    
    list.insert("Test",10);
    list.insert("Test2",20);    
    list.insert("Test3",30);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    expect(headrefs[0].amount).toBe(10);
    expect(headrefs[1].amount).toBe(30);

    list = new Linked.LinkedList();    
    list.insert("Test",10);
    list.insert("Test2",20);    
    list.insert("Test3",30);    
    list.insert("Test4",40);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    expect(headrefs[0].amount).toBe(10);
    expect(headrefs[1].amount).toBe(30);
    
    list = new Linked.LinkedList();    
    list.insert("Test",10);
    list.insert("Test2",20);    
    list.insert("Test3",30);    
    list.insert("Test4",40);
    list.insert("Test5",50);
    headrefs = Linked.utility.frontBackSplit(list.head);           
    expect(headrefs[0].amount).toBe(10);
    expect(headrefs[0].forwardNode.amount).toBe(20);
    expect(headrefs[0].forwardNode.forwardNode.amount).toBe(30);
    expect(headrefs[0].forwardNode.forwardNode.forwardNode).toBe(null);
    expect(headrefs[1].amount).toBe(40);    
    expect(headrefs[1].forwardNode.amount).toBe(50);
    expect(headrefs[1].backwardNode).toBe(null);    
});

test('Check the SortedMerge function', () => {

    // check TERMINATION CONDITION
    let a = null;
    let b = null;
    const isNumber = true;
    expect(Linked.utility.sortedMerge(a,b,isNumber)).toEqual(null);
    // check BASE CASE
    let list = new Linked.LinkedList();
    list.insert("Test",10);
    a = null;
    b = list.head;
    expect(Linked.utility.sortedMerge(a,b,isNumber)).toEqual(b);    
    a = list.head;
    b = null;
    expect(Linked.utility.sortedMerge(a,b,isNumber)).toEqual(a);

    list.insert("Test2",20);
    a = null;
    b = list.head;
    expect(Linked.utility.sortedMerge(a,b,isNumber)).toEqual(b);    
    a = list.head;
    b = null;
    expect(Linked.utility.sortedMerge(a,b,isNumber)).toEqual(a);

    // check RECURSION    
    let headrefs = Linked.utility.frontBackSplit(list.head);    
    a = headrefs[0];
    b = headrefs[1];
    let result = Linked.utility.sortedMerge(a,b,isNumber);
    expect(result.amount).toEqual(10);
    expect(result.forwardNode.amount).toEqual(20);

    list = new Linked.LinkedList();
    list.insert("Test",20);
    list.insert("Test2",30);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    a = headrefs[0];
    b = headrefs[1];
    result = Linked.utility.sortedMerge(a,b,isNumber);
    expect(result.amount).toEqual(20);
    expect(result.forwardNode.amount).toEqual(30);    

    list = new Linked.LinkedList();
    list.insert("Test4",10);    
    list.insert("Test2",20);
    list.insert("Test3",5);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    a = headrefs[0];
    b = headrefs[1];
    result = Linked.utility.sortedMerge(a,b,isNumber);
    expect(result.amount).toEqual(5);
    expect(result.forwardNode.amount).toEqual(10);    
    expect(result.forwardNode.forwardNode.amount).toEqual(20);     

    list = new Linked.LinkedList();
    list.insert("Test4",30);    
    list.insert("Test",40);    
    list.insert("Test2",10);
    list.insert("Test3",20);
    headrefs = Linked.utility.frontBackSplit(list.head);    
    a = headrefs[0];
    b = headrefs[1];
    result = Linked.utility.sortedMerge(a,b,isNumber);
    expect(result.amount).toEqual(10);
    expect(result.forwardNode.amount).toEqual(20);    
    expect(result.forwardNode.forwardNode.amount).toEqual(30);       
    expect(result.forwardNode.forwardNode.forwardNode.amount).toEqual(40);
});    

test('Check the mergeSort function', () => {

    const isNumber = true;
    
    // check TERMINATION CONDITION
    let list = new Linked.LinkedList();
    let current = Linked.utility.mergeSort(list.head,isNumber);
    expect(current).toBe(null);

    // check BASE CASE
    list.insert("Test",10);
    current = Linked.utility.mergeSort(list.head,isNumber);
    expect(current.amount).toBe(10);    

    // check RECURSION
    list.insert("Test2",30);
    list.insert("Test3",20);
    list.insert("Test4",5);
    current = Linked.utility.mergeSort(list.head,isNumber);
    expect(current.amount).toBe(5);      
    expect(current.forwardNode.amount).toBe(10);
    expect(current.forwardNode.forwardNode.amount).toBe(20);
    expect(current.forwardNode.forwardNode.forwardNode.amount).toBe(30);

    list = new Linked.LinkedList();
    list.insert("Test2",100);
    list.insert("Test3",20);
    list.insert("Test6",50);
    list.insert("Test4",75);
    list.insert("Test5",5);
    list.insert("Test",65);
    current = Linked.utility.mergeSort(list.head,isNumber);
    expect(current.amount).toBe(5);      
    expect(current.forwardNode.amount).toBe(20);
    expect(current.forwardNode.forwardNode.amount).toBe(50);
    expect(current.forwardNode.forwardNode.forwardNode.amount).toBe(65);
    expect(current.forwardNode.forwardNode.forwardNode.forwardNode.amount).toBe(75);
    expect(current.forwardNode.forwardNode.forwardNode.forwardNode.forwardNode.amount).toBe(100);

    list = new Linked.LinkedList();
    list.insert("Test2",30);
    list.insert("Test1",20);
    list.insert("Test4",5);
    list.insert("Test3",10);
    current = Linked.utility.mergeSort(list.head,!isNumber);
    expect(current.subject).toBe("Test1");      
    expect(current.forwardNode.subject).toBe("Test2");
    expect(current.forwardNode.forwardNode.subject).toBe("Test3");
    expect(current.forwardNode.forwardNode.forwardNode.subject).toBe("Test4");
});

test('Check the ListNode class sort method', () => {
    const isNumber = true;
    const list = new Linked.LinkedList();
    list.insert("Test2",30);
    list.insert("Test1",20);
    list.insert("Test4",5);
    list.insert("Test3",10);
    list.sort(!isNumber);
    expect(list.current.subject).toBe("Test1");      
    expect(list.current.forwardNode.subject).toBe("Test2");
    expect(list.current.forwardNode.forwardNode.subject).toBe("Test3");
    expect(list.current.forwardNode.forwardNode.forwardNode.subject).toBe("Test4");
    expect(list.head.subject).toBe("Test1");
    expect(list.tail.subject).toBe("Test4");
    expect(list.current.amount).toBe(20);      
    expect(list.current.forwardNode.amount).toBe(30);
    expect(list.current.forwardNode.forwardNode.amount).toBe(10);
    expect(list.current.forwardNode.forwardNode.forwardNode.amount).toBe(5);        
    expect(list.head.amount).toBe(20);
    expect(list.tail.amount).toBe(5);
    list.sort(isNumber);
    expect(list.current.amount).toBe(5);      
    expect(list.current.forwardNode.amount).toBe(10);
    expect(list.current.forwardNode.forwardNode.amount).toBe(20);
    expect(list.current.forwardNode.forwardNode.forwardNode.amount).toBe(30);
    expect(list.head.amount).toBe(5);
    expect(list.tail.amount).toBe(30);
    expect(list.current.subject).toBe("Test4");      
    expect(list.current.forwardNode.subject).toBe("Test3");
    expect(list.current.forwardNode.forwardNode.subject).toBe("Test1");
    expect(list.current.forwardNode.forwardNode.forwardNode.subject).toBe("Test2");
    expect(list.head.subject).toBe("Test4");
    expect(list.tail.subject).toBe("Test2");            
});