/*
JavaScript Algorithms and Data Structures Masterclass
DoublyLinkedLists insert/remove Exercise

Implement the folloqwing on a DoublyLinkedList class

insert
This internal/helper function should insert a node at a specified index in a DoublyLinkedList.  It should return true if the index is valid, and false if the index is invalid.

remove
This function should remove a node at a specified index in a DoublyLinkedList.  It should return the removed node if the index is valid, or undefined if the index is invalid.
*/

class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    insert(){
        
    }
    remove(){
        
    }
}