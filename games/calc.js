import { getRandomNumber, makeGameLogic } from '../src/index.js';

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
    switch (operator) {
      case '-':
        answer = num1 - num2;
        break;
      case '+':
        answer = num1 + num2;
        break;
      default:
        answer = num1 * num2;
    }
    gameAnswers.push(String(answer));
  }

  return { gameQuestions, gameAnswers, gameRules };
};

const startCalcGame = () => {
  const gameInfo = getCalcGameInfo();

  makeGameLogic(gameInfo);
};

export default startCalcGame;
