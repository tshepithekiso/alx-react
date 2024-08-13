// Importing the List from Immutable.js using CommonJS
const { List } = require('immutable');

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to convert.
 * @returns {List} - An immutable List representation of the array.
 */
function getListObject(array) {
    return List(array);
}

/**
 * Appends an element to an immutable List.
 * @param {List} list - The immutable List to append to.
 * @param {string} element - The element to append.
 * @returns {List} - The updated immutable List.
 */
function addElementToList(list, element) {
    return list.push(element);
}

// Export the functions using CommonJS syntax
module.exports = {
    getListObject,
    addElementToList
};

// Example usage
const exampleArray = ['apple', 'banana', 'cherry'];
const exampleList = getListObject(exampleArray);
console.log(exampleList); // Output: List [ 'apple', 'banana', 'cherry' ]

const updatedList = addElementToList(exampleList, 'date');
console.log(updatedList); // Output: List [ 'apple', 'banana', 'cherry', 'date' ]
