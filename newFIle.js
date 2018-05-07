'use strict';

function whoAmI(name,age) {
  try{
    if (typeof name !== 'string' || typeof age !== 'number'){
      console.error('Arguments not valid.');
      throw err;
    }
    if(age < 0){
      throw err;
    }      
    else{
      let yob = yearOfBirth(age);
      console.log(`Hi, my name is ${name} and I\'m ${age} years old`);
      console.log(`I was born in ${yob}`);
    }
  }catch(err)
  {
    throw new Error('Age cannot be negative');
  }  
}

function yearOfBirth(age) {
  return 2018 - age;
}

whoAmI(19, 'suman');