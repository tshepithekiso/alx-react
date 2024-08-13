// Importing the Map from Immutable.js using CommonJS
const { Map } = require('immutable');

// Creating the map constant
const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas'
});

// Creating the map2 constant by modifying the map
const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

// Export the constants using CommonJS syntax
module.exports = {
    map,
    map2
};

// Example usage
console.log(map.toJS()); // Output: { 1: 'Liam', 2: 'Noah', 3: 'Elijah', 4: 'Oliver', 5: 'Jacob', 6: 'Lucas' }
console.log(map2.toJS()); // Output: { 1: 'Liam', 2: 'Benjamin', 3: 'Elijah', 4: 'Oliver', 5: 'Jacob', 6: 'Lucas' }
