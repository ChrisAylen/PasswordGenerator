// Assignment Code
var generateBtn = document.querySelector("#generate");
// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
//var specialCharsHex = [21, 22, 23, 24, 25, 26, 27, 28, 29, "2A", "2B", "2C", "2D", "2E", "2F", "3A", "3B", "3C", "3D", "3E", "3F",
//40, "5B", "5C", "5D", "5E", "5F", 60, "7B", "7C", "7D", "7E"];
var specialDecimal = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126] //32
var lowerDecimal = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122] //26
var upperDecimal = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]; //26
var numericDecimal = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]; //10
//Total 94


// var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("working");
//writePassword();
// console.log(String.fromCharCode(33));
// console.log(String.fromCodePoint(21));

// hexToDecimal = hex => parseInt(hex, 16);
// console.log(hexToDecimal("29"));

//parseInt(string, radix);

// Write password to the #password input
function writePassword() {
  var userData = collectUserData();
  var password = generatePassword(userData);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function collectUserData() {
  var userData =
  {
    passwordLength: 0,
    upper: false,
    lower: false,
    numeric: false,
    special: false
  }
  userData.passwordLength = prompt("How long would you like your password to be (between 8 and 128 digits)?")
  userData.lower = confirm("Use lower case letters?");
  userData.upper = confirm("Use upper case letters?");
  userData.numeric = confirm("Use numbers?");
  userData.special = confirm("Use special characters?")
  return userData;

}

function generatePassword(userData) {
  var passwordToReturn="";// = "NothingToSeeYet";
  var idx=0;
  //Crude vechicle for counting the number of character types required (1-4)
  // var characterTypes = [userData.upper, userData.lower, userData.numeric, userData.special];
  // var numberOfTrues = characterTypes.filter((value) => value).length;
  // console.log(numberOfTrues);

  // while (idx < userData.passwordLength) {
  //   var randomReturn = getRandomNumber(userData.passwordLength - idx);
  //   idx = userData.passwordLength - randomReturn;
  // }
  // console.log(getRandomNumber(userData.passwordLength - idx));

  //some logic to try:  concatinate the in scope datasets and loop over the set the number of times needs for the password picking a random index. 
  var customGroup = produceCustomCharGroups(userData);
  var passwordLength=parseInt(userData.passwordLength);
  while (idx < passwordLength) {
    console.log(getRandomNumber(customGroup.length));
    var letter = String.fromCharCode(getRandomNumber(customGroup.length));
    passwordToReturn = passwordToReturn + letter
    

    idx++;
  }
  
  return passwordToReturn;


}
function produceCustomCharGroups(userData) {
  var customGroup;

  if (userData.upper == true) {
    customGroup = upperDecimal;
  }
  if (userData.lower == true) {
    customGroup = customGroup.concat(lowerDecimal);
  }
  if (userData.numeric == true) {
    customGroup = customGroup.concat(numericDecimal);
  }
  if (userData.special == true) {
    customGroup = customGroup.concat(specialDecimal);
  }
  return customGroup;
}



function getRandomNumber(lengthToUse) {
  
  var returnNo= Math.floor(Math.random() * lengthToUse);
  return returnNo;


}
