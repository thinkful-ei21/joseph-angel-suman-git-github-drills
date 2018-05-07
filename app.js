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


// let message = 'craft block argon meter bells brown croon droop';
// function decode(message){  
//   let words = message.split(' ');
//   let result = [];  
//   for(let i=0; i < words.length;i++){    
//     switch(words[i].split('')[0]){
//       case 'a':
//         result.push(words[i].split('')[1]);
//         break;
//       case 'b':
//         result.push(words[i].split('')[2]);
//         break;
//       case 'c':
//         result.push(words[i].split('')[3]);
//         break;
//       case 'd':
//         result.push(words[i].split('')[4]);
//         break;
//       default:
//         result.push(' ');
//     }
//   }
//   console.log(result.join(''));
// }
// decode(message);

// function daysInMonth(month, leapYear = true){

//     switch(month){
//         case 'January' :
//         case 'March' :
//         case 'May' :
//         case 'July' :
//         case 'August' :
//         case 'October' :
//         case 'December' :
//             console.log(`${month} has 31 days.`);
//             break;
//         case 'April' : 
//         case 'June' :
//         case 'September' :
//         case 'November' :
//             console.log(`${month} has 30 days.`);
//             break;
//         case 'February' :   
//             console.log(`${month} has ` + (28 + leapYear) + ` days.`);  
//     }
// }

// daysInMonth('April');

// rock = 1
// scissors = 2
// paper = 3

function rockPaperScissors(num) {
  const randomNo = Math.floor(Math.random() * 3) + 1;
  console.log(randomNo + ' ' + num);
  if (validate(num)) {
    if (num === randomNo) {
      console.log('tie');
    } else if (num === 1) {
      if (randomNo === 2) {
        console.log('user wins');
      } else {
        console.log('computer wins');
      }
    } else if (num === 2) {
      if (randomNo === 1) {
        console.log('computer wins');
      } else {
        console.log('user wins');
      }
    } else if (num === 3) {
      if (randomNo === 1) {
        console.log('user wins');
      } else {
        console.log('computer wins');
      }
    }
  }
}

function validate(num) {
  try {
    if (typeof num !== 'number' || num < 0 || num > 4) {
      throw 'this is not the right number';
    }
    return true;
  } catch (e) {
    console.error(e);
  }
}


rockPaperScissors(2);