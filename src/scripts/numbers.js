const arrayOne = [];
let outputClear = false;
let cache = 0;
let operatorOld = '';
let tempEqual = [];

function addNum(x) {
  if (document.getElementById('output').innerHTML != 'Error') {
    if (outputClear) {
      document.getElementById('output').innerHTML = '';
      outputClear = false;
    }
    document.getElementById('output').innerHTML += x.toString();
    arrayOne.push(x);
    console.log(arrayOne);
  }
}

function setOperator(operator) {
  execute(operatorOld);
  operatorOld = operator;
  console.log(cache);
  console.log(operatorOld);
  outputClear = true;
}

function execute(operator) {
  if (arrayOne.length > 0) {
    console.log(arrayOne);
    switch (operator) {
      case '+': {
        cache += converter();
        output(cache);
        break;
      }
      case '-': {
        cache -= converter();
        output(cache);
        break;
      }
      case '*': {
        cache *= converter();
        output(cache);
        break;
      }
      case '/': {
        cache /= converter();
        output(cache);
        break;
      }
      case '=': {
        output(cache);
        arrayOne.splice(0);
        break;
      }
      default: {
        cache = converter();
      }
    }
  }
}

function equal() {
  if (operatorOld) {
    if (arrayOne.length === 0) {
      arrayOne.push(...tempEqual);
    }
    const temp = [...arrayOne];
    execute(operatorOld);
    tempEqual = temp;
    console.log(temp);
  }
}

function output(answer) {
  if (!answer || answer === Infinity || answer === -Infinity) {
    document.getElementById('output').innerHTML = 'Error';
  } else {
    document.getElementById('output').innerHTML = answer.toString();
    outputClear = true;
  }
}

function clear() {
  document.getElementById('output').innerHTML = '';
  cache = 0;
  arrayOne.splice(0, arrayOne.length);
  operatorOld = '';
  outputClear = false;
}

function converter() {
  if (arrayOne.length > 0) {
    if (arrayOne.indexOf(',') === -1) {
      const returnNumber = arrayOne
        .map((x, i) => {
          return x * Math.pow(10, arrayOne.length - (i + 1));
        })
        .reduce((a, b) => {
          return a + b;
        });
      arrayOne.splice(0, arrayOne.length);
      return returnNumber;
    }
    const pointIndex = arrayOne.indexOf(',');
    arrayOne.splice(pointIndex, 1);
    const pointArray = arrayOne.splice(pointIndex);
    let integerNumber = 0;
    let pointNumber = 0;
    console.log(arrayOne);
    console.log(pointArray);
    if (arrayOne.length === 0) {
      integerNumber = 0;
    }
    if (arrayOne.length > 0) {
      integerNumber = arrayOne
        .map((x, i) => {
          return x * Math.pow(10, arrayOne.length - (i + 1));
        })
        .reduce((a, b) => {
          return a + b;
        });
    }
    if (pointArray.length === 0) {
      pointNumber = 0;
    }
    if (pointArray.length > 0) {
      pointNumber = pointArray
        .map((x, i) => {
          return x * Math.pow(10, -(1 + i));
        })
        .reduce((a, b) => {
          return a + b;
        });
    }
    const returnNumber = integerNumber + pointNumber;
    console.log(returnNumber);
    arrayOne.splice(0, arrayOne.length);
    return returnNumber;
  }
}

function point() {
  if (
    arrayOne.every(x => {
      return x !== ',';
    }) &&
    arrayOne.length > 0
  ) {
    arrayOne.push(',');
    document.getElementById('output').innerHTML += '.';
  }
}

export { addNum, setOperator, converter, clear, point, equal };
