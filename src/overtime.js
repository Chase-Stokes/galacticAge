export default function timePastExpectancy(age, expectancy) {
  if (age > expectancy) {
    return Math.floor(age - expectancy);
  } else {
    return Math.floor(expectancy - age);
  }
}