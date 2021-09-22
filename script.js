//Display current day and date
var today = moment();
$("#currentDay").text(today.format("ddd, MMM Do YYYY"));

//click save button to save user input to the local data
$(".saveBtn").on("click", function () { 
    confirm("Save to Schedule?");
    //indicates to user they have clicked saved
    $(this).addClass("savedColor");
    //gets user input in selected time bracket
    var userInput = $(this).siblings(".time-block").val();
    //gets the id of which hour the user input info
    var userHour =  $(this).parent().attr("id");
    
    //save to local storage
    localStorage.setItem(userHour, userInput);

});

//function to show user the current hour by applying custom css
function followHour() {
    //follows current hour by moment.js libary
    var currentHour = moment().hour();

    // selects each time block and gets the id hour associated with that time block
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id"));
  
        //apply css when the hour is behind current hour
        if (timeBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        //apply css when the hour is the same is current hour
        else if (timeBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        //apply css when the hour is ahead of current
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
} followHour();


//Retrieve data from local storage
$("#8hour .time-block").val(localStorage.getItem("8hour"));
$("#9hour .time-block").val(localStorage.getItem("9hour"));
$("#10hour .time-block").val(localStorage.getItem("10hour"));
$("#11hour .time-block").val(localStorage.getItem("11hour"));
$("#12hour .time-block").val(localStorage.getItem("12hour"));
$("#13hour .time-block").val(localStorage.getItem("13hour"));
$("#14hour .time-block").val(localStorage.getItem("14hour"));
$("#15hour .time-block").val(localStorage.getItem("15hour"));
$("#16hour .time-block").val(localStorage.getItem("16hour"));
$("#17hour .time-block").val(localStorage.getItem("17hour"));

//on click function to clear all saved user input in schedule
$(".clearSchedule").on("click", function () { 
    confirm("Are you sure you want to clear your schedule?");
    //clear local data storage and refresh page
    localStorage.clear();
    window.location.replace("./index.html")
});
