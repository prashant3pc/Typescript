let username: string = "Prashant";
let age: number = 22;
let isLearning: boolean = true;
console.log(username);
console.log(age);
console.log(isLearning);

let movieTitle: string = "Avenger";
let ticketPrice: number = 300;
let isAvailable: boolean = true;
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

function calculateBookingTotal(
  ticketPrice: number,
  numberOfSeats: number,
): number {
  return ticketPrice * numberOfSeats;
}
const total = calculateBookingTotal(400, 3);
console.log(total);
export {};

//Union tyes
let bookingStatus: string | number;
bookingStatus = "Pending";
console.log(bookingStatus);
bookingStatus = 1;
console.log(bookingStatus);
// userId = true;   // ❌ Error

// Union types in functions
function displayBookingId(id: string | number): string | number {
  return id;
}
console.log(displayBookingId("BK101"));
console.log(displayBookingId("202"));

//Optional parameters
function calculatePrice(price: number, discount?: number): number {
  if (discount !== undefined) {
    return price - discount;
  }

  return price;
}
console.log(calculatePrice(500));
console.log(calculatePrice(500, 100));

// Arrays in TypeScript
const genres: string[] = ["action", "thriller", "comedy"];
genres.push("sci-fi");
// genres.push("100"); // Error: number is not a string
console.log(genres);
