import $ from 'jquery';
import _ from 'lodash';

// Create elements and append them to the body
$(document).ready(function() {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="click-me">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  let count = 0;

  // Function to update the counter
  function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
  }

  // Bind the debounce function to the click event
  const debouncedUpdateCounter = _.debounce(updateCounter, 300);
  $('#click-me').on('click', debouncedUpdateCounter);
});
