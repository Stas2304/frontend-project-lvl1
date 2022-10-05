import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getEvenGameInfo = () => {
  const gameQuestions = [];
  const gameAnswers = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < roundsCount; i += 1) {
    const numberForGame = getRandomNumber();
    gameQuestions.push(numberForGame);

    const correctAnswer = numberForGame % 2 === 0 ? 'yes' : 'no';
    gameAnswers.push(correctAnswer);
  }

  return { gameQuestions, gameAnswers, gameRules };
};

const startEvenGame = () => {
  const gameQuestionsAndAnswers = getEvenGameInfo();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startEvenGame;
