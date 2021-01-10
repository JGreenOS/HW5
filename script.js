$(document).ready(function() {
    


//find and display current date and time//
const day = moment().format("dddd, MMMM DD, YYYY hh:mm a");
console.log(day);
$("#currentDay").text(day);




}
)

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
})