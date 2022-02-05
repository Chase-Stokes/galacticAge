import timePastExpectancy from "../src/overtime.js"

describe('overtime', () => {

  test("should return how long a user has lived past their life expectancy", () => {
    expect(timePastExpectancy(90, 80)).toEqual(10);
  });
  
  test("should return how long a user has left based off of their life expectancy", () => {
    expect(timePastExpectancy(10, 80)).toEqual(70);
  });
})