import { getRandomNumber, makeGameLogic } from '../index.js';

const getEvenGameInfo = () => {
  const gameQuestions = [];
  const gameAnswers = [];
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  for (let i = 0; i < 3; i += 1) {
    const numberForGame = getRandomNumber();
    gameQuestions.push(numberForGame);

    const correctAnswer = numberForGame % 2 === 0 ? 'yes' : 'no';
    gameAnswers.push(correctAnswer);
  }

  return { gameQuestions, gameAnswers, gameRules };
};

const startEvenGame = () => {
  const gameInfo = getEvenGameInfo();

  makeGameLogic(gameInfo);
};

export default startEvenGame;
