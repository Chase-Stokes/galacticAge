import UserLife from "../src/age.js";

describe('UserLife', () => {

  let user;
  beforeEach(() => {
    user = new UserLife(10, 80);
  })

  test('should create an object with the properties of the constructor', () => {
    expect(user).toEqual({"age": 10, "lifeExpectancy": 80})
  });

  test("should return the objects age in mercury years", () => {
    expect(user.mercury()).toEqual(41)
  })
})