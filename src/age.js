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
  timeLeftVenus() {
    return Math.floor((this.lifeExpectancy / .62) - (this.age / .62));
  }
  timeLeftMars() {
    return Math.floor((this.lifeExpectancy / 1.88) - (this.age / 1.88));
  }
  timeLeftJupiter() {
    return Math.floor((this.lifeExpectancy / 11.86) - (this.age / 11.86));
  }
}