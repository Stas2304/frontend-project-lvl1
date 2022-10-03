import readlineSync from 'readline-sync';

const greeting = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const roundsCount = 3;

export const makeGameLogic = (gameQuestionsAndAnswers) => {
  greeting();

  const userName = getUserName();

  console.log(gameQuestionsAndAnswers.gameRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const question = gameQuestionsAndAnswers.gameQuestions[i];
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = gameQuestionsAndAnswers.gameAnswers[i];
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
