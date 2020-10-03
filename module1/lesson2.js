const { sum, subtract } = require("./math");

// Testing sum functionality
let result = sum(3, 7);
let expected = 10;

expect(result).toBe(expected);

// Testing subtract functionality
result = subtract(7, 3);
expected = 4;

expect(result).toBe(expected);

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
