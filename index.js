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
  console.log(add(1,3,4,5))
}

calculator();

