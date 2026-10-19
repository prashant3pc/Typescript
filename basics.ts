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
const prices: number[] = [500, 700, 900];
prices.push(1000); // Allowed
// prices.push("cheap"); // Error: string is not a number
console.log(prices);

// Arrays in TypeScript
const genres: string[] = ["action", "thriller", "comedy"];
genres.push("sci-fi");
// genres.push(100); // Error: number is not a string
console.log(genres);

// Object types in TypeScript
const user: {
  name: string;
  age: number;
  isActive: boolean;
} = {
  name: "Prashant",
  age: 22,
  isActive: true,
};
console.log(user.name);
console.log(user.age);

// Lesson: Type aliases --- Problem we're solving: Imagine you create 10 movie objects. Each one needs a title, duration, and price. Do you want to write the same object type definition 10 times? No. A type alias lets us define it once and reuse it.
type User = {
  name: string;
  age: number;
  isActive: boolean;
};
const user1: User = {
  name: "Prashant ",
  age: 22,
  isActive: true,
};
const user2: User = {
  name: "Puspa",
  age: 22,
  isActive: false,
};
console.log(user1.name);
console.log(user2.isActive);

// Lesson: Passing objects into functions
type Users = {
  name: string;
  age: number;
  isActive: boolean;
};
function displayUser(user: Users): void {
  console.log(user.name);
  console.log(user.isActive);
}
const users1: Users = {
  name: "Prashant ",
  age: 22,
  isActive: true,
};
displayUser(users1);

// TypeScript interface.
interface Movie {
  title: string;
  price: number;
}
const movie: Movie = {
  title: "Avengers",
  price: 500,
};
console.log(movie.title);
