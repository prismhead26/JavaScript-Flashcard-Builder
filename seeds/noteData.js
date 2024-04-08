// require associated model
const { Note } = require("../models");

const noteData = [
  {
    title: "What is Javascript",
    body: "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    user_id: 1,
  },
  {
    title: "Global Execution Context vs Function Execution Context",
    body: `There are two types of execution contexts: global and function. \nThe global execution context is created when a JavaScript script first starts to run, and it represents the global scope in JavaScript. \nA function execution context is created whenever a function is called, representing the function's local scope.`,
    user_id: 1,
  },
  {
    title: "Function Execution Context",
    body: `A function execution context is created whenever a function is called, representing the function's local scope. \nThe memory component is also responsible for maintaining the scope chain, which is a list of variable objects that a function has access to, starting with its own variable object and continuing with the variable objects of its parent functions, all the way up to the global variable object.`,
    user_id: 1,
  },
  {
    title: "Call Stack and the Callback Queue",
    body: `The  is where all your javascript code gets pushed and executed one by one as the interpreter reads your program, and gets popped out once the execution is done. If your statement is asynchronous for example: setTimeout, ajax(), promise, or click event, then that code gets forwarded to Event table, this table is responsible for moving your asynchronous code to callback/event queue after specified time. \nThe callback queue is where your asynchronous code gets pushed to, and waits for the execution.`,
    user_id: 1,
  },
  {
    title: "Stack Vs. a Queue in terms of LIFO and FIFO",
    body: "The primary difference between Stack and Queue Data Structures is that Stack follows LIFO while Queue follows FIFO data structure type. LIFO refers to Last In First Out. It means that when we put data in a Stack, it processes the last entry first. Conversely, FIFO refers to First In First Out.",
    user_id: 1,
  },
  {
    title: "Lexical Environment",
    body: "A lexical environment in JavaScript is a data structure that stores the variables and functions that are defined in the current scope and all of the outer scopes. It is also known as the lexical scope or the lexical closure.",
    user_id: 1,
  },
  {
    title: "Encapsulation",
    body: "Encapsulation is a fundamental concept in object-oriented programming that refers to the practice of hiding the internal details of an object and exposing only the necessary information to the outside world.",
    user_id: 1,
  },
  {
    title: "Innheritance Vs Composition",
    body: "Composition simply embedding sub-object in an other object. Inheritance is deriving a class from another class so that the new class has all the characteristics of the parent class, plus new ones. (parent-child relationship).",
    user_id: 1,
  },
  {
    title: "Recursion",
    body: "RecursionRecursion is a programming pattern or concept embedded in many programming languages, and JavaScript is not left out. It is a feature used in creating a function that keeps calling itself but with a smaller input every consecutive time until the code's desired result from the start is achieved.",
    user_id: 1,
  },
];

const seedNote = () =>
  Note.bulkCreate(noteData, { individualHooks: true });
module.exports = seedNote;
