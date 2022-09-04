import readlineSync from 'readline-sync';

const evenGame = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const numberForGame = Math.round((Math.random() * 100));
    const correctAnswer = numberForGame % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${numberForGame}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer !== userAnswer) {
      const wrongAnswer = console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${userName}!`);

      return wrongAnswer;
    }
    console.log('Correct!');
  }
  const congratulations = console.log(`Congratulations, ${userName}!`);

  return congratulations;
};

export default evenGame;
