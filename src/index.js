import capitalize from './modules/capitalize';
import ceaserCipher from './modules/ceaserCipher';
import calculator from './modules/calculator';

//When an array shd return a list of objs present
const frequencies = array =>
  array.reduce((x, v) => {
    x[v] = x[v] ? x[v] + 1 : 1;
    return x;
  }, {});

//console.log(frequencies(['x', 'y', 'x', 'z', 'x', 'x', 'y']));

capitalize('goodman');
calculator();
ceaserCipher();

