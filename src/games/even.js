import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const generateQuestionsAnswersForEvenGame = () => {
  const gameQuestions = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const correctGameAnswers = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const numberForGame = getRandomNumber();
    const correctAnswer = isEven(numberForGame) ? 'yes' : 'no';

    gameQuestions.push(numberForGame);
    correctGameAnswers.push(correctAnswer);
  }

  return { gameQuestions, correctGameAnswers, gameRules };
};

const startEvenGame = () => {
  const gameQuestionsAndAnswers = generateQuestionsAnswersForEvenGame();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startEvenGame;
