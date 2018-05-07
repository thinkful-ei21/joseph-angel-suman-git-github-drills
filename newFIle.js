'use strict';

function whoAmI(name,age) {
    validate(name, age);
  
    let yob = yearOfBirth(age);
      
    console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
    console.log(`I was born in ${yob}`); 
}

function yearOfBirth(age) {
  return 2018 - age;
}

function validate(name, age) {
    try {
        if (typeof name !== 'string' || typeof age !== 'number') {
            throw err;
        }
        if (age < 0) {
            throw err;
        }
    } catch (err) {
        throw new Error('Arguments not valid');
    }
}

whoAmI('suman', 19);
