import ceaserCipher from './modules/ceaserCipher';
import calculator from './modules/calculator';

const capitalize = (string) => {
  let firstStr = string[0].toUpperCase();
  if(string.charAt(0) === string[0]) 
    string = firstStr + string.slice(1);
    return string;
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

//When an array shd return a list of objs present
const frequencies = array =>
  array.reduce((x, v) => {
    x[v] = x[v] ? x[v] + 1 : 1;
    return x;
  }, {});

//console.log(frequencies(['x', 'y', 'x', 'z', 'x', 'x', 'y']));

calculator();
ceaserCipher();

