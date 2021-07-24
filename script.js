
// we need a variable to set our current date==================================================
var currentDateEl =$("currentDate");

var scheduleDate = now.format("dddd,")

// we need to get the items from our local storage and set them to varaibles===================
var timeValue9 = localStorage.getItem("hour-9");
var timeValue10 = localStorage.getItem("hour-10");
var timeValue11 = localStorage.getItem("hour-11");
var timeValue12 = localStorage.getItem("hour-12");
var timeValue1 = localStorage.getItem("hour-1");
var timeValue2 = localStorage.getItem("hour-2");
var timeValue3 = localStorage.getItem("hour-3");
var timeValue4 = localStorage.getItem("hour-4");
var timeValue5 = localStorage.getItem("hour-5");

//assign each variable to and id from our div===================

var time9 = $("#9");
var time10 = $("#10");
var time11 = $("#11");
var time12 = $("#12");
var time1 = $("#13");
var time2 = $("#14");
var time3 = $("#15");
var time4 = $("#16");
var time5 = $("#17");


// values====================

time9.val(timeValue9);
time10.val(timeValue10);
time11.val(timeValue11);
time12.val(timeValue12);
time1.val(timeValue1);
time2.val(timeValue2);
time3.val(timeValue3);
time4.val(timeValue4);
time5.val(timeValue5);








// FUNCTION=================
function saveData({

})