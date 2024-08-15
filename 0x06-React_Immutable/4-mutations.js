// Importing the Map from Immutable.js
import { Map } from 'immutable';

// Creating the map constant
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas'
});

// Creating the map2 constant by modifying the map
export const map2 = map.set(2, 'Benjamin').set(4, 'Oliver');

