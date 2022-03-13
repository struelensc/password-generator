// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character arrays.
var lowercase = ["a",	"b",	"c",	"d",	"e",	"f",	"g",	"h",	"i",	"j",	"k",	"l",	"m",	"n",	"o",	"p",	"q",	"r",	"s",	"t",	"u",	"v",	"w",	"x",	"y",	"z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword() {
  var passwordBucket = [];
  var initialPassword = [];
  var finalPassword = [];

  // Password options element
  var passwordOptions = {
    charStrings: ["lowercase letters", "uppercase letters", "numbers", "special characters"],
    charArrays: [lowercase, uppercase, numeric, specialChar],
    charFunction: function (char, bucket) {
      if (window.confirm("Would you like " + char + "?")) {
          passwordBucket.push(...bucket);
          initialPassword.push(bucket[Math.floor(Math.random() * bucket.length)]);
      }
    },
    numOfChar: function() {
        numOfChar = prompt("How many characters would you like your password to be?", "Enter a number between 8 and 128");
        return (numOfChar);
    }
  }

  // Runs function in the passwordOptions element to ask for number of characters.
  passwordOptions.numOfChar();

  // Validates that the user's input for number of characters is more than 7 and less than 129.
  if (numOfChar >= 8 && numOfChar <= 128) {
    // Loops through the character questions function in the password options element using the charStrings and charArrays arrays and randomly selects one character from approved character types.
    for (let i = 0; i < passwordOptions.charArrays.length; i++) {
      var string = passwordOptions.charStrings[i];
      passwordOptions.charFunction(string, passwordOptions.charArrays[i]);
    }

    // Fills in remaining characters with randomly selected characters from approved character types.
    for (let i = initialPassword.length; i < numOfChar; i++) {
      initialPassword.push(passwordBucket[Math.floor(Math.random() * passwordBucket.length)]);
    }

    shufflePassword(initialPassword);

    var finalPassword = initialPassword.join("");

    // Returns validated and shuffled password.
    return finalPassword;

  } else if (numOfChar < 8){
      alert("Please choose a password length of 8 or more characters");
      return null;
  } else if (numOfChar > 128){
      alert("Please choose a password length of less than 128 characters");
      return null;
  } else {
    alert("Please enter in a number between 8 and 128")
    return null;
  }
}

// Shuffles array using the Fisher-Yates algorithm.
function shufflePassword(array) {
  var m = array.length;
  var temp;
  var i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    temp = array[m];
    array[m] = array[i];
    array[i] = temp;
  }

  return array;
}