export default class UserLife {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 80;
  }
  mercury() {
    return Math.floor(this.age / .24);
  }
  venus() {
    return Math.floor(this.age / .62);
  }
  mars() {
    return Math.floor(this.age / 1.88);
  }
}