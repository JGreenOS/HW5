$( document ).ready(function() {})

//find and display current date and time//
const day = moment().format("dddd, MMMM DD, YYYY hh:mm a");
console.log(day);
$("#currentDay").text(day);

timeSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//localStorage.setItem('text-entry1', ""); //init the key with an empty value
var time1 = document.getElementById('text-entry1');  //set variable to hold value

button 1('click', function () {
    localStorage.setItem('text-entry1', "");

}
)



// var saveBtn = $('.saveBtn');
// saveBtn.on('click', function(){
//     let eventId = $(this).attr('id');
//     let eventText = $(this).parent().siblings().children('.event').val();
//     localStorage.setItem(eventId, eventText);

