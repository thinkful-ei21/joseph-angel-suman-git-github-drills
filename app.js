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