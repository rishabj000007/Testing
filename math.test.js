// math.test.js - This file tests our math function
import add from './math';  // Import the function we want to test

test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});
