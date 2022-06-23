import $ from 'jquery';
import _ from 'lodash';
import './body.css';


$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');



const updateCounter = () => {
  let num = 0;
  num++;
  $('#count').text(num).append(' clicks on the button');
}

$('button').on('click', _.debounce(updateCounter, 500));
