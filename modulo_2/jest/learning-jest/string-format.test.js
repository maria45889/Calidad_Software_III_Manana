const { truncate } = require('./string-format');

test('Truncates a string correctly', () => {
  expect(truncate("I am goinghome", 6)).toBe("I am g...");
});
