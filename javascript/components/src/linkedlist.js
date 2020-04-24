class ListNode {
    constructor(subject, amount) {
        this.forwardNode = null;
        this.backwardNode = null;
        this.subject = subject;
        this.amount = amount;
    }    
}

// Double linked list
class LinkedList {

    constructor() {
        this.head = null;
        this.end = null;
    }

    // Show the subject and the amount
    show() {

    }

    // Position to the first node
    first() {

    }

    // Position to the last node
    last() {

    }
    
    // Move to the next node
    next() {

    }

    // Backup one node
    previous() {

    }

    // Inserts a new node after the current node (which node will be the current node after the insertion?)
    insert() {

    }

    // Delete the current node (which node will be the current node after the deletion?)
    delete() {

    }

    // Show the total of all the amounts of all the ListNodes
    showtotal() {

    }

    // ●	Allow the user to sort by subject
    // ●	Allow the user to sort by amount   
}

export default {ListNode, LinkedList};