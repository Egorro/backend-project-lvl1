import readlineSynk from 'readline-sync';

export const getUserName = () => {
  return readlineSynk.question('May I have your name? ');
};
