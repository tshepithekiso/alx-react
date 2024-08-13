/**
 * Accesses the value of an object at the defined path.
 * @param {Object} object - The object to access.
 * @param {Array} path - An array containing the path to the desired key.
 * @returns {*} - The value at the defined path, or undefined if not found.
 */
function accessImmutableObject(object, path) {
    let value = object;
    for (let key of path) {
        if (value && typeof value === 'object') {
            value = value[key];
        } else {
            return undefined;
        }
    }
    return value;
}

// Export the function using CommonJS syntax
module.exports = accessImmutableObject;

// Example usage
const exampleObject = {
    name: {
        first: "Guillaume",
        last: "Salva"
    }
};

const result = accessImmutableObject(exampleObject, ['name', 'first']);
console.log(result); // Output: Guillaume
