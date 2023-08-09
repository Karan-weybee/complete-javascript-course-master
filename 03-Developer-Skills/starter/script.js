// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Given an array of forecasted maximum temperatures, the thermometer displays a 
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1 
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
let str = " ";
function printForecast (arr ){
    for(let i=0;i<arr.length;i++){
        str+=`${arr[i]}⁰C in ${i+1} day... `;
    }
}

const array =[17,21,33];
printForecast(array);
console.log(str);