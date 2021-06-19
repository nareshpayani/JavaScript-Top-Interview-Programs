
// ======================================= encapsulation example ========================================== /

class person{
    constructor(name,id){
        this.name = name;
        this.id = id;
    }
    add_Address(add){
        this.add = add;
    }
    getDetails(){
        console.log(`Name is ${this.name},Address is: ${this.add}`);
    }
}
  
let person1 = new person('Mukul',21);
person1.add_Address('Delhi');
person1.getDetails();

// ======================================= Sum (2,3)(3,4) ========================================== /

function sum(a,b) {
  return function(c,d){
    return a+b+c+d
  }
}

sum(2, 3)(4,5) //9
console.log(sum());

// ======================================= Sum (2)(3) ========================================== /

function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function (y) {
      return x + y;
    };
  }
}
console.log(sum(2)(3)); //5

//OR

"use strict";

let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
  return function () {
    let totalArgs = prevArgs.concat(Array.from(arguments));
    if (totalArgs.length === numArgs) {
      return sum(totalArgs);
    }
    return addGenerator(numArgs, totalArgs);
  };
};

let add = addGenerator(2, []);

console.log(add(2, 5)); // 7
console.log(add(2)(5)); // 7
console.log(add()(2, 5)); // 7
console.log(add()(2)(5)); // 7
console.log(add()()(2)(5)); // 7

// ======================================= multiply (2)(3) ========================================== /
function multiply(a) {
  return function(b) {
    return function(c) {
      return a * b * c;
    };
  };
}
console.log('Curray function: ' + multiply(1)(2)(3)); // 6
// ======================================= Find second largest elements ========================================== //

function findSecondLargestElem(arr){
  let first = -1 , second = -1;

  for(let i = 0; i <= arr.length-1; i++){
      if(arr[i] > first){
          second = first;
          first = arr[i];
      }
      else if( arr[i] > second && arr[i] != first){
          second = arr[i];
      }
  }
  console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1]
findSecondLargestElem(arr);

// ======================================= Array Sort (assending)========================================== //
let arr = [12, 35, 1,1, 10, 34, 1];
console.log(arr.sort((a,b) => b-a));
console.log(arr.sort((a,b) => a-b));


// ======================================= Duplicate Array  ========================================== //

function duplicate(arr) {
  return arr.concat(arr);
}
console.log(duplicate([1, 2, 3, 4, 5]));
//[1,2,3,4,5,1,2,3,4,5]

// ======================================= Remove Duplicate Array  ========================================== //
var numbers = [1,2,3,4,4,4,4,2,3];
alert([...new Set(numbers)]); 

//[1,2,3,4]

// ======================================= second smallest elements ========================================== //

function print2Smallest( arr, arr_size)
{
	let i, first, second;

	/* There should be atleast two elements */
	if (arr_size < 2)
	{
		document.write(" Invalid Input ");
		return;
	}

	first=Number.MAX_VALUE ;
	second=Number.MAX_VALUE ;
	for (i = 0; i < arr_size ; i ++)
	{
		/* If current element is smaller than first
		then update both first and second */
		if (arr[i] < first)
		{
			second = first;
			first = arr[i];
		}

		/* If arr[i] is in between first and second
		then update second */
		else if (arr[i] < second && arr[i] != first)
			second = arr[i];
	}
	if (second == Number.MAX_VALUE )
		document.write("There is no second smallest element\n");
	else
		document.write("The smallest element is " + first + " and second "+
			"Smallest element is " + second +'\n');
}

	// Driver program
	
	let arr = [ 12, 13, 1, 10, 34, 1 ];
	let n = arr.length;
	print2Smallest(arr, n);

  // ======================================= Prime-1 ========================================== //

  function isPrime(num) {
    for ( var i = 2; i < num; i++ ) {
        if ( num % i === 0 ) {
            return false;
        }
    }
    return true;
}

function display(n) {
    var arr = [2];
    for ( var i = 3; i < n; i+=2 ) {
        if ( isPrime(i) ) {
            arr.push(i);
        }
    }
    console.log(arr); // use arr result on your own
}

display(100);

  // ======================================= isPrime -2 ========================================== //

