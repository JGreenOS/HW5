

//find and display current date and time//
const day = moment().format("dddd, MMMM DD, YYYY hh:mm a");
console.log(day);
$("#currentDay").text(day);

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


function updateCalendarTasks(dayObject) {
    $(".calendar-row").each(function (index) {
        let res = $(this).children("div");
        $(this).children("textarea").text(dayObject[res.text()]);
    })
}
//check localstorage and reload if items exist in local storage
if (!localStorage.getItem('workDay')) {
    updateCalendarTasks(workDay);
} else {
    updateCalendarTasks(JSON.parse(localStorage.getItem('workDay')));
}

//initialize localStorage and stringify the workday stuff
function startLocalStorage() {
    localStorage.setItem('workDay', JSON.stringify(workDay))
}

var counter = 1;
//make property in workDay for 
for (const property in workDay) {
    // make the text entry area sync with counter
    var textEntry = "#text-entry" + counter;
    //jQuery magic to tie the text entry area to the text and the property of the work day which is the scheduling entry.
    $(textEntry).text(workDay[property]);
    var timeID = "#time" + counter;
    var timeString = $(timeID).text();
    var timeNumber = hourNumberFromhourString(timeString);
    counter ++;

//make the save button work
$("button").click(function() {
    value = $(this).siblings("textarea").val();
    hourString = $(this).siblings("div").text();
    saveSchedule(hourString, value);
});



    //scheduling column//


    //set html to wait until full page loaded

    //build association between
    function hourNumberFromhourString(hourString) {
        switch (hourString) {
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


    var workHours = JSON.parse(localStorage.getItem('workDay'));
    workHours[hourString] = val

    saveToLocalStorage(workHours);


    function loadCorrectDataset() {
        result = localStorage.getItem('workDay')
        return (result ? result : workDay)
    }

    function updateCalendarTasks(dayObject) {
        $(".calendar-row").each(function (index) {
            let res = $(this).children("div");
            $(this).children("textarea").text(dayObject[res.text()]);
        })
    }
}