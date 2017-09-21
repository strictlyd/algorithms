/**
 * For the given Singly Linked List ADT, implement the methods and analyze time and space complexity
 *
 * addToFront(element)
 *
 * remove(element)
 *
 * search(element)
 *
 **/

 class Node {

    constructor(element) {
        this._element = element;
        this._next    = null;
    }

 }

 class SinglyLinkedList {

    constructor() {
        this._head = null;
    }

    addToFront(element) {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        let newNode     = new Node(element);
        let currentNode = this._head;

        if (currentNode === null) {
            currentNode = newNode;
            this._head  = currentNode;

            return;
        }

        newNode._next = currentNode;
        this._head    = newNode;
    }

    remove(element) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let currentNode        = this._head;
        let { _next: nextNode} = currentNode;

        if (currentNode._element === element) {
            this._head = nextNode;
            return;
        }

        while (nextNode !== null) {
            if (nextNode._element === element) {
                currentNode._next = nextNode._next;
                break;
            }

            currentNode = nextNode;
            nextNode    = currentNode._next;
        }

    }

    /** Linear search
     * Return true if at least one element is found
     * Otherwise, return false.
     **/
    search(element) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let currentNode        = this._head;
        let { _next: nextNode} = currentNode;

        do {
            if (currentNode._element === element) {
                this._head = nextNode;
                return true;
            }

            if (nextNode._element === element) {
                currentNode._next = nextNode._next;
                return true;
            }

            currentNode = nextNode;
            nextNode    = currentNode._next;
        } while (nextNode !== null);

        return false;
    }

 }

module.exports = new SinglyLinkedList();