function test_prime(n)
{ 
 if (n===1) {return false; }
  else if(n === 2)
{  return true;  }
else {
for(var x = 2; x < n; x++)  {
      if(n % x === 0) 
{ return false; } 
}
    return true;  
  }
}
console.log(test_prime(37));

  // ======================================= permutations program ========================================== //

  function permutations(str) {
    let results = [];
    
      if (str.length == 1) {
        return [ str ];
      }
    
      for (let i = 0; i < str.length; i++) {
        const first = str[i];
        const charsRemaining = str.substring(0, i) + str.substring(i + 1);
        const remainingPerms = permutations(charsRemaining);
        for (let j = 0; j < remainingPerms.length; j++) {
          results.push(first + remainingPerms[j]);
        }
      }
    
      return results;
    }
    console.log(permutations("abc"));


  // ======================================= Fibonacci Series ========================================== //

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//Output: 0, 1, 1,2,3


// ======================================= Fibonacci Number ========================================== //
function fibonacci(num)
    {   
        if(num==1)
            return 0;
        if (num == 2)
            return 1;
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
console.log("Fibonacci(5): "+fibonacci(5)+"<br>");
console.log("Fibonacci(8): "+fibonacci(8)+"<br>");


// ======================================= Palindrome ========================================== //

function checkPalindrome(str) {

  // find the length of a string
  const len = string.length;
  
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
  
      // check if first and last string are same
      if (string[i] !== string[len - 1 - i]) {
          return 'It is not a palindrome';
      }
  }
  return 'It is a palindrome';
  }
  
  // take input
  const string = prompt('Enter a string: ');
  
  // call the function
  const value = checkPalindrome(string);
  
  console.log(value);

// ======================================= Reverse String ========================================== //

  function reverseString(str) {
    let stringRev = "";
    for (let i = str.length; i >= 0; i--) {
      stringRev = stringRev + str.charAt(i);
    }
    return stringRev;
  }
  alert(reverseString("Pradeep")); // Output: peedarP
  
  //OR

  function str_reverse(str){
    return str.split('').reverse().join('');
  }

  alert(str_reverse("Pradeep")); 


// ======================================= Reverse String without using Built In functions ========================================== //
function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("javascript"))

  // ======================================= Reverse Number ========================================== //
function reverse(num) {
  let result = 0;
  while (num != 0) {
    result = result * 10;
    result = result + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}

console.log(reverse(12345));

// ======================================= Reverse Array ========================================== //

let a = [1, 2, 3, 4, 5];

//Approach 1:
console.log(a.reverse());

//Approach 2:
let reverse = a.reduce((prev, current) => {
  prev.unshift(current);
  return prev;
}, []);

console.log(reverse);


// ======================================= Largest Number ========================================== //

  let findLargestNum = [12, 35, 1,1, 10, 34, 1];
  console.log(Math.max(...findLargestNum));

  //35

// ======================================= Random Number between min & Max ========================================== //

// 5 to 7
let min = 5;
let max = 7;
console.log(min + Math.floor(Math.random() * (max - min + 1)));

// ======================================= consecutiveOne 11111 ========================================== //
function consecutiveOne(num) {
  let binaryArray = num.toString(2);

  let maxOccurence = 0,
    occurence = 0;
  for (let val of binaryArray) {
    if (val === "1") {
      occurence += 1;
      maxOccurence = Math.max(maxOccurence, occurence);
    } else {
      occurence = 0;
    }
  }
  return maxOccurence;
}
//13 = 1101 = 2
//5 = 101 = 1
console.log(consecutiveOne(5)); //1

// ======================================= SubSet 11111 ========================================== //

const getAllSubset = arr => 
  arr.reduce((subsets, value) =>
    subsets.concat(subsets.map(set => [value, ...set]))
  , [[]]
);

console.log(getAllSubsets([1,2,3])); // [[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]

// =================================== maxDifference of array element ====================================== //


function maxDifference(arr) {
  let maxDiff = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let diff = Math.abs(arr[i] - arr[j]);
      maxDiff = Math.max(maxDiff, diff);
    }
  }
  return maxDiff;
}

console.log(maxDifference([1, 2, 4])); // [1 - 4 ] = 3


// =================================== moveZeroToEnd ====================================== //

const moveZeroToEnd = (arr) => {
  for (let i = 0, j = 0; j < arr.length; j++) {
    if (arr[j] !== 0) {
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]; // swap i and j
      }
      i++;
    }
  }
  return arr;
};

console.log(moveZeroToEnd([1, 8, 2, 0, 0, 0, 3, 4, 0, 5, 0])); // [1, 8, 2, 3, 4, 5, 0, 0, 0, 0, 0]

// =================================== factorial of a number ====================================== //

