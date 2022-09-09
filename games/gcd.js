import {
  greeting, getUserName, getRandomNumber, gameLogicMaker,
} from '../src/index.js';

const gcdGame = () => {
  const getgcdGameInfo = () => {
    const gameQuestions = [];
    const gameAnswers = [];

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

    for (let i = 0; i < 3; i += 1) {
      const numForGame1 = getRandomNumber();
      const numForGame2 = getRandomNumber();
      const question = `${numForGame1} ${numForGame2}`;
      gameQuestions.push(question);

      const correctAnswer = getGCD(numForGame1, numForGame2);
      gameAnswers.push(String(correctAnswer));
    }

    return { gameQuestions, gameAnswers };
  };

  const gameInfo = getgcdGameInfo();
  gameInfo.rules = 'Find the greatest common divisor of given numbers.';

  greeting();

  gameInfo.userName = getUserName();

  gameLogicMaker(gameInfo);
};

export default gcdGame;
