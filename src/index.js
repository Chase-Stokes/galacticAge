import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';
import UserLife from './age.js';

$("#ageForm").submit(function(event){
  event.preventDefault();
  let age = $("#age").val();
  console.log(age);
  $(".displayEarthAge").html(age);
  let user = new UserLife(age);
  $(".displayMercuryAge").html(user.mercury());

});