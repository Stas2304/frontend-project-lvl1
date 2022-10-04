import { makeGameLogic, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getAnswerForCalc = (num1, operator, num2) => {
  let answer;

  switch (operator) {
    case '-':
      answer = num1 - num2;
      break;
    case '+':
      answer = num1 + num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator state: '${operator}'!`);
  }
  return answer;
};

const getCalcGameInfo = () => {
  const operators = ['-', '+', '*'];
  const gameQuestions = [];
  const gameAnswers = [];
  const gameRules = 'What is the result of the expression?';

  for (let i = 0; i < roundsCount; i += 1) {
    const num1 = getRandomNumber();
    const operator = operators[getRandomNumber(0, 2)];
    const num2 = getRandomNumber();

    const question = `${num1} ${operator} ${num2}`;
    gameQuestions.push(question);

    const answer = getAnswerForCalc(num1, operator, num2);
    gameAnswers.push(String(answer));
  }

  return { gameQuestions, gameAnswers, gameRules };
};

const startCalcGame = () => {
  const gameQuestionsAndAnswers = getCalcGameInfo();

  makeGameLogic(gameQuestionsAndAnswers);
};

export default startCalcGame;
