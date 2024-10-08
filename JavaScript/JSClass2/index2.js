//  class Human {
//     //properties
//     age =13; //public
//     #wt = 55; //private
//     ht = 180;

//     constructor(newAge, newHeight){
//         this.age = newAge;
//         this.newHeight = newHeight;
//     }

//     //behaviour

//     walking(){
//         console.log("I am walking")
//     }

//     running(){
//         console.log("I am running")
//     }

//     get fetchWeight(){  //getter
//         return this.#wt;
//     }

//     set modifyWeight(val) { //setter
//         this.#wt = val;
//     }
     
//  }
//  let obj = new Human();
//  console.log(obj.age);

//  obj.walking();

//  //default ctor 

//  function sayName(myName = "prabhu deva") {
//     console.log("my name is : " , myName);
//  }

//  sayName()

// let obj = {
//     age: 12,
//     wt: 69,
//     ht: 222, 
// };

// console.log(obj)
// obj.color = "White";
// console.log(obj)

let src = {
    age: 12,
    wt: 69,
    ht: 222, 
};

let dest = {...src};
src.age = 90;
console.log("src ", src);
console.log("dest: ", dest);
