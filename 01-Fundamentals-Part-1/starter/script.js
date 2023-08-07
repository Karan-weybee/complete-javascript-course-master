////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/
// let js="amazing";

// let mark_height =1.88;
// let mark_mass=95;
// let john_height=1.76;
// let john_mass=85;

// let mark_bmi=mark_mass/(mark_height * mark_height);
// let john_bmi=john_mass/(john_height * john_height);

// markHigherJohn = mark_bmi > john_bmi;
// console.log(markHigherJohn) 

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// let mark_height =1.88;
// let mark_mass=95;
// let john_height=1.76;
// let john_mass=85;

// let mark_bmi=mark_mass/(mark_height * mark_height);
// let john_bmi=john_mass/(john_height * john_height);

// markHigherJohn = mark_bmi > john_bmi;
// if(markHigherJohn){
//     console.log(`mark's bmi ${mark_bmi} is higher then john's ${john_bmi}`)
// }
// else{
//     console.log(`john's bmi ${john_bmi} is higher then mark's ${mark_bmi}`)
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const scoreDolphins=(97 +112+80)/3;
// const scoreKoalas=(109 + 95 + 50)/3;
// console.log(scoreDolphins,scoreKoalas);
// if(scoreDolphins > scoreKoalas && scoreDolphins>= 100){
//     console.log("dolphine win the trophy")
// }
// else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log("koalas win the trophy");
// }
// else if (scoreKoalas === scoreDolphins && scoreDolphins >= 100 && scoreKoalas>=100){
//     console.log("both win the trophy");
// }
// else {
//     console.log("no one can win the trophy");
// }

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
// value=275;
// var tip =value > 50 && value<300 ? value*0.15:value*0.20;

// console.log(`the bill was ${value}, and the tip was ${tip} ,and the total value ${value+tip}`);


///////////////////////////////////////////////////////
//////////////// practice ////////////////

// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

var country ="india";
var continent = 'asia';
var population ='5000000';
console.log(`country is ${country} and continent is ${continent} and population is ${population}`);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

isIsland=false;
var language =null;
console.log(`isIsland is ${isIsland} and population is ${population} country is ${country} and language is ${language}`);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some 
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never 
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language ="Gujrati";
const name="karan";
// name = "jay";

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portugues

var country1Population=population/2;
var country2Population=population/2;

population++;
console.log(`population is ${population}`);

if(population > 6000000){
    console.log("population is lower than finland");
}
else{
    console.log("population is higher than finland");
}

var popu_avg = population>33000000 ? "greater then " : "less than ";
console.log(`${popu_avg}`);

console.log(`${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`);

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

console.log(`${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`);

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to origina

if(population > 33000000){
    console.log(`${country}'s population is above average`);
}
else{
    
    console.log(`${country}'s population is below average`);
}

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were righ

console.log('9' - '5');
console.log( '19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. Take 
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily 
// change some variables in order to make the condition true (unless you live in 
// Canada :D

if(language=="english" && population < 55000000){
       console.log('You should live in portugal');
}
else{
    console.log(`${country} not meet your criteria`);
}

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

switch(language){
    case "mandarin":
    case "chinese": console.log("Most popular of native speak"); break;
    case "english" : console.log("native speaker"); break;
    case "hindi" : console.log("number 4");
    case "arebik" : console.log("5th most popular language"); break;
    default : console.log("Great language to d");

}

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator 
// to log a string like this to the console: 'Portugal's population is above average'. 
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to origina

var popu_avg1 = population>33000000 ? "greater then " : "less than ";
console.log(`${popu_avg}`);

