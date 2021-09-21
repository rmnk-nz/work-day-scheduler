//Display current day and date
var today = moment();
$("#currentDay").text(today.format("ddd, MMM Do YYYY"));


//click save button to save user input to the local data
$(".saveBtn").on("click", function () { 
    confirm("Save to Schedule?");
    var userInput = $(this).siblings(".description").val();
    var userHour =  $(this).parent().attr("id");

    localStorage.setItem(userHour, userInput);
});
