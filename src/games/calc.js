import { startGameProcess, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getAnswerForCalc = (num1, operator, num2) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator state: '${operator}'!`);
  }
};

const getCalcGameInfo = () => {
  const operators = ['-', '+', '*'];
  const gameQuestions = [];
  const correctGameAnswers = [];
  const gameRules = 'What is the result of the expression?';

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber();
    const operator = operators[getRandomNumber(0, 2)];
    const num2 = getRandomNumber();

    const question = `${num1} ${operator} ${num2}`;
    gameQuestions.push(question);

    const answer = getAnswerForCalc(num1, operator, num2);
    correctGameAnswers.push(String(answer));
  }

  return { gameQuestions, correctGameAnswers, gameRules };
};

const startCalcGame = () => {
  const gameQuestionsAndAnswers = getCalcGameInfo();

  startGameProcess(gameQuestionsAndAnswers);
};

export default startCalcGame;
