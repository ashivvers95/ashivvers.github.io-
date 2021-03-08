var description = document.querySelector("#col-10 description");
var containerEl = document.querySelector("#container");
var currentDay = document.querySelector("#lead");
var time = document.querySelector("#col-1 hour")
// var textArea = document.querySelector("#col-10 description textarea");

//todays date
var now = document.getElementById("currentDay");
now.innerHTML= moment().format('LLLL');
//

//change color of tasks based on current time

var auditTask = function (){
    var currentHour = parseInt(
    moment().format('h'));

    $ ("textarea")
      .each (function() { 
          var eventHour = parseInt($(this).attr("id"));
          console.log(currentHour, eventHour)
    if (currentHour === eventHour) {
        $(this).addClass("present");

    }else if (currentHour < eventHour){
        $(this).addClass("past");
    }

    else if (currentHour > eventHour) {
        $(this).addClass("future");
    };

      });
};

$(".saveBtn").on("click", function(){
    var text = $(this)
    .siblings("textarea")
    .val()
    var id = $(this)
    .siblings("textarea")
    .attr("id")
    localStorage.setItem(id, text);
});



setInterval (function() {
      auditTask();
    }, 5000);



