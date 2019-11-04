const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test('should return a personal greeting', () => {
  const result = generateGreeting('Joe');
  expect(result).toBe('Hello Joe!');
});

test('should return an anonymous greeting if no name passed', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});
