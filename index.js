const capitalize = (string) => {
  let firstLetter = string[0].toUpperCase();
  if(string.charAt(0) === string[0]) 
    string = firstLetter + string.slice(1);
    return string;
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

const calculator = () => {
  const add = (...arg) => {
    return arg.reduce((a, b) => a + b, 0);
  }
}

console.log(reverseString('goodman'))