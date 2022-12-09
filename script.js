// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var setToday = $('#currentDay');
todayHour = dayjs().hour();

$(function () {
  // TODO: Add a listener for click events on the save button. Complete!
    $(".saveBtn").on("click", function () { 
    var appointmentText = $(this).siblings(".description").val();
    var appointmentTime = $(this).parent().attr("id");
    localStorage.setItem(appointmentTime, appointmentText);
});

  //TODO: Update Class Completed!
  function classUpdater() {
  // For each element in the html with class time-block the function gets the
  //id, splits it and parses to an number which can be used an the if statements below
    $(".time-block").each(function () {
      // 'this' refers to the current time-block the id is split at the dash and the [1] 
      // is saying I am using the second part of the array from the split up id string
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
       $(this).addClass("future")
      }
    })
  };

  classUpdater();
  // TODO: Set LocalStorage to display: WIP
  // Loads saved appointment descriptions
  //Simplified with for loop?

  //First Go
/* $("#hour-8 .description").val(localStorage.getItem("hour-8"));
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17")); */

  //Second Go with for loop
  for (var hour = 8; hour <= 17; hour++) {
    $('#hour-' + hour + ' .description').val(localStorage.getItem('hour-' + hour));
  }
  
  // TODO: Add code to display the current date in the header of the page.
  var today = new Date();
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
  }
});

  //This one line was great until I couldn't get the date formatted ordinally
/*   setToday.text(dayjs().format('Do dddd, MMMM DD')); */