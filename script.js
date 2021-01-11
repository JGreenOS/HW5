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


const findTime = document.querySelectorAll(".col-md-1")
for (var i=0; i < findTime.length; i++) {
    var clickTime = findTime[i].textContent
    console.log(clickTime);


}

moment().isBefore(clickTime);

function hourUpdater() {
  // get current number of hours
  // var currentHour = moment().hours();
  // console.log(currentHour);
  // var now = currentHour > (this)moment();


  // loop over time blocks
  $(".calendar-row").each(function() {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);  
    

    // check if we've moved past this time
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } 
    else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } 
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
hourUpdater();

// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 15000);
console.log(interval);
