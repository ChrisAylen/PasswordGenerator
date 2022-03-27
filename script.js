// Assignment Code
var generateBtn = document.querySelector("#generate");
// !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
var userData;
var specialDecimal = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126] //32
var lowerDecimal = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122] //26
var upperDecimal = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]; //26
var numericDecimal = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];

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
  userData =
  {
    passwordLength: 0,
    upper: false,
    lower: false,
    numeric: false,
    special: false
  }
  userData.passwordLength = prompt("How long would you like your password to be (between 8 and 128 digits)?")
  if (userData.passwordLength >= 8 && userData.passwordLength <= 128) {
    if (typeof parseInt(userData.passwordLength) === 'number') {

      userData.lower = confirm("Use lower case letters?");
      userData.upper = confirm("Use upper case letters?");
      userData.numeric = confirm("Use numbers?");
      userData.special = confirm("Use special characters?")
      if (userData.lower == false && userData.upper == false && userData.numeric == false && userData.special == false) {
        alert("You must select at least one character type (upper, lower, numeric, special).")
      }
    }
    else {
      collectUserData();
    }
  }
  else {
    alert("The password length must be at least 8 characters in lengeth and no more than 128 charatcers in length.  Your input must also be a number (8-128)");
    collectUserData()
  }
}

function generatePassword() {
  var passwordToReturn = "";
  var idx = 0;
  var customGroup = produceCustomCharGroups(userData);
  var passwordLength = parseInt(userData.passwordLength);
  while (idx < passwordLength) {
    console.log(getRandomNumber(customGroup.length));
    var letter = String.fromCharCode(customGroup[getRandomNumber(customGroup.length)]);
    console.log(letter);
    passwordToReturn = passwordToReturn + letter
    idx++;
  }
  return passwordToReturn;
}

function produceCustomCharGroups() {
  var customGroup;
  if (userData.upper == true) {
    customGroup = upperDecimal;
  }
  if (userData.lower == true) {
    if (customGroup == null) {
      customGroup = lowerDecimal;
    }
    else {
      customGroup = customGroup.concat(lowerDecimal);
    }
  }
  if (userData.numeric == true) {
    if (customGroup == null) {
      customGroup = numericDecimal;
    }
    else {
      customGroup = customGroup.concat(numericDecimal);
    }
  }
  if (userData.special == true) {
    if (customGroup == null) {
      customGroup = specialDecimal;
    }
    else {
      customGroup = customGroup.concat(specialDecimal);
    }
  }
  return customGroup;
}

function getRandomNumber(lengthToUse) {
  var returnNo = Math.floor(Math.random() * lengthToUse);
  console.log(returnNo);
  return returnNo;
}
