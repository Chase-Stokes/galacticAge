export default class UserLife {
  constructor(age) {
    this.age = age;
    this.lifeExpectancy = 80;
  }
  mercury() {
    return Math.floor(this.age / .24);
  }
  venus() {
    
  }
}