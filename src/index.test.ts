import { conditional } from '.';

it('should return the first function if the condition is true', () => {
  const fnA = jest.fn();
  const fnB = jest.fn();
  const condition = true;
  const result = conditional(fnA, fnB, condition);
  expect(result).toBe(fnA);
});

it('should return the second function if the condition is false', () => {
  const fnA = jest.fn();
  const fnB = jest.fn();
  const condition = false;
  const result = conditional(fnA, fnB, condition);
  expect(result).toBe(fnB);
});

it('should return the first function if the condition is a function that returns true', () => {
  const fnA = jest.fn();
  const fnB = jest.fn();
  const condition = () => true;
  const result = conditional(fnA, fnB, condition);
  expect(result).toBe(fnA);
});

it('should return the second function if the condition is a function that returns false', () => {
  const fnA = jest.fn();
  const fnB = jest.fn();
  const condition = () => false;
  const result = conditional(fnA, fnB, condition);
  expect(result).toBe(fnB);
});
