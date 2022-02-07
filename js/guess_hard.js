var randomNumber = Math.floor(Math.random() * 100) + 1;

var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;

guessField.focus();

function checkGuess() {
  var userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Предыдущие числа: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Да, это оно! Поздравляем!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!УВЫ И АХ, НО ВЫ НЕ УГАДАЛИ!!! Правильный ответ — '+ randomNumber;
    setGameOver();
  } else {
    lastResult.textContent = 'Неверно!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
    if(randomNumber - userGuess >= 50) {
      lowOrHi.textContent = 'Очень холодно';
    } else if(randomNumber - userGuess <= 50) {
      if(randomNumber - userGuess > 25) {
      lowOrHi.textContent = 'Холодно';
    } else if(randomNumber - userGuess > 10) {
      lowOrHi.textContent = 'Тепло';
    } else if(randomNumber - userGuess > 5) {
      lowOrHi.textContent = 'Теплее';
    } else {
      lowOrHi.textContent = 'Горячо';
    }
    }
  } else if(userGuess > randomNumber) {
      if(userGuess - randomNumber >= 50) {
        lowOrHi.textContent = 'Очень холодно';
      } else if(userGuess - randomNumber <= 50) {
        if(userGuess - randomNumber > 25) {
        lowOrHi.textContent = 'Холодно';
      } else if(userGuess - randomNumber > 10) {
        lowOrHi.textContent = 'Тепло';
      } else if(userGuess - randomNumber > 5) {
        lowOrHi.textContent = 'Теплее';
      } else {
        lowOrHi.textContent = 'Горячо';
      }
      }
    } 

  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начать новую игру';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}