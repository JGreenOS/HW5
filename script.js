$(document).ready(function() { //make sure the page doesn't do funky stuff

//find and display current date and time//
const day = moment().format("dddd, MMMM DD, YYYY hh:mm a");
console.log(day);
$("#currentDay").text(day);

//here I need to capture data from form when save button is clicked on only the line the button was clicked. Do I use JQuery or Javascript here?

when the save button is clicked on this HTMLTableRowElement
localStorage.setItem(time1, text-entry1);


//here I need to display back to the window the information from local storage in the same place as it was input (time and meeting).

localStorage.getItem(time1, text-entry1) and put it on text-entry1

//here I need to set up what time it is right now
var time = moment(hh);
console.log("It is" + time);

//here I need to change the class of the row to the class of .present for the present time
var currentTime = moment(hh);
if currentTime === document.getElementById(time1)
change the class to .present



//here I need to change the class of the row to the class of .past when the time is after right now.

if currentTime > document.getElementById(time1)
change the class to .past


//here I need to change the class of the row to the class of .future when the time is not yet.

if currentTime < document.getElementById(time1)
change class to .future


}
)
//these rows are sample code to help figure out the syntax
// $(document).ready(function() {
//     // listen for save button clicks
//     $(".saveBtn").on("click", function() {
//       // get nearby values
//       var value = $(this).siblings(".description").val();
//       var time = $(this).parent().attr("id");
  
//       // save in localStorage
//       localStorage.setItem(time, value);
//     });

// var saveBtn = $('.saveBtn');
// saveBtn.on('click', function(){
//     let eventId = $(this).attr('id');
//     let eventText = $(this).parent().siblings().children('.event').val();
//     localStorage.setItem(eventId, eventText)
