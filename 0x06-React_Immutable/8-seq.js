// Importing the Map from Immutable.js using CommonJS
const { Map } = require('immutable');

/**
 * Prints the first and last names of students with a score greater than or equal to 70.
 * The first letter of the first and last names is capitalized.
 * @param {Object} grades - An object containing student grades.
 */
function printBestStudents(grades) {
    const bestStudents = Map(grades)
        .filter(student => student.get('score') >= 70)
        .map(student => ({
            score: student.get('score'),
            firstName: capitalize(student.get('firstName')),
            lastName: capitalize(student.get('lastName')),
        }));

    console.log(bestStudents.toJS());
}

/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with the first letter capitalized.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage
const grades = {
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 65,
        firstName: 'john',
        lastName: 'doe',
    },
    3: {
        score: 80,
        firstName: 'jane',
        lastName: 'doe',
    },
};

printBestStudents(grades);
