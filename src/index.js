import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  return userName;
};

export const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.round((Math.random() * (max - min))) + min;
  return randomNumber;
};

export const gameLogicMaker = (gameInfo) => {
  console.log(gameInfo.rules);

  for (let i = 0; i < 3; i += 1) {
    const question = gameInfo.gameQuestions[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gameInfo.gameAnswers[i];
    if (correctAnswer !== userAnswer) {
      const wrongAnswer = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${gameInfo.userName}!`);

      return wrongAnswer;
    }
    console.log('Correct!');
  }
  const congratulations = console.log(`Congratulations, ${gameInfo.userName}!`);

  return congratulations;
};
