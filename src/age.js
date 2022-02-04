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
  jupiter() {
    return Math.floor(this.age / 11.86);
  }
  timeLeftMercury() {
    return Math.floor((this.lifeExpectancy / .24) - (this.age / .24));
  }
}