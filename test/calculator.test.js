import { add, subtract, divide, multiply } from '../src/modules/calculator';

test('adds two numbers', () => {
  const value = add(2,4);
  expect(value).toBeGreaterThan(5);
  expect(value).toBeLessThan(7);

  expect(value).toBe(6);
  expect(value).toEqual(6);
});

it('returns false if the input value is not an integer', () => {
  expect(subtract('he')).toBeFalsy();
})

// it('subtract two numbers', () => {
//   expect(subtract(5, 11)).toBe(6);
// })

it('returns false if the input value is not an integer', () => {
  expect(divide('he')).toBeFalsy();
})

// it('divides two numbers', () => {
//   expect(divide(100, 10)).toBe(10)
// })

test('multiplies two numbers', () => {
  expect(multiply(100, 10)).toBe(1000);
})

