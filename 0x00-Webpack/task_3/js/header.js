import $ from 'jquery';
import '../css/header.css';

console.log('Init header');

$(document).ready(function() {
    const header = $('<header></header>');
    header.append('<div id="logo"></div>');
    header.append('<h1>Holberton Dashboard</h1>');
    $('body').prepend(header);
});
