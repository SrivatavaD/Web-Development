console.log('Chaliye shuru karte hai ');

//object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
// //     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// Rectangle.

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

// let rectangle = {
//     length:2,
//     breadth:4
// };

//for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(dest);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;

// console.log(dest);


// console.log("Devansh");
// //defination of fnction
// function sayMyName(){
//     console.log("Devansh")
// }

//calling of function
// sayMyName();

// function printCounting(){
//     for( let i=1; i<10; i++){
//         console.log(i);
//     }
// }

// printCounting();

// function printNumber(num){
//     console.log("Printing num", num);
// }

// printNumber(10);

// function getAverage(num1, num2){
//     let avg = (num1 + num2)/2;
//     console.log("Average:" , avg);

// }

// getAverage(3,70);


// return function

// function getSum(a,b,c){
//     let sum = a+b+c;
//     return sum;
// }

// let sum = getSum(1,2,3);
// console.log("Printing Sum: " , sum);

// function getName(firstName, lastName){
//     let fullName = firstName + " " + lastName;
//     return fullName;
// }

// let fullName = getName ("Devansh" , "Srivastava");
// console.log("Full Name: " ,  fullName);

// let sqaureNumber = function(num) {
//     let ans = num**2;
//     return ans;
// }

// let ans = sqaureNumber(5);
// console.log(ans);

// let obj = {
//     name:"Devansh",
//     age:"21",
//     weight:'71',
//     greet: function(){
//         console.log("hello jii kaise ho");
//     }
// };

// console.log(obj)
// obj.greet();
// console.log(typeof(obj))

// //creation of arr
// let arr = [1,2,3,4,4];

// //array constructor

// let brr = new Array ('Love', 1, true);
// brr.push('Devansh');
// brr.pop();

// brr.shift();
// brr.unshift('Devansh Sri');
// brr.push(20);
// brr.push(40);

// brr.push(70);

// console.log(brr);
// console.log(arr);

// let arr = [10,20,30];
//  arr.map((number) => {
//     console.log(number+1);
//  })

//  let arr= [20,30,40,50,60];
//   let evenArray = arr.filter((number) => {
//     return number % 2 === 0;

//     // if(number%2 === 0){
//     //return true;
//     //}
//     //else {
//     // return false;
//     //}
//   });
//   console.log(evenArray);

// let arr = [ 10,20,30,40,50,60];
// function getSum(arr){
//     let len = arr.length;
//     let sum = 0;
//     for(let index = 0; index<len; index++){
//         sum = sum + arr[index];
//     } 
//     return sum;
// }

// let totalSum = getSum(arr);
// console.log(totalSum);

  