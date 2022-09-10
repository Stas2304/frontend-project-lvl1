import {
  greeting, getUserName, getRandomNumber, gameLogicMaker,
} from '../src/index.js';

const progressionGame = () => {
  const getProgressionGameInfo = () => {
    const gameQuestions = [];
    const gameAnswers = [];

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

    for (let i = 0; i < 3; i += 1) {
      const progression = getProgression();
      const max = progression.length - 1;
      const indexHidenNumber = getRandomNumber(0, max);

      const correctAnswer = progression[indexHidenNumber];
      gameAnswers.push(String(correctAnswer));

      progression[indexHidenNumber] = '..';
      const question = progression.toString().replace(/,/g, ' ');
      gameQuestions.push(question);
    }
    return { gameQuestions, gameAnswers };
  };

  const gameInfo = getProgressionGameInfo();
  gameInfo.rules = 'What number is missing in the progression?';

  greeting();

  gameInfo.userName = getUserName();

  gameLogicMaker(gameInfo);
};

export default progressionGame;
