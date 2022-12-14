import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateQuestionsAnswersForPrimeGame = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < roundsCount; i += 1) {
    const numberForGame = getRandomNumber();
    gameQuestions.push(numberForGame);

    const correctAnswer = isPrimeNumber(numberForGame) ? 'yes' : 'no';
    correctGameAnswers.push(correctAnswer);
  }

  return { gameQuestions, correctGameAnswers, gameRules };
};

const startPrimeGame = () => {
  const gameQuestionsAndAnswers = generateQuestionsAnswersForPrimeGame();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startPrimeGame;
