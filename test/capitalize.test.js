import capitalize from '../src/modules/capitalize'

it('works', () => {
  expect(1).toBe(1)
})

it('capitalize the first string', () => {
  expect(capitalize('hello')).toBe('Hello');
})
