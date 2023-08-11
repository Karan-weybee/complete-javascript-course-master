'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {

    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',

    players: [

        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze'
        ],
    ],

    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,

    },
};

// 1
const [player1, player2] = game.players;
console.log(player1, player2)
// 2
const [gk1, ...fieldPlayer1] = player1;
const [gk2, ...fieldPlayer2] = player2;
console.log(gk1, fieldPlayer1 + " other team " + gk2, fieldPlayer2);
// 3
const all = [...game.players[0], ...game.players[1]];
console.log(all);
// 4
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);
// 5
const {
    odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
//   6
const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
};
printGoals(...game.scored);

//7

team1 > team2 || console.log('Team 1 is more likely to win');
team1 < team2 || console.log('Team 2 is more likely to win');

// coding challenge #2

// bonus

var count = function (item) {
    let ans = 0;
    for (let i = 0; i < game.scored.length; i++) {
        if (item == game.scored[i]) {
            ans = ans + 1;
        }
    }
    return ans;
}

var items = [];
var counts = [];
var scoreWithName = {};

for (let i = 0; i < game.scored.length; i++) {
    if (!items.includes(game.scored[i])) {
        items.push(game.scored[i]);
        counts.push(count(game.scored[i]));
    }
}
for (let i = 0; i < items.length; i++) {
    scoreWithName[items[i]] = counts[i];
}
console.log(scoreWithName)


// 1.
for (const [i, player] of game.scored.entries())
    console.log(` ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr} ${odd}`);
}

/////////////practice//////////////
var set = new Set([56, 45, 67, 9]);
console.log(set)
for (const item of set) {
    console.log(item)
}

const rest = new Map([
    ["hjdfh", "fhjs"]
])
rest.set("jsd", "hgjs");
rest.set(document.querySelector('h1'), "test")
    .set("name", "karan")

console.log(rest)
rest.set("name", "arjun")
// for (const item of rest.keys()) {
//     console.log(item +" : "+rest.get(item))
// }
for (const [key, value] of rest) {
    console.log(key + " : " + rest.get(key))
}

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1.
var events = [];
for (const [key, value] of gameEvents) {
    events.includes(value) ? null : events.push(value)
}
console.log(events)

// 2.
for (const [key, value] of gameEvents) {
    key > 64 && value == '🔶 Yellow card' ? gameEvents.delete(key) : null;
}
for (const [key, value] of gameEvents) {
    console.log(key, value)
}

// 3.
console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
}


///////////// practice //////////

var name3 = "karan";
console.log(name3.slice(2, 4))
console.log(name3.indexOf("a"));
console.log(name3.lastIndexOf("r"));
console.log(name3.charAt(2));
console.log(name3.toLowerCase());
console.log(name3.toUpperCase());
var upp = name3.toLowerCase();
console.log(upp[0].toUpperCase()+upp.slice(1))
console.log(name3.length);
console.log(name3.includes("r"))
console.log("jaay".replaceAll("a","q"))
console.log("jaay".replaceAll(/a/g,"q"))
var demo="karan"
var demo1=" karan".trim();
console.log(demo === demo1)
console.log("karan".startsWith("ka"));
console.log("karan".endsWith("an"));

// masking the credit card number 

function mask (number) {
    var str = number + '';
    var last = str.slice(-4);
    console.log(last.padStart(str.length,'X'))
}

mask(657834654356)
var x=0;
var repeat=`repetation of ${x+=1}`;
console.log(repeat.repeat(5));

const array = [15, 16, 17, 18, 19];

function reducer(accumulators, currentValue, index) {
  const returns = accumulators + currentValue;
  console.log(
    `accumulator: ${accumulators}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}

array.reduce(reducer);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// var str ='underscore_case
// first_name
// some_variable
// calculate_ag
// delayed_departure'
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
