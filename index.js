const capitalize = (string) => {
  let firstStr = string[0].toUpperCase();
  if(string.charAt(0) === string[0]) 
    string = firstStr + string.slice(1);
    return string;
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

const calculator = () => {
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

  const multiply = () => {
    
  }
  console.log(add(1,3,4,5))
  console.log(subtract(7,3,2,-1,10))
  console.log(divide(100,5,2))
}

calculator();

