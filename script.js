$(document).ready(function() { //make sure the page doesn't do funky stuff

//find and display current date and time//
const day = moment().format("dddd, MMMM DD, YYYY hh:mm a");
console.log(day);
$("#currentDay").text(day);
 

//--------------------------------------------------------------
//here I need to capture data from form when save button is clicked on only the line the button was clicked. Do I use JQuery or Javascript here?  JQ is better when using event listeners.

$(".saveBtn").on("click", function () {

var textAreaInfo = $(this).parent().find("textarea").val();
var divTimeAttr = $(this).parent().find("div").attr("id");

localStorage.setItem(divTimeAttr, textAreaInfo);

  //this is going with the save button

})


})




var time1TextAreaVal = localStorage.getItem("time1");  //value from local storage
$("#text-entry1").val(time1TextAreaVal);


const findTime = document.querySelectorAll(".col-md-1")
for (var i=0; i < findTime.length; i++) {
    var clickTime = findTime[i].textContent
    console.log(clickTime);

}

//next is to convert clickTime to the same format at current time
//compare using if statements




// //---------------------------------------------------------

// //here I need to change the class of the row to the class of .present for the present time
// var currentTime = moment(hh);
// if currentTime === document.getElementById(time1)
// change the class to .present

// //getElementById "calendar-row1".classList.replace('future', 'present')

// //------------------------------------------------------

// //here I need to change the class of the row to the class of .past when the time is after right now.

// if currentTime > document.getElementById(time1)
// change the class to .past
// //getElementById "calendar-row1".classList.replace(

// //---------------------------------------------------------
// //here I need to change the class of the row to the class of .future when the time is not yet.

// if currentTime < document.getElementById(time1)
// change class to .future


// }
// )

// //---------------------------------------------------------
// //these rows are sample code to help figure out the syntax
// // $(document).ready(function() {
// //     // listen for save button clicks
// //     $(".saveBtn").on("click", function() {
// //       // get nearby values
// //       var value = $(this).siblings(".description").val();
// //       var time = $(this).parent().attr("id");
  
// //       // save in localStorage
// //       localStorage.setItem(time, value);
// //     });

// // var saveBtn = $('.saveBtn');
// // saveBtn.on('click', function(){
// //     let eventId = $(this).attr('id');
// //     let eventText = $(this).parent().siblings().children('.event').val();
// //     localStorage.setItem(eventId, eventText)
