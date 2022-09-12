import {
  greeting, getUserName, getRandomNumber, gameLogicMaker,
} from '../src/index.js';

const primeGame = () => {
  const getPrimeGameInfo = () => {
    const gameQuestions = [];
    const gameAnswers = [];
    const isPrimeNumber = (number) => {
      for (let i = 2; i <= number / 2; i += 1) {
        if (number % i === 0) {
          return 'no';
        }
      }
      return number < 2 ? 'no' : 'yes';
    };

    for (let i = 0; i < 3; i += 1) {
      const numberForGame = getRandomNumber();
      gameQuestions.push(numberForGame);

      const correctAnswer = isPrimeNumber(numberForGame);
      gameAnswers.push(correctAnswer);
    }

    return { gameQuestions, gameAnswers };
  };

  const gameInfo = getPrimeGameInfo();
  gameInfo.rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  greeting();

  gameInfo.userName = getUserName();

  gameLogicMaker(gameInfo);
};

export default primeGame;
