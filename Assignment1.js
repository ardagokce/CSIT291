//Assignment 1 CSIT291

var pizza = 'I like pizza.';
var number = 5000;

function function1(){
  console.log(pizza);
  function2();
}

setTimeout(function2, number);

function function2(){
  console.log(pizza);
}

function1();

//ENDFILE
