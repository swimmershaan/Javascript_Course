"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1997) {
      var millenial = true;
      const firstName = "James";
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
			output = 'NEW OUTPUT'
    }
    console.log(millenial);
    //console.log(add(3,2)); works outside of strict mode
		console.log(output);
		
  }
  printAge();
  return age;
}

const firstName = "Shaan";
calcAge(1997);
