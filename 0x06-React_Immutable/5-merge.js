// Importing the List and Map from Immutable.js using CommonJS
const { List, Map } = require('immutable');

/**
 * Concatenates two arrays into an immutable List.
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - An immutable List containing the values of the two pages.
 */
function concatElements(page1, page2) {
    return List([...page1, ...page2]);
}

/**
 * Merges two objects into an immutable List.
 * If two values are the same, values from page2 are used.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - An immutable List containing the values of the two pages.
 */
function mergeElements(page1, page2) {
    const mergedMap = Map(page1).merge(Map(page2));
    return mergedMap.valueSeq().toList();
}

// Export the functions using CommonJS syntax
module.exports = {
    concatElements,
    mergeElements
};

// Example usage
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedList = concatElements(array1, array2);
console.log(concatenatedList.toJS()); // Output: [1, 2, 3, 4, 5, 6]

const object1 = { a: 1, b: 2, c: 3 };
const object2 = { b: 4, c: 5, d: 6 };
const mergedList = mergeElements(object1, object2);
console.log(mergedList.toJS()); // Output: [1, 4, 5, 6]
