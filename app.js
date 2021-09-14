const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

// Generate event listen
generateBtn.addEventListener("click", () => {
  // Get password length & change it from string to number
  const length = +lengthEl.value;
  // Get checkbox values
  const hasLower = lowerCaseEl.checked;
  const hasUpper = upperCaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  console.log(hasLower, hasUpper, hasNumber, hasSymbol);

  //   Generate password based off character choices and display password to UI
  passwordEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasSymbol,
    hasNumber,
    length
  );
});

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
  // 1. Init pw variable
  // 2. Filter out unchecked types
  // 3. Loop over length & call generator function for each type
  // 4. Add final pw to the pw var & return

  let generatedPassword = "";

  const typesCount = lower + upper + number + symbol;

  // console.log("typesCount:", typesCount);

  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  // console.log("typesArr: ", typesArr);

  // No checked/selected types
  if (typesCount === 0) {
    return "";
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      console.log("funcName: ", funcName);

      generatedPassword += randomFunc[funcName]();
    });
  }
  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
}

// 4 different functions to generate a random selection from the 4 different password character choices
// Use the method .fromCharCode to access the browser character set

// Get random lowercase letter
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// Get random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Get random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// Get random symbol
function getRandomSymbol() {
  const symbols = "!@#$%^&*<>,.=";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
