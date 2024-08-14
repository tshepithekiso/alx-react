import { List } from 'immutable';

export function getListObject(array) {
    return List(array);
}

export function addElementToList(list, element) {
    return list.push(element);
}

const array = ['a', 'b', 'c'];
const list = getListObject(array);

console.log(list); // Should return List [ "a", "b", "c" ]

const newList = addElementToList(list, 'd');
console.log(newList); // Should return List [ "a", "b", "c", "d" ]

