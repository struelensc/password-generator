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

  // 1. create buckets for each character type

function generatePassword() {
  // 2. get user preferences
  // 3. collect random characters from the buckets
  // 4. create a guaranteed collection
  // 5. create an array for the password
  // 6. randomly draw a character and add to array
  // 7. loop as many times as specified
  // 8. join array into a string
  // 9. return string
}