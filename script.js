// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var setToday = $('#currentDay');

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = new Date();
  var day = today.getDay();
  var month = today.getMonth();
  var date = today.getDate();
  var monthNames =["January","February","March","April","May","June","July","August","September","October","November","December"]
  var dayNames = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

  if (date == 1 || date == 21|| date == 31){
  setToday.text(dayNames[day] + ", " + monthNames[month] + " " + date + "st");}
  else if(date == 2 || date == 22){
    setToday.text(dayNames[day] + ", " + monthNames[month] + " " + date + "nd");
  }
  else if(date == 3 || date == 23){
    setToday.text(dayNames[day] + ", " + monthNames[month] + " " + date + "rd");
  }
  else{
    setToday.text(dayNames[day] + ", " + monthNames[month] + " " + date + "th");
  }
});
