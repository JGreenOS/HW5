$(document).ready(function() { //make sure the page doesn't do funky stuff

//find and display current date and time//
const day = moment().format("dddd, MMMM DD, YYYY hh:mm a");
console.log(day);
$("#currentDay").text(day);
 

$(".saveBtn").on("click", function () {

var textAreaInfo = $(this).parent().find("textarea").val();
var divTimeAttr = $(this).parent().find("div").attr("id");
localStorage.setItem(divTimeAttr, textAreaInfo);
})

})

var time1TextAreaVal = localStorage.getItem("time1");  //value from local storage
$("#text-entry1").val(time1TextAreaVal);

var time2TextAreaVal = localStorage.getItem("time2");  //value from local storage
$("#text-entry2").val(time2TextAreaVal);

var time3TextAreaVal = localStorage.getItem("time3");  //value from local storage
$("#text-entry3").val(time3TextAreaVal);

var time4TextAreaVal = localStorage.getItem("time4");  //value from local storage
$("#text-entry4").val(time4TextAreaVal);

var time5TextAreaVal = localStorage.getItem("time5");  //value from local storage
$("#text-entry5").val(time5TextAreaVal);

var time6TextAreaVal = localStorage.getItem("time6");  //value from local storage
$("#text-entry6").val(time6TextAreaVal);

var time7TextAreaVal = localStorage.getItem("time7");  //value from local storage
$("#text-entry7").val(time7TextAreaVal);

var time8TextAreaVal = localStorage.getItem("time8");  //value from local storage
$("#text-entry8").val(time8TextAreaVal);

var time9TextAreaVal = localStorage.getItem("time3");  //value from local storage
$("#text-entry9").val(time9TextAreaVal);

var time10TextAreaVal = localStorage.getItem("time10");  //value from local storage
$("#text-entry10").val(time10TextAreaVal);



const findTime = document.querySelectorAll(".col-md-1")
for (var i=0; i < findTime.length; i++) {
    var clickTime = findTime[i].textContent
    console.log(clickTime);

}


//next is to convert clickTime to the same format at current time
//compare using if statements


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
