import getHealthStatus from '../health.js';

test('should return healthy if health > 50', () => {
  const character = { name: 'Маг', health: 90 };
  expect(getHealthStatus(character)).toBe('healthy');
});

test('should return wounded if health between 15 and 50', () => {
  const character = { name: 'Маг', health: 40 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('should return wounded if health is exactly 15', () => {
  const character = { name: 'Маг', health: 15 };
  expect(getHealthStatus(character)).toBe('wounded');
});

test('should return critical if health < 15', () => {
  const character = { name: 'Маг', health: 10 };
  expect(getHealthStatus(character)).toBe('critical');
});