import Linked from './linearobj.js';

// // Reference: https://jestjs.io/docs/en/using-matchers
test('Check the LIFO class instantiation', () => {

    const list = new Linked.LIFO();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
    expect(list.current).toBe(null);
    expect(list.size).toBe(0);
});

test('Check the LIFO class push method', () => {

    const stack = new Linked.LIFO();    
    let item = stack.push("Test",10);
    let top = item;
    let bottom = item;
    expect(stack.head).toEqual(bottom);    
    expect(stack.tail).toEqual(top);
    expect(stack.current).toEqual(item);
    expect(stack.current.subject).toEqual("Test");
    expect(stack.current.amount).toEqual(10);
    expect(stack.size).toEqual(1);

    item = stack.push("Test2",20);
    top = item;
    expect(stack.head).toEqual(bottom);    
    expect(stack.tail).toEqual(top);
    expect(stack.current).toEqual(item);
    expect(stack.current.subject).toEqual("Test2");
    expect(stack.current.amount).toEqual(20);
    expect(stack.size).toEqual(2);
    
    item = stack.push("Test3",30);
    top = item;
    expect(stack.head).toEqual(bottom);    
    expect(stack.tail).toEqual(top);
    expect(stack.current).toEqual(item);
    expect(stack.current.subject).toEqual("Test3");
    expect(stack.current.amount).toEqual(30);   
    expect(stack.size).toEqual(3);  
});

test('Check the LIFO class pop method', () => {

    const stack = new Linked.LIFO();    
    let item = stack.push("Test",10);    
    let bottom = item;
    item = stack.push("Test2",20);
    item = stack.push("Test3",30);
    let top = item;
    expect(stack.head).toEqual(bottom);    
    expect(stack.tail).toEqual(top);
    expect(stack.current).toEqual(item);
    expect(stack.current.subject).toEqual("Test3");
    expect(stack.current.amount).toEqual(30);
    expect(stack.size).toEqual(3);       

    item = stack.pop();
    top = item;
    expect(stack.head).toEqual(bottom);    
    expect(stack.tail).toEqual(top);
    expect(stack.current).toEqual(item);
    expect(stack.current.subject).toEqual("Test2");
    expect(stack.current.amount).toEqual(20);
    expect(stack.size).toEqual(2);
    
    item = stack.pop();
    top = item;
    expect(stack.head).toEqual(bottom);    
    expect(stack.tail).toEqual(top);
    expect(stack.current).toEqual(item);
    expect(stack.current.subject).toEqual("Test");
    expect(stack.current.amount).toEqual(10);
    expect(stack.size).toEqual(1);
    
    item = stack.pop();
    top = item;
    expect(stack.head).toEqual(null);    
    expect(stack.tail).toEqual(null);
    expect(stack.current).toEqual(null);  
    expect(stack.size).toEqual(0);
});

test('Check the FIFO class instantiation', () => {

    const queue = new Linked.FIFO();
    expect(queue.head).toBe(null);
    expect(queue.tail).toBe(null);
    expect(queue.current).toBe(null);
    expect(queue.size).toBe(0);
});

test('Check the FIFO class enqueue method', () => {

    const queue = new Linked.FIFO();    
    let item = queue.enqueue("Test",10);
    let first = item;
    let last = item;
    expect(queue.head).toEqual(first);    
    expect(queue.tail).toEqual(last);
    expect(queue.current).toEqual(item);
    expect(queue.current.subject).toEqual("Test");
    expect(queue.current.amount).toEqual(10);
    expect(queue.size).toEqual(1);

    item = queue.enqueue("Test2",20);
    last = item;
    expect(queue.head).toEqual(first);    
    expect(queue.tail).toEqual(last);
    expect(queue.current).toEqual(item);
    expect(queue.current.subject).toEqual("Test2");
    expect(queue.current.amount).toEqual(20);
    expect(queue.size).toEqual(2);
    
    item = queue.enqueue("Test3",30);
    last = item;
    expect(queue.head).toEqual(first);    
    expect(queue.tail).toEqual(last);
    expect(queue.current).toEqual(item);
    expect(queue.current.subject).toEqual("Test3");
    expect(queue.current.amount).toEqual(30);   
    expect(queue.size).toEqual(3);  
});

test('Check the FIFO class dequeue method', () => {

    const queue = new Linked.FIFO();    
    let item = queue.enqueue("Test",10);    
    let first = item;
    item = queue.enqueue("Test2",20);
    item = queue.enqueue("Test3",30);
    let last = item;
    expect(queue.head).toEqual(first);    
    expect(queue.tail).toEqual(last);
    expect(queue.current).toEqual(item);
    expect(queue.current.subject).toEqual("Test3");
    expect(queue.current.amount).toEqual(30);
    expect(queue.size).toEqual(3);       

    item = queue.dequeue();
    first = item;
    expect(queue.head).toEqual(first);    
    expect(queue.tail).toEqual(last);
    expect(queue.current).toEqual(item);
    expect(queue.current.subject).toEqual("Test2");
    expect(queue.current.amount).toEqual(20);
    expect(queue.size).toEqual(2);
    
    item = queue.dequeue();
    first = item;
    expect(queue.head).toEqual(first);    
    expect(queue.tail).toEqual(last);
    expect(queue.current).toEqual(item);
    expect(queue.current.subject).toEqual("Test3");
    expect(queue.current.amount).toEqual(30);
    expect(queue.size).toEqual(1);
    
    item = queue.dequeue();
    last = item;
    expect(queue.head).toEqual(null);    
    expect(queue.tail).toEqual(null);
    expect(queue.current).toEqual(null);  
    expect(queue.size).toEqual(0);
});