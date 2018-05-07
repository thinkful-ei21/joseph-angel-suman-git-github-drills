'use strict';

function jediName(firstName, lastName) {
    let first = firstName.split('');
    let last = lastName.split('');
    let jediLetters = last.slice(0,3).join('') + first.slice(0,2).join('');
    //console.log(first.slice(0,2));
    //console.log(last.slice(0,3));
    console.log(jediLetters);
}

jediName('Joseph', 'Kim');

function infinity(num)
{
    console.log(num);
    if (!isFinite(num)) {
        console.log('And beyond')
    } else if (num < 0) {
        console.log('To negative infinity');
    } else if (num > 0) {
        console.log('To infinity');
    } else {
        console.log('Staying home');
    }
}

infinity(0);
infinity(-5);
infinity(100);
infinity(infinity);
