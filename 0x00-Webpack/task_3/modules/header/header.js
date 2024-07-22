import $ from 'jquery';
import './header.css';

console.log('Init header');

$(document).ready(() => {
    $('body').prepend('<header><h1>Holberton Dashboard</h1></header>');
});

