var password = document.querySelector('input#password');
var passwordLength = document.querySelector('input#password-length');
var isUpperIncluded = document.querySelector('input#uppercase');
var isLowerIncluded = document.querySelector('input#lowercase');
var isNumbersIncluded = document.querySelector('input#numbers');
var isSymbolsIncluded = document.querySelector('input#symbols');
var copyButton = document.querySelector('button.copy-btn');
var generatePasswordButton = document.querySelector('button.password-generate');

// password components
var upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
var lowerCase = upperCase.toLowerCase();
var numbers = '1234567890';
var symbols = '_/\|[]<>!@#$%^&*()';

const generatePassword = function () {

  let characters = '';
  let passwd = '';

  if (isUpperIncluded.checked) characters += upperCase;

  if (isLowerIncluded.checked) characters += lowerCase;

  if (isNumbersIncluded.checked) characters += numbers;

  if (isSymbolsIncluded.checked) characters += symbols;

  if (characters.length === 0) {
    alert('Choose which characters will be in your password.');
    return;
  }

  for (let i = 0; i < passwordLength.value; i ++) {
    passwd += characters[Math.floor(Math.random()*characters.length)];
  }
  password.value = passwd;
}

const copyPassword = function () {
  password.select();
  navigator.clipboard.writeText(password.value);
  alert('Text Copied to Clipboard');
}

generatePasswordButton.onclick = generatePassword;
copyButton.onclick = copyPassword;
