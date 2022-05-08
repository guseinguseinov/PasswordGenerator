var password = document.querySelector('input#password');
var passwordLength = document.querySelector('input#password-length');
var isUpperIncluded = document.querySelector('input#uppercase');
var isLowerIncluded = document.querySelector('input#lowercase');
var isNumbersIncluded = document.querySelector('input#numbers');
var isSymbolsIncluded = document.querySelector('input#symbols');
var copyButton = document.querySelector('button.copy-btn');
var generatePasswordButton = document.querySelector('button.password-generate');

// password components
var uppercase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var lowercase = uppercase.toLowerCase();
var numbers = '1234567890';
var symbols = '~!@#$%^&*()_,./\|[]+=-<>';


const generatePassword = function () {




}

const copyPassword = function () {
  password.select();
  navigator.clipboard.writeText(password.value);
  password.value = '';
  alert('Text Copied to Clipboard');
}

generatePasswordButton.onclick = generatePassword;

copyButton.onclick = copyPassword;



console.log(isSymbolsIncluded.checked);
console.log(passwordLength.value);
