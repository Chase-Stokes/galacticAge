import UserLife from "../src/age.js";

describe('UserLife', () => {

  let user;
  beforeEach(() => {
    user = new UserLife(10, 80);
  })

  test('should create an object with the properties of the constructor', () => {
    expect(user).toEqual({"age": 10, "lifeExpectancy": 80});
  });

  test("should return the objects age in mercury years", () => {
    expect(user.mercury()).toEqual(41);
  });

  test("should return the objects age in venus years", () => {
    expect(user.venus()).toEqual(16);
  });

  test("should return the objects age in mars years", () => {
    expect(user.mars()).toEqual(5);
  });

  test("should return the objects age in jupiter years", () => {
    expect(user.jupiter()).toEqual(0);
  });
})