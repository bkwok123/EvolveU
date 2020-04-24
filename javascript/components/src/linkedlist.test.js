import Linked from './linkedlist.js';

// Reference: https://jestjs.io/docs/en/using-matchers
test('Check the ListNode class instantiation', () => {

    const list = new Linked.ListNode("Test",10);
    expect(list.forwardNode).toBe(null);
    expect(list.backwardNode).toBe(null);
    expect(list.subject).toBe("Test");
    expect(list.amount).toBe(10);
});

test('Check the LinkedList class instantiation', () => {

    const list = new Linked.LinkedList();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
});


// test('Check the ListNode class deposit method', () => {

//     const account = new Account("Saving",20)

//     expect(account.deposit(10)).toBe(30);
//     console.log(account.startingBalance);
//     expect(account.deposit(50)).toBe(80);
//     console.log(account.startingBalance);
// });