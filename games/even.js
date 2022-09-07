import {
  greeting, getUserName, getRandomNumber, gameLogicMaker,
} from '../src/index.js';

const evenGame = () => {
  const getEvenGameInfo = () => {
    const gameQuestions = [];
    const gameAnswers = [];

    for (let i = 0; i < 3; i += 1) {
      const numberForGame = getRandomNumber();
      gameQuestions.push(numberForGame);

      const correctAnswer = numberForGame % 2 === 0 ? 'yes' : 'no';
      gameAnswers.push(correctAnswer);
    }

    return { gameQuestions, gameAnswers };
  };

  const gameInfo = getEvenGameInfo();
  gameInfo.rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  greeting();

  gameInfo.userName = getUserName();

  gameLogicMaker(gameInfo);
};

export default evenGame;