const number = parseInt(prompt('Enter a positive integer: '));

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}



//OR

function factorial(x) 
{ 

  if (x === 0)
 {
    return 1;
 }
  return x * factorial(x-1);
         
}
console.log(factorial(5));

// =================================== length Of Longest Substring ====================================== //

const lengthOfLongestSubstring = function(s) {

  let map = {}
  let start = 0
  let maxLen = 0
  let arr = s.split('')

  for (let i=0; i < s.length; i++) {
      let current = map[arr[i]];
      if (current != null && start <= current) {
          start = current + 1;
      } else {
          maxLen = Math.max(maxLen, i - start + 1)
      }
      map[arr[i]] = i;
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("cccc")); //1
console.log(lengthOfLongestSubstring("umesh")); 5
// =================================== Using call() function  ====================================== //

    var person = {
      firstName: 'Pradeep',
      lastName: 'Kumar',
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    };
    var myObject = {
      firstName: 'Information Technology',
      lastName: '& Management'
    };
    console.info("Using call(): "+person.fullName.call(myObject));
    
    // =================================== apply() function ====================================== //

    var numbers = [5, 6, 2, 3, 7];
    var max = Math.max.apply(null, numbers);

    console.log("Using apply(): "+ max); // expected output: 7


    // Example - 02
    var array = ['a', 'b'];
    var elements = [0, 1, 2];
    array.push.apply(array, elements);

    console.info("Using apply(): "+array); // ["a", "b", 0, 1, 2]


    // =================================== Using bind() function  ====================================== //

    var person = {
      firstName: 'Pradeep',
      lastName: 'Kumar',
      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      }
    };
    var myObject = person.fullName;
    var getFullName = myObject.bind(person);

    console.info("Using bind(): "+ getFullName());

// =================================== Closure function  ====================================== //
    function addNumbers(one, second){
      var returnRusult = "Result is: ";
  
      function add (){
          return returnRusult + ( one + second);
      }
      return add();
  }

  var result= addNumbers(10, 20);
  console.log(result); //30


// =================================== callback function  ====================================== //

  function greeting(name) {
    alert('Hello ' + name);
}
function processUserInput(callback) {
    var name = prompt('Please enter your name: ');
    callback(name);
}
processUserInput(greeting);

// =================================== Arrow Function Example ====================================== //
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
console.log('Arrow Function: ' + materials.map(material => material.length));

const addition = (x, y) => { return x + y };
console.log('addition: ' + addition(10, 20));

// =================================== IIFE (immediately-invoked function expression ) Example ====================================== //

(function(window) {
  'use strict';
  function Person(name, address) {
    this.name = name;
    this.address = address;
  }

  Person.prototype.sayHello = function() {
    console.log(this.name + ' says hello & he is from' + this.address);
  };

  window.Person = Person;
})(window);

function init() {
  var PersonObj = new Person('Pradeep', 'Bangalore');
  PersonObj.sayHello();
  console.log(PersonObj);
}

init();

// =================================== prototype Function Example ====================================== //

// function constructor
function Person(name, job, yearOfBirth){
	this.name= name;
	this.job= job;
	this.yearOfBirth= yearOfBirth;
}
// adding calculateAge() method to the Prototype property
Person.prototype.calculateAge= function(){
	console.log('The current age is: '+(2019- this.yearOfBirth));
}
console.log(Person.prototype);

// creating Object Person1
let Person1= new Person('Jenni', 'clerk', 1986);
console.log(Person1)
let Person2= new Person('Madhu', 'Developer', 1997);
console.log(Person2)

Person1.calculateAge();
Person2.calculateAge();

// =================================== Promises Function Example ====================================== //

const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

// =================================== Promises Chaining  Example ====================================== //

let countValue = new Promise(function (resolve, reject) {
  resolve("Promise resolved");
});

countValue
  .then(function successValue(result) {
    console.log(result);
  })

  .then(function successValue1() {
    console.log("You can call multiple functions this way.");
  });

  //OR


let countValue = new Promise(function (resolve, reject) {
  reject('Promise rejected'); 
});

// executes when promise is resolved successfully
countValue.then(
   function successValue(result) {
       console.log(result);
   },
)

// executes if there is an error
.catch(
   function errorValue(result) {
       console.log(result);
   }
);

// =================================== Async/Await Example ====================================== //

// a promise
let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

  // wait until the promise resolves 
  let result = await promise; 

  console.log(result);
  console.log('hello');
}

// calling the async function
asyncFunc();

