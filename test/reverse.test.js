import reverseString from '../src/modules/reverse'

it('reverse all string characters', () => {
  expect(reverseString('hello')).toBe('olleh');
})
