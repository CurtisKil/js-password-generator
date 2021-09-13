const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

// 4 different functions to generate a random selection from the 4 different password character choices
// Use the method .fromCharCode to access the browser character set

// Get random lowercase letter
function randomLower() {
  return String.fromCharCode(Math.random() * 26 + 97);
}

// Get random uppercase letter
function randomUpper() {
  return String.fromCharCode(Math.random() * 26 + 65);
}

// Get random number
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
}

// Get random symbol
function randomSymbol() {
  const symbols = "!@#$%^&*<>,.=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
