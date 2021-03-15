import capitalize from '../src/modules/capitalize'

it('works', () => { // testing
  expect(1).toBe(1)
})

it('returns false if the input value is an integer', () => {
  expect(capitalize(1)).toBe(false);
})

it('capitalize the first string', () => {
  expect(capitalize('hello')).toBe('Hello');
})

