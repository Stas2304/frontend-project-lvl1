const getRandomNumber = (min = 1, max = 100) => {
  const randomNumber = Math.round((Math.random() * (max - min))) + min;
  return randomNumber;
};

export default getRandomNumber;
