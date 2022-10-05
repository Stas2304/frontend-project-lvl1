import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const getEvenGameInfo = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < roundsCount; i += 1) {
    const numberForGame = getRandomNumber();
    gameQuestions.push(numberForGame);

    const correctAnswer = isEven(numberForGame) ? 'yes' : 'no';
    correctGameAnswers.push(correctAnswer);
  }

  return { gameQuestions, correctGameAnswers, gameRules };
};

const startEvenGame = () => {
  const gameQuestionsAndAnswers = getEvenGameInfo();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startEvenGame;
