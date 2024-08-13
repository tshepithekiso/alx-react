// Importing the Map and is from Immutable.js using CommonJS
const { Map, is } = require('immutable');

/**
 * Checks if two Immutable Maps are equal.
 * @param {Map} map1 - The first Immutable Map.
 * @param {Map} map2 - The second Immutable Map.
 * @returns {boolean} - True if the Maps are equal, false otherwise.
 */
function areMapsEqual(map1, map2) {
    return is(map1, map2);
}

// Example usage
const map1 = new Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

const map2 = new Map({
    firstName: 'Guillaume',
    lastName: 'Salva',
});

console.log(areMapsEqual(map1, map2)); // Output: true

const map3 = new Map({
    firstName: 'John',
    lastName: 'Doe',
});

console.log(areMapsEqual(map1, map3)); // Output: false

// Export the function using CommonJS syntax
module.exports = {
    areMapsEqual,
};
