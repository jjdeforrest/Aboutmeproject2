'use strict';

var user = prompt('What is your name Joker');
//console.log('user', user);
var upper = user.toUpperCase();
alert('Welcome to the game only yes or no answers only ' + upper);

var city = prompt('Am I from Charleston');
//console.log('city:', city);
var home = city.toLowerCase();
if (home === 'yes') {
    alert('correct');
} else {
    alert('try again');
}


var state = prompt('Am I from South Carolina');
//console.log('state', state);
var region = state.toLowerCase();
if (region === 'yes'){
    alert('correct');
} else{
    alert('try again');
}

var marines = prompt('Was I in the Marines');
//console.log('branch', marines);
var branch = marines.toLowerCase();
if (branch === 'yes'){
    alert('correct');
} else {
    alert('try again');
}

var work = prompt('Was I in construction');
//console.log('work', work);
var history1 = work.toLowerCase();
if (history1 === 'yes'){
    alert('correct');
} else {
    alert('try again');
}

var degree = prompt('Do I have a degree');
//console.log('degree', degree);
var transcript = degree.toLowerCase();
if (transcript === 'yes'){
    alert('correct');
} else {
    alert('try again');
}

alert('Welcome to the Joker Revolt ' + upper);


