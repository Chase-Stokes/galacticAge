import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserLife from './age.js';
import timePastExpectancy from './overtime.js';

$("#ageForm").submit(function(event){
  event.preventDefault();
  let age = $("#age").val();
  console.log(age);
  $(".displayEarthAge").html(age);
  let user = new UserLife(age);
  let ageMercury = user.mercury();
  let ageVenus = user.venus();
  let ageMars = user.mars();
  let ageJupiter = user.jupiter();
  $(".displayMercuryAge").html(ageMercury);
  $(".displayVenusAge").html(ageVenus);
  $(".displayMarsAge").html(ageMars);
  $(".displayJupiterAge").html(ageJupiter);
  let expectancy = new UserLife(user.lifeExpectancy);
  let exMercury = expectancy.mercury();
  let exVenus = expectancy.venus();
  let exMars = expectancy.mars();
  let exJupiter = expectancy.jupiter();
  if (user.age < user.lifeExpectancy) {
    $(".bottomBox").show();
    $(".earthYearsLeft").html(timePastExpectancy(user.age, user.lifeExpectancy));
    $(".mercuryYearsLeft").html(timePastExpectancy(ageMercury, exMercury));
    $(".venusYearsLeft").html(timePastExpectancy(ageVenus, exVenus));
    $(".marsYearsLeft").html(timePastExpectancy(ageMars, exMars));
    $(".jupiterYearsLeft").html(timePastExpectancy(ageJupiter, exJupiter));
  } else {
    $(".bottomBox1").show();
    $(".earthOvertime").html(timePastExpectancy(user.age, user.lifeExpectancy));
    $(".mercuryOvertime").html(timePastExpectancy(ageMercury, exMercury));
    $(".venusOvertime").html(timePastExpectancy(ageVenus, exVenus));
    $(".marsOvertime").html(timePastExpectancy(ageMars, exMars));
    $(".jupiterOvertime").html(timePastExpectancy(ageJupiter, exJupiter));
  }
});