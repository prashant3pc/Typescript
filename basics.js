"use strict";
let username = "Prashant";
let age = 22;
let isLearning = true;
console.log(username);
console.log(age);
console.log(isLearning);
let movieTitle = "Avenger";
let ticketPrice = 300;
let isAvailable = true;
console.log(movieTitle);
console.log(ticketPrice);
console.log(isAvailable);
ticketPrice = 500;
// TypeScript infers these types:
// - movieName → string
// - ticketPrice → number
// - isAvailable → boolean
let director = "Christopher Nolan";
let duration = 150;
let isReleased = true;
duration = 200;
function calculateBookingTotal(ticketPrice, numberOfSeats) {
    return ticketPrice * numberOfSeats;
}
const total = calculateBookingTotal(400, 3);
console.log(total);
