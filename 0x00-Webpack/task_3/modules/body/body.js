import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let counter = 0;

$(document).ready(() => {
    const button = $('<button>Click me</button>');
    const counterDisplay = $('<p>Counter: 0</p>');

    button.on('click', () => {
        counter++;
        counterDisplay.text(`Counter: ${counter}`);
    });

    $('body').append(button, counterDisplay);
});
