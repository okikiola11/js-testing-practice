const capitalize = (string) => {
  let firstLetter = string[0].toUpperCase();
  if(string.charAt(0) === string[0]) 
    string = firstLetter + string.slice(1);
    return string;
}

const reverseString = (string) => {
  let s = string.split(',').reverse().join();
  console.log(s)
}

const calculator = () => {
  const add = (...arg) => {
    return arg.reduce((a, b) => a + b, 0);
  }
}

console.log(reverseString('goodman'))