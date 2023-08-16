'use strict';

const bookings = [];
const createBookimg = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
    // es5
    // numPassengers = numPassengers || 1;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBookimg('LH123');
createBookimg('LH123', 2, 800);
createBookimg("LH456", undefined, 899)

// first class function and  higherOrder function
// function call and return another function 

// const greed =(str) => {
//     return function (){
//     console.log("greed func")
//      }
// }


// const greeding = greed('jfgh');
// console.log(typeof greeding)

const greedArr = greedig => name => console.log(`${greedig} ${name}`)
greedArr('hii')('jonas')

//call function in object
const obj = {
    name: "karan",
    func(name1, name2) {
        console.log(`${name1} and ${name2} from ${this.name}`)
    }
}
const obj2 = {
    name: "karan2",

}
const funcs = obj.func;
// funcs.call(obj2,'hfjdh')

// apply method => it's same as call but argument pass in array
const arr = ["fjkhsdf", "dgf"]
// funcs.apply(obj2,arr);
// funcs.call(obj,...arr)

// bind method 
const funcObj2 = funcs.bind(obj2, "jdhfj", "jgdfh");
funcObj2();

// document.querySelector('h1').setAttribute('name',"hfghd");
// const name=document.querySelector('h1').getAttribute('name')
// console.log(name)

const obj3 = {
    name: "karan3",
    func() {
        console.log(this)
        console.log(` ${this.name} in obj3`)
    }
}
document.querySelector('.buy').addEventListener('click', obj3.func.bind(obj3))

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(10, 200));

const addTex = addTax.bind(null, 20);
console.log(addTex(200));


///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer: function () {

        const num = prompt(`What is your favourite programming language? \n
        0: JavaScript\n
        1: Python\n
        2: Rust\n
        3: C++`);
        var num1 = Number(num)
        if (num1 < this.answers.length && num1 > -1) {
            this.answers[num1] = this.answers[num1] + 1
        }
        displayResults(this.answers);
    }

}

function displayResults(arr) {
    console.log(arr)
}
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));


//practice
const runOnce = function () {
    console.log(`this will never run agai`)
}
runOnce();
//annonymous function (iife)
(function () {
    console.log(`this will never run agai`)
})();

(() => { console.log(`this will never run agai`) })();

function parent() {
    let passenger = 0;
    return function () {
        passenger++;
        console.log(`passenger = ${passenger}`)
    }
}
const child = parent();
child()
child()
child();

let k=0
function ans(){
    k=2;
}
ans()
console.log(k)

