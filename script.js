//Display current day and date
var today = moment();
$("#currentDay").text(today.format("ddd, MMM Do YYYY"));

//click save button to save user input to the local data
$(".saveBtn").on("click", function () { 
    confirm("Save to Schedule?");
    //gets user input in selected time bracket
    var userInput = $(this).siblings(".description").val();
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
    var listElement = $(".time-block");
        for (var i = 0; i < listElement.lenght; i++) {
            var timeBlock = parseInt($(listElement[i]).attr("id").split("hour")[0]);
        }
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
}


    //Retrieve data from local storage
    $("#8hour .description").val(localStorage.getItem("8hour"));
    $("#9hour .description").val(localStorage.getItem("9hour"));
    $("#10hour .description").val(localStorage.getItem("10hour"));
    $("#11hour .description").val(localStorage.getItem("11hour"));
    $("#12hour .description").val(localStorage.getItem("12hour"));
    $("#13hour .description").val(localStorage.getItem("13hour"));
    $("#14hour .description").val(localStorage.getItem("14hour"));
    $("#15hour .description").val(localStorage.getItem("15hour"));
    $("#16hour .description").val(localStorage.getItem("16hour"));
    $("#17hour .description").val(localStorage.getItem("17hour"));


// var listElement = $(".time-block");
// for(var i=0; i< listElement.lenght; i++){
//     var blockTime = parseInt($(listElement[i]).attr("id").split("hour")[1]);
// }