'use strict';

function whoAmI(name,age) {
    if(validate(name, age)){      
      let yob = yearOfBirth(age);      
      console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
      console.log(`I was born in ${yob}`); 
    }  
}

function yearOfBirth(age) {
  return 2018 - age;
}

function validate(name, age) {
    try {
        if (typeof name !== 'string' || typeof age !== 'number') {
          throw 'Arguments not valid';
        }
        if (age < 0) {
          throw 'Age cannot be negative';
        }
    } catch (err) {
        console.error(err);
    }
}

//whoAmI('suman', -3);
whoAmI(19,'suman');
