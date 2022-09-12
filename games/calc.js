import { getRandomNumber, makeGameLogic } from '../src/index.js';

const calcGame = () => {
  const getCalcGameInfo = () => {
    const operators = ['-', '+', '*'];
    const gameQuestions = [];
    const gameAnswers = [];
    const gameRules = 'What is the result of the expression?';

    for (let i = 0; i < 3; i += 1) {
      const num1 = getRandomNumber();
      const operator = operators[getRandomNumber(0, 2)];
      const num2 = getRandomNumber();

      const question = `${num1} ${operator} ${num2}`;
      gameQuestions.push(question);

      let answer;
      if (operator === '-') {
        answer = num1 - num2;
      } else if (operator === '+') {
        answer = num1 + num2;
      } else {
        answer = num1 * num2;
      }
      gameAnswers.push(String(answer));
    }

    return { gameQuestions, gameAnswers, gameRules };
  };

  const gameInfo = getCalcGameInfo();

  makeGameLogic(gameInfo);
};

export default calcGame;
