/**
 * For the given FIFO Queue ADT, implement the methods and analyze time and space complexity
 *
 * enqueue(data)
 *
 * dequeue()
 *
 * peek()
 *
 * isFull()
 *
 * isEmpty()
 *
 * search(data)
 *
 **/

"use strict";

const Helper = require("../../helpers/helper.js");

// Since max Array length is (2^32) - 1, use it as max length
const MAX_ARRAY_LENGTH = Math.pow(2,32) - 1;

class Queue {

    /**
     * Initializes an Array of values
     **/
    constructor(length = 0) {
        this._queue = [];
        for (let ii = 0; ii < length; ii++) {
            this._queue[ii] = Helper.getRandomWholeNumberBetweenRange(1, 10);
        }
    }

    isEmpty() {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        return this._queue.length === 0 || false;
    }

    isFull() {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        return this._queue.length === MAX_ARRAY_LENGTH || false;
    }

    enqueue(data) {
        // https://cs.stackexchange.com/questions/62717/understanding-time-complexity-of-dynamic-array-implementation-of-stack
        // Average time complexity = O(n), depends if Array.prototype.push has a pointer reference to the last Array index
        // Worst time complexity   = O(n), depends if Array.prototype.push has a pointer reference to the last Array index
        // Worst space complexity  = O(n)

        if (this.isFull()) { throw new Error("Queue is already full."); }

        this._queue.push(data);
    }

    dequeue() {
        // https://cs.stackexchange.com/questions/62717/understanding-time-complexity-of-dynamic-array-implementation-of-stack
        // Average time complexity = O(n), depends if Array.prototype.push has a pointer reference to the last Array index
        // Worst time complexity   = O(n), depends if Array.prototype.push has a pointer reference to the last Array index
        // Worst space complexity  = O(n)

        if (this.isEmpty()) { throw new Error("Queue is already empty."); }

        this._queue.shift();
    }

    peek() {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        if (this.isEmpty()) { throw new Error("Queue is empty. Nothing to peek."); }

        return this._queue[0];
    }

    /** Linear search
     * Return true if at least one element is found
     * Otherwise, return false.
     **/
    search(data) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let ii = 0;

        while (ii < this._queue.length) {
            if (this._queue[ii] === data) {
                return true;
            }

            ii++;
        }

        return false;
    }

}

module.exports = new Queue();
