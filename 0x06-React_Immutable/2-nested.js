import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
    return array.reduce((acc, key) => {
        if (acc === undefined) {
            return undefined;
        }
        return acc[key];
    }, object);
}

const object = {
    name: {
        first: "Guillaume",
        last: "Salva"
    }
};

console.log(accessImmutableObject(object, ['name', 'first'])); // Should return "Guillaume"
console.log(accessImmutableObject(object, ['name', 'middle'])); // Should return undefined

