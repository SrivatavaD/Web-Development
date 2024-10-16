// function eventFunction() {
//     console.log('I have clicked on the docuemnt');
// }

// document.addEventListener('click', eventFunction);

// document.removeEventListener('click', eventFunction);

// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(babbar) {
//     console.log(babbar);
// })

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('maza aaya, accha laga');
// });

// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para ' + event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=100; i++) {
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para ' + i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper');

// element.addEventListener('click', function(event) {
//     if(event.target.nodeName === 'SPAN') {
//         console.log('span pr click kia hai' + event.target.textContent);
//     }
// });

// function changeText(){
//     let fpara = document.getElementById('fpara');
// fpara.textContent="Hello Devansh"

// }

// let fpara =  document.getElementById('fpara');
// fpara.addEventListener('click', changeText);

// Code 1

// const t1 = performance.now()

// for(let i =1; i<100; i++){
//     let para = document.createElement('p');
//     para.textContent = "This is para" +i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("Total time by code 1: " + (t2-t1));

// //code 2

// const t3 = performance.now()

// let mydiv = document.createElement('div');

// for(let i = 1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is Para" +i;
//     myDiv.appendChild(para);
// }

// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("Total time by code 2: " + (t4-t3));

// // best code

// let fragment = document.createDocumentFragment();

// for(let i = 1; i<100; i++){
//     let para  = document.createElement('p');
//     para.textContent = "This is para" +i;

//     //NO reflow and repaint for the below line
//     fragment.appendChild(para);

// }

// document.body.appendChild(fragment);

// let firstPromise = new Promise(( resolve , reject) => {
//     console.log("Devansh");
//     // resolve(1001);
//     reject(new Error("internal server error"));

// } );

// function sayMyName(){
//     console.log("MY name is devansh");
// }
// setTimeout(10)

// let promise1 = new Promise(( resolve, reject) => {
//     setTimeout(resolve, 1000, "First");
// })

// let promise2 = new Promise(( resolve, reject) => {
//     setTimeout(resolve, 2000, "Second");
// })

// let promise3 = new Promise(( resolve, reject) => {
//     setTimeout(resolve, 3000, "third");
// })

// Promise.all([Promise3, Promise2, Promise1])
// .then((Values) => {
//     console.log(values);
// })

// .catch((error) => {
//     console.log("error:" +error);
// })

// async function getData() {
//   setTimeout(function () {
//     console.log("I am inside set timeout block");
//   }, 3000);
// }

// getData();

// async function getData(){

//     // get request - async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts');

//     // parse json- aysnc

//     let data = response.json();

//     console.log(response);
// }

// getData();

function outerFunc() {
    var name = "Devansh"; // name is a local variable created by init
    function innerFunc() {
      // displayName() is the inner function, that forms a closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
outerFunc();
  
