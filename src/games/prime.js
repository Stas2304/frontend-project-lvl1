import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const isPrimeNumber = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return number < 2 ? 'no' : 'yes';
};

const getPrimeGameInfo = () => {
  const gameQuestions = [];
  const gameAnswers = [];
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  for (let i = 0; i < roundsCount; i += 1) {
    const numberForGame = getRandomNumber();
    gameQuestions.push(numberForGame);

    const correctAnswer = isPrimeNumber(numberForGame);
    gameAnswers.push(correctAnswer);
  }

  return { gameQuestions, gameAnswers, gameRules };
};

const startPrimeGame = () => {
  const gameQuestionsAndAnswers = getPrimeGameInfo();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startPrimeGame;
