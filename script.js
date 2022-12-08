// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var setToday = $('#currentDay');
todayHour = dayjs().hour();
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
    $(".saveBtn").on("click", function () {
        
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

   
    localStorage.setItem(time, text);
});
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function classUpdater() {

    $(".time-block").each(function () {
      var scheduleTime = parseInt($(this).attr("id").split("-")[1]);

     if (scheduleTime < todayHour) {
       $(this).addClass("past");
       $(this).removeClass("future");
       $(this).removeClass("present");
      }
      else if (scheduleTime === todayHour) {
       $(this).removeClass("past");
       $(this).removeClass("future");
       $(this).addClass("present");
       }
       else {
       $(this).removeClass("past");
       $(this).removeClass("present");
       $(this).addClass("future")}})};



       classUpdater();
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Loads saved appointment descriptions
  $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));





  // TODO: Add code to display the current date in the header of the page.
  setToday.text(dayjs().format('Do dddd, MMMM DD'));
/*   var today = new Date();
  var weekDay = today.getDay();
  var monthIndex = today.getMonth();
  var dateNumber = today.getDate();
  var monthNamesArray =["January","February","March","April","May","June","July","August","September","October","November","December"]
  var dayNamesArray = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

  if (dateNumber == 1 || dateNumber == 21|| dateNumber == 31){
  setToday.text(dayNamesArray[weekDay] + ", " + monthNamesArray[monthIndex] + " " + dateNumber + "st");}
  else if(dateNumber == 2 || dateNumber == 22){
    setToday.text(dayNamesArray[weekDay] + ", " + monthNamesArray[monthIndex] + " " + dateNumber + "nd");
  }
  else if(dateNumber == 3 || dateNumber == 23){
    setToday.text(dayNamesArray[weekDay] + ", " + monthNamesArray[monthIndex] + " " + dateNumber + "rd");
  }
  else{
    setToday.text(dayNamesArray[weekDay] + ", " + monthNamesArray[monthIndex] + " " + dateNumber + "th");
  } */
});
