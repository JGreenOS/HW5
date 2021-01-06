
//find and display current date and time//
const day= moment().format("dddd, MMMM DD, YYYY hh:mm a");
    console.log(day);
$("#currentDay").text(day);

 //check localstorage and reload if items exist in local storage
if(!localStorage.getItem('workDay')) {
   updateCalendarTasks(workDay);
  } else {
   updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
 }


//create blocks of time for scheduling//

// for (var hour = 7; hour < 15 ; hour++) {
//     scheduledHours.push(moment({hour}).format('h  a'));
    
//     $(".container").append(div class="row time-block")


//scheduling column//

//set workday hours in an array
let workDay = {
    "7 AM": "",
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 PM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
  };
  //set html to wait until full page loaded

  //build association between
function hourNumberFromHourString(hourString) {
    switch(hourString) {
      case "7 AM": return 8;
      case "8 AM": return 9;
      case "9 AM": return 10;
      case "10 AM": return 11;
      case "11 PM": return 12;
      case "12 PM": return 13;
      case "1 PM": return 14;
      case "2 PM": return 15;
      case "3 PM": return 16;
      case "4 PM": return 17;
    }
  }
  //$(document).ready(function(){
  

  
