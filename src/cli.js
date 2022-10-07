import readlineSync from 'readline-sync';

const displayGreeting = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export default displayGreeting;
