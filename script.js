$(document).ready(function() {
  var events = [];
  
  
  $(".saveBtn").on("click", function() {
    
    var value = $(this).siblings(".input").val();
    var time = $(this).parent().attr("id");
    var dateAdded = moment().format("dddd, MMMM Do");

    events.push({input: value, time: time, date: dateAdded});

    
    localStorage.setItem("events", JSON.stringify(events));
    preventDefault("events")
    
  });
// function
  function currentDay() {
    
    var currentHour = moment().format();

   
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
    });
  }

  currentDay();


 
  var currentDay = moment().format("dddd, MMMM Do");
  for(var i = 0; i < events.length; i++) {
    if(currentDay.isAfter(events[i].date)) {
      events[i].input = "";
      events[i].time = "";
      events[i].date = "";
      events.length = 0;
    }
  }

  
  
// this command will display the current day on the screen for the user 
  $("#currentDay").text(moment().format("dddd, MMMM Do"));
});
