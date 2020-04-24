class ListNode {
    constructor(subject, amount) {
        this.forwardNode = null;
        this.backwardNode = null;
        this.subject = subject;
        this.amount = amount;
    }    
}

// Double linked list - Non Circular
class LinkedList {

    constructor() {
        this.head = null;
        this.current = null;
        this.tail = null;
    }

    // Show the subject and the amount
    show() {

    }

    // Position to the first node
    first() {
        return this.head;
    }

    // Position to the last node
    last() {
            return this.tail;
    }
    
    // Move to the next node
    next() {
        return this.current === null ? this.head : this.head.forwardNode;
    }

    // Backup one node
    previous() {
        return this.current === null ? this.current : this.current.backwardNode;
    }

    // Inserts a new node after the current node (which node will be the current node after the insertion?)
    insert(subject, amount) {
        const node = new ListNode(subject,amount);

        if (this.head === null) {
            this.head = node;
        }
        else {
            // start out by looking at the first node
            let current = this.head;  

            // follow `next` links until you reach the end
            while (current.forwardNode !== null) {
                current = current.forwardNode;                
            }

            // assign the node into the `next` pointer
            current.forwardNode = node;              
            node.backwardNode = current;
        }

        // this.current = node;
        this.tail = node;    

        return node;
    }

    // Delete the current node (which node will be the current node after the deletion?)
    delete() {

    }

    // Show the total of all the amounts of all the ListNodes
    showtotal() {

    }
}

export default {ListNode, LinkedList};