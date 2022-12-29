import { conditional } from '.';

it('should return the first function if the condition is true', () => {
  const fnA = () => 'A';
  const fnB = () => 'B';
  const condition = true;
  const result = conditional(fnA, fnB, condition);
  expect(result()).toBe('A');
});

it('should return the second function if the condition is false', () => {
  const fnA = () => 'A';
  const fnB = () => 'B';
  const condition = false;
  const result = conditional(fnA, fnB, condition);
  expect(result()).toBe('B');
});

it('should return the first function if the condition is a function that returns true', () => {
  const fnA = () => 'A';
  const fnB = () => 'B';
  const condition = () => true;
  const result = conditional(fnA, fnB, condition);
  expect(result()).toBe('A');
});

it('should return the second function if the condition is a function that returns false', () => {
  const fnA = () => 'A';
  const fnB = () => 'B';
  const condition = () => false;
  const result = conditional(fnA, fnB, condition);
  expect(result()).toBe('B');
});
