import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getGCD = (num1, num2) => {
  const remainder = num1 % num2;
  return num2 === 0 ? num1 : getGCD(num2, remainder);
};

const generateQuestionsAnswersForGCDGame = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < roundsCount; i += 1) {
    const numForGame1 = getRandomNumber();
    const numForGame2 = getRandomNumber();
    const question = `${numForGame1} ${numForGame2}`;
    gameQuestions.push(question);

    const correctAnswer = getGCD(numForGame1, numForGame2);
    correctGameAnswers.push(String(correctAnswer));
  }

  return { gameQuestions, correctGameAnswers, gameRules };
};

const startGcdGame = () => {
  const gameQuestionsAndAnswers = generateQuestionsAnswersForGCDGame();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startGcdGame;
