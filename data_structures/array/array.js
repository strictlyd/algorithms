/**
 * For the given Array ADT, implement the methods and analyze time and space complexity
 *
 * access(index)
 *
 * insertAtStart(element)
 *
 * insertAtIndex(element, index)
 *
 * insertAtEnd(element)
 *
 * deleteAtStart()
 *
 * deleteAtIndex(index)
 *
 * deleteAtEnd()
 *
 * search(element)
 *
 **/

"use strict";

function getRandomWholeNumberBetweenRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // Add 1 to max to make range inclusive
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

class MyArray {

    /**
     * Initializes an Array of values
     **/
    constructor(length = 0) {
        this._array = [];
        for (let ii = 0; ii < length; ii++) {
            this._array[ii] = getRandomWholeNumberBetweenRange(1, 10);
        }
    }

    access(index = 0) {
        // Average time complexity = O(1)
        // Worst time complexity   = O(1)
        // Worst space complexity  = O(n)

        return this._array[index];
    }

    insertAtStart(element) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let newArray = new Array(this._array.length + 1);
        newArray[0]  = element;

        for (let ii = 1; ii < this._array.length + 1; ii++) {
            newArray[ii] = this._array[ii - 1];
        }

        this._array = newArray;
    }

    insertAtIndex(element, index) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let newArray = new Array(this._array.length + 1);

        for (let ii = 0; ii < this._array.length + 1; ii++) {
            if (ii === index) {
                newArray[ii] = element;
                break;
            }

            newArray[ii] = this._array[ii];
        }

        for (let jj = index + 1; jj < newArray.length; jj++) {
            newArray[jj] = this._array[jj - 1];
        }

        this._array = newArray;
    }

    insertAtEnd(element) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let newArray                  = new Array(this._array.length + 1);
        newArray[newArray.length - 1] = element;

        for (let ii = 0; ii < this._array.length; ii++) {
            newArray[ii] = this._array[ii];
        }

        this._array = newArray;
    }

    deleteAtStart() {
        // Average time complexity = O(n)x
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let newArray = new Array(this._array.length - 1);

        for (let ii = 1; ii < this._array.length; ii++) {
            newArray[ii - 1] = this._array[ii];
        }

        this._array = newArray;
    }

    deleteAtIndex(index) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let newArray = new Array(this._array.length - 1);
        let jj       = 0;

        for (let ii = 0; ii < this._array.length; ii++) {
            if (ii === index) { continue; }
            newArray[jj] = this._array[ii];
            jj++;
        }

        this._array = newArray;
    }

    deleteAtEnd() {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let newArray = new Array(this._array.length - 1);

        for (let ii = 0; ii < newArray; ii++) {
            newArray[ii] = this._array[ii];
        }

        this._array = newArray;
    }

    /** Linear search
     * Return index of first element found
     * Otherwise, return null;
     **/
    search(element) {
        // Average time complexity = O(n)
        // Worst time complexity   = O(n)
        // Worst space complexity  = O(n)

        let ii = 0;
        while (ii < this._array.length) {
            if (this._array[ii] === element) {
                return ii;
            }
            ii++;
        }
        return null;
    }

}

module.exports = new MyArray();
