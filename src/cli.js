import readlineSynk from 'readline-sync';

const getUserName = () => readlineSynk.question('May I have your name? ');

export default getUserName;
