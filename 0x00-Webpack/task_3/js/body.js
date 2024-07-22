import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

$(document).ready(function() {
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="click-me">Click here to get started</button>');
    $('body').append('<p id="count"></p>');

    let count = 0;

    function updateCounter() {
        count++;
        $('#count').text(`${count} clicks on the button`);
    }

    const debouncedUpdateCounter = _.debounce(updateCounter, 300);
    $('#click-me').on('click', debouncedUpdateCounter);
});
