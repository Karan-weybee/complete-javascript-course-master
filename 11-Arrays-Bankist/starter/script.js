'use strict';
//karan bhalodiya
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  dogsJuliaCorrected.splice(dogsJuliaCorrected.length,0,...dogsKate);
  const dogs = dogsJuliaCorrected;
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);


///////////////////////////////////////
// The map Method
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);


///insert in webpage
var open1=-1;
const displayMovements = function (movements, sort) {
  containerMovements.innerHTML = '';

  document.querySelector('.btn--sort').addEventListener('click',function(){
    var sort1=sort ? false : true;
   displayMovements(account1.movements,sort1);
   })
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

function total(mov){
  var total1 =0;
  for(let i=0;i<mov.length;i++){
    total1 =total1+mov[i];
  }
  return total1;
}
function inVal(mov){
  var total1 =0;
  for(let i=0;i<mov.length;i++){
    if(mov[i] > 0){
    total1 =total1+mov[i];
    }
  }
  return total1;
}
function outVal(mov){
  var total1 =0;
  for(let i=0;i<mov.length;i++){
    if(mov[i] < 0){
      let val=Math.abs(mov[i])
    total1 =total1+val;
    }
  }
  return total1;
}
// login credential

function myFunction(){
  var userName=document.getElementById('login__input--user').value;
  // console.log(userName)
  
  var pass=document.getElementById('login__input--pin').value;
  pass=Number(pass);
  // let 
  open1=loginCredential(userName,pass);
  if(open1 > -1){
    document.querySelector('main').style.opacity='100%';
    displayMovements(accounts[open1].movements,false)
    var total1=total(accounts[open1].movements)
    var in1=inVal(accounts[open1].movements);
    var out1=outVal(accounts[open1].movements);
    var interestAmount=in1*accounts[open1].interestRate/100;
    document.getElementById('balance__value').innerHTML=total1;
    document.getElementById('summary__value--in').innerHTML=in1;
    document.getElementById('summary__value--out').innerHTML=out1;
    document.getElementById('summary__value--interest').innerHTML=interestAmount;
  
  }
  else{
    document.querySelector('main').style.opacity='0%';
  }

 
}

function loginCredential(userName,pass){

for(let i=0;i<accounts.length;i++){
  var id=accounts[i].owner.split(' ');
  var pin=accounts[i].pin;
  var first='';
  for(let i=0;i<id.length;i++){
    first=first.concat(id[i].slice(0,1).toLowerCase());
  }
  // console.log(first);
  if(userName == first && pass==pin){

    return i;
  }
}
  return -1;
}

///close or remove account 
function myClose(){
  var conformName=document.getElementById('conform_user').value;
  var conformPin1=document.getElementById('conform_pin').value;
  var conformPin = Number(conformPin1);
  var open2=loginCredential(conformName,conformPin);
  if(open1 == open2){
    accounts.splice(open1,1);
    document.querySelector('main').style.opacity='0%';
    // console.log(accounts);
  }
 
}

///transfer money

function transfer(){
  var Name=document.getElementById('form__input--to').value;
  var amount1=document.getElementById('form__input--amount').value;
  var amount=Number(amount1);
  var  total1=total(accounts[open1].movements);
  var check=loginForTransfer(Name);
  if(open1 != check && check > -1 && total1>=amount && amount >0){
    var money=amount*(-1);
    accounts[open1].movements.push(money);
    accounts[check].movements.push(amount)
    myFunction();
  }
}
function loginForTransfer(userName){

  for(let i=0;i<accounts.length;i++){
    var id=accounts[i].owner.split(' ');
    var pin=accounts[i].pin;
    var first='';
    for(let i=0;i<id.length;i++){
      first=first.concat(id[i].slice(0,1).toLowerCase());
    }
    // console.log(first);
    if(userName == first){
  
      return i;
    }
  }
    return -1;
  }

  ///loan 
  function some1(loan){
    for(let i=0;i<accounts.length;i++){
      var amount = accounts[open1].movements[i];
      if(amount >= loan*0.1){
        return amount
      }
    }
    return loan*0.1-1;
  }
  function loan(){
    // form__input--loan-amount
    var loanAmout1=document.getElementById('form__input--loan-amount').value;
    var loanAmout=Number(loanAmout1);
    // console.log(typeof loanAmout, loanAmout)
    if(loanAmout > 0 && some1(loanAmout)>=loanAmout*0.1){
      accounts[open1].movements.push(loanAmout);
      myFunction()
    }

  }