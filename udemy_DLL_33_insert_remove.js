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
    insert(index, val){
      let node;
      let counter;
      let newNode = new Node(val);
      if(index = 0) {
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return true;
      }
      if(index < 0 || index > this.length) {
        return false;
      } else if(index < this.length / 2) {
        node = this.head;
        counter = 0;
        while(counter !== index) {
          node = node.next;
          counter++;
        }
      } else {
        node = this.tail;
        counter = this.length - 1;
        while(counter !== index) {
          node = node.prev;
          counter--;
        }
      }
      node.prev.next = newNode;
      newNoxe.prev = node.prev;
      newNode.next = node;
      node.prev = newNode;
      this.length++;
      return true;
    }
    remove(index){
      let node;
      let counter;
      if(index < 0 || index > this.length) {
        return undefined;
      } else if(index < this.length / 2) {
        node = this.head;
        counter = 0;
        while(counter !== index) {
          node = node.next;
          counter++;
        }
      } else {
        node = this.tail;
        counter = this.length - 1;
        while(counter !== index) {
          node = node.prev;
          counter--;
        }
      }
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.prev = null;
      node.next = null;
      this.length--;
      return node;
    }
}
