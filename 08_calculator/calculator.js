const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (x) {
  let result = 0;
  for (const value of x) {
    result += value;
  }
  return result;
};

const multiply = function (x) {
  let result = 1;
  for (const value of x) {
    result *= value;
  }
  return result;
};

const power = function (x, y) {
  let result = x * x;
  for (i = 1; i < y - 1; i++) {
    result *= x;
  }
  return result;

};

const factorial = function (x) {
  if (x <= 1) {
    return 1;
  } else {
    let result = x * (x - 1);
    for (i = x; i > 3; i--) {
      result = result * (i - 2);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};