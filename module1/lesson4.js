const { sum, subtract } = require("./math");
const expect = require("./assertion");

test("Sum", () => {
  const result = sum(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

test("Subtract", () => {
  const result = subtract(7, 3);
  const expected = 4;

  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(`✓ - ${title} executed successfully`);
  } catch (error) {
    console.error(`x - ${title} not executed successfully`);
    console.error(error);
  }
}
