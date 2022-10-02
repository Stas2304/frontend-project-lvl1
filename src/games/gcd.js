import { makeGameLogic, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getGCD = (firstNum, SecondNum) => {
  let num1 = firstNum;
  let num2 = SecondNum;
  let remainder;

  do {
    remainder = num1 % num2;
    if (remainder !== 0) {
      num1 = num2;
      num2 = remainder;
    }
  } while (remainder !== 0);
  return num2;
};

const getgcdGameInfo = () => {
  const gameQuestions = [];
  const gameAnswers = [];
  const gameRules = 'Find the greatest common divisor of given numbers.';

  for (let i = 0; i < roundsCount; i += 1) {
    const numForGame1 = getRandomNumber();
    const numForGame2 = getRandomNumber();
    const question = `${numForGame1} ${numForGame2}`;
    gameQuestions.push(question);

    const correctAnswer = getGCD(numForGame1, numForGame2);
    gameAnswers.push(String(correctAnswer));
  }

  return { gameQuestions, gameAnswers, gameRules };
};

const startGcdGame = () => {
  const gameQuestionsAndAnswers = getgcdGameInfo();

  makeGameLogic(gameQuestionsAndAnswers);
};

export default startGcdGame;
