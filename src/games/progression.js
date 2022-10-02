import { makeGameLogic, roundsCount } from '../index.js';
import getRandomNumber from '../helpers.js';

const getProgression = () => {
  const progression = [];
  const progressionLength = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(2, 10);
  let progressionNumber = getRandomNumber(1, 20);

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += progressionStep;
  }
  return progression;
};

const getProgressionGameInfo = () => {
  const gameQuestions = [];
  const gameAnswers = [];
  const gameRules = 'What number is missing in the progression?';

  for (let i = 0; i < roundsCount; i += 1) {
    const progression = getProgression();
    const max = progression.length - 1;
    const indexHidenNumber = getRandomNumber(0, max);

    const correctAnswer = progression[indexHidenNumber];
    gameAnswers.push(String(correctAnswer));

    progression[indexHidenNumber] = '..';
    const question = progression.toString().replace(/,/g, ' ');
    gameQuestions.push(question);
  }
  return { gameQuestions, gameAnswers, gameRules };
};

const startProgressionGame = () => {
  const gameQuestionsAndAnswers = getProgressionGameInfo();

  makeGameLogic(gameQuestionsAndAnswers);
};

export default startProgressionGame;
