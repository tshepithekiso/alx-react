import $ from 'jquery';
import '../css/footer.css';

$(document).ready(function() {
    const footer = $('<footer></footer>');
    footer.append('<p>Copyright - Holberton School</p>');
    $('body').append(footer);
});
