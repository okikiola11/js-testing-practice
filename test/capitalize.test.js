import capitalize from '../src/modules/capitalize'

it('works', () => { // testing
  expect(1).toBe(1)
})

test('returns false if the input value is an integer', () => {
  expect(capitalize(1)).toBeFalsy();
})

test('capitalize the first string', () => {
  expect(capitalize('hello')).toBe('Hello');
})

test('does not change a string that has a number as the first character', () => {
  const str = capitalize('1hello world');
  expect(str).toBe('1hello world');
});

test('does not capitalize other letters apart from the first letter of a string', () => {
  const str = capitalize('hello WORLD');
  expect(str).not.toBe('Hello World');
});

test('does not change a string that has a punctuation as the first character', () => {
  const str = capitalize('.hello world');
  expect(str).toBe('.hello world');
});

