/*****************************************
 * Charpter: The Basics
 ****************************************/
// const message ="Hello world!";
// message();
// const user = {
//   name: "Jack He",
//   age: 26,
// };
// // user.location;
// console.log(user);
// function greet(person, date) {
//   console.log(`Hello ${person}, today is ${date}!`);
// }
//
// greet("Brendan");
// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
 
// // greet("Maddison", Date());
// greet("Maddison", new Date());
/*****************************************
 * Charpter: Everyday Types
 ****************************************/
// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// let myName: string = "Alice";
// // No type annotation needed -- 'myName' inferred as type 'string'
// let yourName = "Alice";
// // Parameter type annotation
// function greet(name: string) {
//   console.log("Hello, " + name.toUpperCase() + "!!");
// }

// greet(42)
// const names = ["Alice", "Bob", "Eve"];
 
// // Contextual typing for function - parameter s inferred to have type string
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// function printName(obj: { first: string; last?: string }) {
//   if (obj.last === undefined) {
//     console.log(`First name:${obj.first}`);
//   } else {
//     console.log(`First name:${obj.first} Last name: ${obj.last}`);
//   }
// }
// // Both OK
// printName({ first: "Bob" });
// printName({ first: "Alice", last: "Alisson" });
// function welcomePeople(x: string[] | string) {
//   if (Array.isArray(x)) {
//     // Here: 'x' is 'string[]'
//     console.log("Hello, " + x.join(" and "));
//   } else {
//     // Here: 'x' is 'string'
//     console.log("Welcome lone traveler " + x);
//   }
// }

// welcomePeople("Jack");
// welcomePeople(["Jason", "Jack", "Jeremy"]);
// Type alias
// Scenario #1
// type Point = {
//   x: number;
//   y: number;
// };
// // Scenario #2
// type ID = number | string;
// // Scenario #3
// type UserInputSanitizedString = string;
 
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
 
// // Exactly the same as the earlier example
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
 
// // printCoord({ x: 100, y: 100 });
 
// function sanitizeInput(str: string): UserInputSanitizedString {
//   return sanitize(str);
// }
 
// // Create a sanitized input
// let userInput = sanitizeInput(getInput());
 
// // Can still be re-assigned with a string though
// userInput = "new input";

// // Interface example
// interface Point {
//   x: number;
//   y: number;
// }
 
// function printCoord(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
 
// printCoord({ x: 100, y: 100 });
// type Window = {
//   title: string;
// }

// type Window = {
//   ts: TypeScriptAPI;
// }
// interface Animal {
//   name: string;
// }

// interface Bear extends Animal {
//   honey: boolean;
// }

// const bear = getBear();
// bear.name;
// bear.honey;
// const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");
// let x: "hello" = "hello";
// // OK
// x = "hello";
// // ...
// x = "howdy";
// function compare(a: string, b: string): -1 | 0 | 1 {
//   return a === b ? 0 : a > b ? 1 : -1;
// }
// interface Options {
//   width: number;
// }
// function configure(x: Options | "auto") {
//   // ...
// }
// configure({ width: 100 });
// configure("auto");
// configure("automatic");
// const obj = { counter: 0 };
// if (someCondition) {
//   obj.counter = 1;
// }
const obj = { counter: 0 };
if (someCondition) {
  obj.counter = 1;
}
declare function handleRequest(url: string, method: "GET" | "POST"): void;
// Way #1 to work around this issue above
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
// Way #2
handleRequest(req.url, req.method as "GET");
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}