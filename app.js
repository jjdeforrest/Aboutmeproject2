'use strict';

    var user = prompt('What is your name Joker');
    //console.log('user', user);
    var upper = user.toUpperCase();
    alert('Welcome to the game only yes or no answers only ' + upper);

    function questionOne(){
    var city = prompt('Am I from Charleston');
    //console.log('city:', city);
    var home = city.toLowerCase();
    if (home === 'yes') {
        alert('correct');
    } else {
        alert('try again');
    }
}
    function questionTwo(){
    var state = prompt('Am I from South Carolina');
    //console.log('state', state);
    var region = state.toLowerCase();
    if (region === 'yes'){
        alert('correct');
    } else{s
        alert('try again');
    }

    function questionThree(){
    var marines = prompt('Was I in the Marines');
    //console.log('branch', marines);
    var branch = marines.toLowerCase();
    if (branch === 'yes'){
        alert('correct');
    } else {
        alert('try again');
    }
}

   function questionFour(){
    var work = prompt('Was I in construction');
    //console.log('work', work);
    var history1 = work.toLowerCase();
    if (history1 === 'yes'){
        alert('correct');
    } else {
        alert('try again');
    }
}
function questionFive(){    
var degree = prompt('Do I have a degree');
    //console.log('degree', degree);
    var transcript = degree.toLowerCase();
    if (transcript === 'yes'){
        alert('correct');
    } else {
        alert('try again');
    }
}
    function questionSix(){
   var question = 5;
   var counter = 4;
    while (counter > 0){
        var answer = prompt('how many questions did you answer');
        var input = parseInt(answer); 
         if (input === question){
            alert('you are correct');
            break;
        } else if (input > question){
            alert('you are high');
            counter--;
        } else if (input < question){
            alert('to low');
            counter--;
            break;
        } else if (input === NaN || input === null) {
            alert('you need a number');
        } else if (counter === 0){
            alert('you are out of tries');
        }
    }
    }
    function questionSeven(){
    var degree= ['bachelor', 'business'];

    for (var i=0; i < 7; i++){
        var answer1 = prompt('what type of degree did you have');
        if (degree.includes(answer1)) {
            alert('nice job');
            break;
        } else{
            alert('try again');
        }
    }
}

    alert('Welcome to the Joker Revolt '+ user + 'you quessed ' + answer1 + 'out of 2 ');