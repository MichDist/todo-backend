const palindrome = require('../utils/for_testing').palindrome

test('Palindrome of a', () => {
  const result = palindrome('a')

  expect(result).toBe('a')
})

test('Palindrome of react', () => {
  const result = palindrome('react')

  expect(result).toBe('tcaer')
})

test('Palindrome of reittier', () => {
  const result = palindrome('reittier')

  expect(result).toBe('reittier')
})