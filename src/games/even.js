import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getEvenGameInfo = () => {
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < roundsCount; i += 1) {
    const numberForGame = getRandomNumber();
    gameQuestions.push(numberForGame);

    const correctAnswer = numberForGame % 2 === 0 ? 'yes' : 'no';
    correctGameAnswers.push(correctAnswer);
  }

  return { gameQuestions, correctGameAnswers, gameRules };
};

const startEvenGame = () => {
  const gameQuestionsAndAnswers = getEvenGameInfo();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startEvenGame;
