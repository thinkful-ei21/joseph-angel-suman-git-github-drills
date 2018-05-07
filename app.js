'use strict';

// function jediName(firstName, lastName) {
//     let first = firstName.split('');
//     let last = lastName.split('');
//     let jediLetters = last.slice(0,3).join('') + first.slice(0,2).join('');
//     //console.log(first.slice(0,2));
//     //console.log(last.slice(0,3));
//     console.log(jediLetters);
// }

// jediName('Joseph', 'Kim');

// function infinity(num)
// {
//     console.log(num);
//     if (num < 0) {
//         console.log('To negative infinity');
//     } else if (num > 0) {
//         console.log('To infinity');
//     } else {
//         console.log('Staying home');
//     }

//     if (!isFinite(num)) {
//         console.log('And beyond');
//     }
// }

// infinity(0);
// infinity(-5);
// infinity(100);
// infinity(infinity);


let message = 'craft block argon meter bells brown croon droop';
function decode(message){  
  let words = message.split(' ');
  let result = [];  
  for(let i=0; i < words.length;i++){    
    switch(words[i].split('')[0]){
      case 'a':
        result.push(words[i].split('')[1]);
        break;
      case 'b':
        result.push(words[i].split('')[2]);
        break;
      case 'c':
        result.push(words[i].split('')[3]);
        break;
      case 'd':
        result.push(words[i].split('')[4]);
        break;
      default:
        result.push(' ');
    }
  }
  console.log(result.join(''));
}
decode(message);