//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favfood(){
    let x = Object.values(person3)
    return x
}
console.log(favfood())

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`this is ${this.name} and their age is ${this.age++} `)
    }
    this.printInfo2 = () => {
        console.log(`Name is ${this.name} and age is ${this.age+=3}`)
    }
}
let sam = new Person('Sam', 27)
console.log(sam.printInfo());
console.log(sam.printInfo());
console.log(sam.printInfo());

let dan = new Person('Dan', 18)
console.log(dan.printInfo2());
console.log(dan.printInfo2());
console.log(dan.printInfo2());


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const isLength = (string) => {
    return new Promise((resolve,reject) => {
        if(string.length > 10){
            resolve(true);
        } else {
            reject(false)
        }
    })
}
isLength("how are you").then((result) => {
    console.log('big word', result)
}).catch((error) => {
    console.log('small number', error)
})


// codewar
//1
// Create a function that takes an integer as an argument and returns 
// "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
    if(number % 2 == 0){
      return "Even"
    }
    else{
      return "Odd"
    }
  }

//2
// Your task is to write function factorial.
function factorial(n){
    //your code here
    if(n == 1){
      return 1
    }
    else if(n <= 0){
      return 1
    }
    else {
      return n*(factorial(n-1))
    }
  }

//3
/*
Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son 
(or in how many years he will be twice as old).
*/
function twiceAsOld(dadYearsOld, sonYearsOld) {
    // your code here
    return Math.abs(dadYearsOld - (2*sonYearsOld))
  }