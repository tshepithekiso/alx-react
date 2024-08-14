import { List, Map } from 'immutable';

/**
 * Function to concatenate two arrays into a List
 * @param {Array} page1 - First array
 * @param {Array} page2 - Second array
 * @returns {List} - Immutable List containing values from both arrays
 */
export function concatElements(page1, page2) {
  return List(page1).concat(List(page2));
}

/**
 * Function to merge two objects into a List of their values
 * @param {Object} page1 - First object
 * @param {Object} page2 - Second object
 * @returns {List} - Immutable List containing merged values from both objects
 */
export function mergeElements(page1, page2) {
  return List(Map(page1).merge(Map(page2)).valueSeq());
}

// Test the functions directly within the file
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
console.log(concatElements(array1, array2).toJS()); // Output: [1, 2, 3, 4, 5, 6]

const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
console.log(mergeElements(object1, object2).toJS()); // Output: [1, 3, 4]

