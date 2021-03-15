const add = (...arg) => {
  return arg.reduce((a, b) => a + b, 0);
}

const subtract = (...arg) => {
  let total = arg[0];
  if (typeof (total) !== 'number') return false;
  length = arg.length;
  for (let i = 1; i < length; i++) {
    if (typeof (arg[i]) == 'number') {
      total -= arg[i];
    } else {
      return false;
    }
  }
  return total;
}

const divide = (...arg) => {
  let total = arg[0];
  if (typeof (total) !== 'number') return false;
  length = arg.length;
  for (let i = 1; i < length; i++) {
    if (typeof (arg[i]) == 'number') {
      total /= arg[i];
    } else {
      return false;
    }
  }
  return total;
}

const multiply = (...arr) => {
  return arr.reduce((a, b) => a * b, 1);
}

export { add, subtract, divide, multiply }

