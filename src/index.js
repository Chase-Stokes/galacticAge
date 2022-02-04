import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import UserLife from './age.js';

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

});