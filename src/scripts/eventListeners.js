import { addNum, setOperator, clear, point, equal } from './numbers.js';

const buttonOne = document.getElementById('button1');
buttonOne.addEventListener('click', function () {
  addNum(1);
});
const buttonTwo = document.getElementById('button2');
buttonTwo.addEventListener('click', function () {
  addNum(2);
});
const buttonThree = document.getElementById('button3');
buttonThree.addEventListener('click', function () {
  addNum(3);
});
const buttonFour = document.getElementById('button4');
buttonFour.addEventListener('click', function () {
  addNum(4);
});
const buttonFive = document.getElementById('button5');
buttonFive.addEventListener('click', function () {
  addNum(5);
});
const buttonSix = document.getElementById('button6');
buttonSix.addEventListener('click', function () {
  addNum(6);
});
const buttonSeven = document.getElementById('button7');
buttonSeven.addEventListener('click', function () {
  addNum(7);
});
const buttonEight = document.getElementById('button8');
buttonEight.addEventListener('click', function () {
  addNum(8);
});
const buttonNine = document.getElementById('button9');
buttonNine.addEventListener('click', function () {
  addNum(9);
});
const buttonZero = document.getElementById('button0');
buttonZero.addEventListener('click', function () {
  addNum(0);
});
const buttonPlus = document.getElementById('buttonPlus');
buttonPlus.addEventListener('click', function () {
  setOperator('+');
});
const buttonMinus = document.getElementById('buttonMinus');
buttonMinus.addEventListener('click', function () {
  setOperator('-');
});
const buttonTimes = document.getElementById('buttonTimes');
buttonTimes.addEventListener('click', function () {
  setOperator('*');
});
const buttonDivide = document.getElementById('buttonDivide');
buttonDivide.addEventListener('click', function () {
  setOperator('/');
});
const buttonEqual = document.getElementById('buttonEqual');
buttonEqual.addEventListener('click', equal);
const buttonClear = document.getElementById('buttonClear');
buttonClear.addEventListener('click', clear);
const buttonPoint = document.getElementById('buttonPoint');
buttonPoint.addEventListener('click', point);