// =================================== Async/Await with Error Handeling Example ====================================== //

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
  resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {
  try {
      // wait until the promise resolves 
      let result = await promise; 

      console.log(result);
  }   
  catch(error) {
      console.log(error);
  }
}

// calling the async function
asyncFunc(); // Promise resolved


// =================================== Arrow Function with This keyword Example ====================================== //
function Person() {
  this.name = 'Jack',
  this.age = 25,
  this.sayName = function () {

      console.log(this.age);
      let innerFunc = () => {
          console.log(this.age);
      }

      innerFunc();
  }
}

const x = new Person();
x.sayName();


// =================================== Traingle expample ====================================== //
var i, j;
for(i=1; i < 10; i++) {
   //inner loop
  for(j=1; j<=i; j++) {
     document.write('*');
}
document.write('<br/>');
}
// *
// **
// ***
// ****
// *****
// ******

// =================================== Reduce() method expample ====================================== //
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// =================================== filter() method expample ====================================== //
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
    console.log(ages.filter(checkAdult));
}

myFunction();

var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}

// =================================== Shallow copy expample ====================================== //
console.log("Employee=> ", employee);
var newEmployee = employee; // Shallow copy
console.log("New Employee=> ", newEmployee);

console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

// =================================== Deep copy expample ====================================== //

var employee = {
	eid: "E102",
	ename: "Jack",
	eaddress: "New York",
	salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));

console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);

// =================================== Polyfills for .forEach() ====================================== //


//Using ES6
let fruits = ['Mango', 'Apple', 'Banana', 'Grapes']

fruits.forEach(function (element) {
  console.log(element);
});

//Polyfills 
let fruits = ['Mango', 'Apple', 'Banana', 'Grapes']

Array.prototype.customForEach = function(callback){
      for(i=0; i<this.length; i++){
          callback(this[i])
      }
  }
fruits.customForEach(function(element){
    console.log(element)
  })

// =================================== Polyfill for .map() ====================================== //
//Synatax
let fruits = ['Mango', 'Apple', 'Banana', 'Grapes']
const fruitsOutput = fruits.map(function(element) {
  return element
})
console.log(fruitsOutput)
//**Output:** ["Mango", "Apple", "Banana", "Grapes"]


//Polyfill for .map()

let fruits = ['Mango', 'Apple', 'Banana', 'Grapes']
Array.prototype.customMap = function(callback){
    let arr = [];
    for(i=0; i< this.length; i++){
        arr.push(callback(this[i]))
    }
    return arr;
}
let fruitsOutput = fruits.customMap(function(element){
    return element
})
console.log(fruitsOutput)

// =================================== Polyfill for .filter() ====================================== //


let fruits = [
  { name: 'Mango', price: 200},
  { name: 'Apple', price: 300},
  { name: 'Banana', price: 100},
  { name: 'Grapes', price: 150}
]

Array.prototype.customFilter = function(callback, context){
  var arr = [];
  for(i=0; i< this.length; i++){
      if(callback.call(context, this[i], i, this)){
          arr.push(this[i])
      }
  }
  return arr
}

fruits.customFilter(function(element){
  if(element.price > 100){
      console.log(element)
  }
})

// =================================== Polyfill for .reduce() ====================================== //

//.reduce() accepts a callback function (accumulator, currentValue, index and array) and initial value
var fruits = [
  'Mango',
  'Apple',
  'Banana',
  'Grapes',
]

Array.prototype.reduceFruits = function(callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue

  for (var i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this)
    } else {
      accumulator = this[i]
    }
  }
  return accumulator
} // our polyfill for reduce


var combineFruits = fruits.reduceFruits(function(a, b) {
  return a + ' , ' + b
}, 'Watermelon') // Initial Value is Young Sinatra

console.log(combineFruits);

// =================================== Flat objects ====================================== //
const numbers = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumbers = numbers.flat(2);

console.log(flatNumbers);

// example 2

const arrays = [
  ["$6"],
  ["$12"],
  ["$25"],
  ["$25"],
  ["$18"],
  ["$22"],
  ["$10"]
];
const merge3 = arrays.flat(1); 
const merge4 = arrays.flat(2);//The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
console.log(merge3);

// =================================== generatorFunc example ====================================== //

function* generatorFunc() {

  console.log("1. code before first yield");
  yield 100;

 console.log("2. code before the second yield");
  yield 200;

  console.log("3. code after the second yield");
}

const generator = generatorFunc();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());