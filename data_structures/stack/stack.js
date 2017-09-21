/**
 * For the given Stack ADT, implement the methods and analyze time and space complexity
 *
 * push(element)
 *
 * pop()
 *
 * peek()
 *
 * isFull()
 *
 * isEmpty()
 *
 * search(element)
 *
 **/

"use strict";

const Helper = require("../../helpers/helper.js");

// Since max Array length is (2^32) - 1, use it as max length
const MAX_ARRAY_LENGTH = Math.pow(2,32) - 1;

class Stack {

    /**
     * Initializes an Array of values
     **/
    constructor(length = 0) {
        this._stack = [];
        for (let ii = 0; ii < length; ii++) {
            this._stack[ii] = Helper.getRandomWholeNumberBetweenRange(1, 10);
        }
    }

    isEmpty() {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        return this._stack.length === 0 || false;
    }

    isFull() {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        return this._stack.length === MAX_ARRAY_LENGTH || false;
    }

    push(element) {{}
        // https://cs.stackexchange.com/questions/62717/understanding-time-complexity-of-dynamic-array-implementation-of-stack
        // Average time complexity = O(n), depends if Array.prototype.push has a pointer reference to the last Array index
        // Worst time complexity   = O(n), depends if Array.prototype.push has a pointer reference to the last Array index
        // Worst space complexity  = O(n)

        if (this.isFull()) { throw new Error("Stack is already full."); }

        return this._stack.push(element);
    }

    pop() {
        // https://cs.stackexchange.com/questions/62717/understanding-time-complexity-of-dynamic-array-implementation-of-stack
        // Average time complexity = O(n), depends if Array.prototype.pop has a pointer reference to the last Array index
        // Worst time complexity   = O(n), depends if Array.prototype.pop has a pointer reference to the last Array index
        // Worst space complexity  = O(n)

        if (this.isEmpty()) { throw new Error("Stack is already empty."); }

        return this._stack.pop();
    }

    /** Linear search
     * Return true if at least one element is found
     * Otherwise, return false.
     **/
    search(element) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let ii = 0;

        while(ii < this._stack.length) {
            if (this._stack[ii] === element) { return true; }

            ii++;
        }

        return false;
    }

}

module.exports = new Stack();
