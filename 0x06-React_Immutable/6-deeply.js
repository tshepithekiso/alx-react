// Importing the Map from Immutable.js using CommonJS
const { Map } = require('immutable');

/**
 * Merges two objects deeply into an immutable Map.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - An immutable List containing the values of the merged pages.
 */
function mergeDeeplyElements(page1, page2) {
    const mergedMap = mergeDeep(Map(page1), Map(page2));
    return mergedMap.valueSeq().toList();
}

/**
 * Helper function to merge two Immutable Maps deeply.
 * @param {Map} map1 - The first Immutable Map.
 * @param {Map} map2 - The second Immutable Map.
 * @returns {Map} - The merged Immutable Map.
 */
function mergeDeep(map1, map2) {
    return map1.mergeDeep(map2);
}

// Example usage
const page1 = {
    'user-1': {
        id: 1,
        name: 'test',
        likes: {
            1: {
                uid: 1234,
            }
        }
    },
};

const page2 = {
    'user-1': {
        likes: {
            2: {
                uid: 134,
            }
        }
    },
};

const mergedList = mergeDeeplyElements(page1, page2);
console.log(mergedList.toJS());
