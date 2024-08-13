// Importing the fromJS method from Immutable.js
const { fromJS } = require('immutable');

/**
 * Converts a JavaScript object into an immutable Map.
 * @param {Object} object - The object to convert.
 * @returns {Map} - An immutable Map representation of the object.
 */
function getImmutableObject(object) {
    return fromJS(object);
}

// Example usage
const exampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);
