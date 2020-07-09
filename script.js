/*PSEUDOCODE PREP:
prompt for numeric variables
prompt for special character
prompt for lowercase letters
prompt for uppercase letters
prompt for password character length

create array of numeric variables from 1 - 9
get random numeric variable 

create array of special characters 
get random special character from array

prompt for lowercase letters
create array of lowercase letters
get random lowercase letters from array


create array of uppercase letters
get random uppercase letters

create loop that gathers random variables generated
create function that combines random variables to specified length (?)


return random variables at specified length on page */

// create arrays
var num = "123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specChar = "$#%^&*!?";

alert(
  "Welcome to the Password Generator. Secure passwords require several different types of characters. You will receive prompts on which types of characters you want in your password."
);
var numConfirm = confirm("Do you want to have numbers in your password?");
var lowConfirm = confirm(
  "Do you want to have lower case letters in your password?"
);
var UpConfirm = confirm(
  "Do you want to have UPPER CASE letters in your password?"
);
var specConfirm = confirm(
  "Do you want to have special characters '#$%^&', etc' in your password?"
);
var length = prompt(
  "Your password should be between 8 and 128 characters. How long would you like the password to be?"
);
console.log(length);
// add if then statement to make sure the length is between 8 and 128 - include alerts if answer is not in the range.

while (length < 8 || length > 128) {
  alert("You chose " + length + ". You must chose a length between 8 and 128");
  var length = prompt("How long would you like the password to be?");
}

while (
  numConfirm === false ||
  lowConfirm === false ||
  UpConfirm === false ||
  specConfirm === false
) {
  alert("You did not choose any characters for your password.");
  var numConfirm = confirm("Do you want to have numbers in your password?");
  var lowConfirm = confirm(
    "Do you want to have lower case letters in your password?"
  );
  var UpConfirm = confirm(
    "Do you want to have UPPER CASE letters in your password?"
  );
  var specConfirm = confirm(
    "Do you want to have special characters '#$%^&', etc' in your password?"
  );
  var length = prompt(
    "Your password should be between 8 and 128 characters. How long would you like the password to be?"
  );
}

alert(
  "We've collected all your answers. Click the Blue Button to generate the password! You can press it as many times as you want to generate new passwords."
);
console.log(numConfirm);

var passwordConstraints = "";

if (numConfirm === true) {
  passwordConstraints += "#";
}
if (lowConfirm === true) {
  passwordConstraints += "a";
}
if (UpConfirm === true) {
  passwordConstraints += "A";
}

if (specConfirm === true) {
  passwordConstraints += "!";
}

// taken from stack overflow - modified slightly
// https://stackoverflow.com/questions/10726909/random-alpha-numeric-string-in-javascript

function randomString(length, chars) {
  var constraints = "";
  if (chars.indexOf("a") > -1) constraints += "abcdefghijklmnopqrstuvwxyz";
  if (chars.indexOf("A") > -1) constraints += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (chars.indexOf("#") > -1) constraints += "0123456789";
  if (chars.indexOf("!") > -1) constraints += "~!@#$%^&*+?";
  var result = "";
  for (var i = length; i > 0; --i)
    result += constraints[Math.floor(Math.random() * constraints.length)];
  return result;
}

console.log(randomString(length, passwordConstraints));

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = randomString(length, passwordConstraints);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
