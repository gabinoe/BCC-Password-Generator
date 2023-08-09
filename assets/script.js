// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Prompting for password criteria
  var length = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  // Validating password length
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length! Please enter a number between 8 and 128:"));
  }

  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validating that at least one character type is selected
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
    alert("At least one character type must be selected!");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Generating the password based on selected criteria
  var characterPool = "";
  var password = "";

  if (includeLowercase) {
    characterPool += "abcdefghijklmnopqrstuvwxyz";
  }

  if (includeUppercase) {
    characterPool += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (includeNumeric) {
    characterPool += "0123456789";
  }

  if (includeSpecial) {
    characterPool += "!@#$%^&*()";
  }

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }

  // Displaying the generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generate.addEventListener("click", writePassword);

