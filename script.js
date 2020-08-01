var currentDay = $('#currentDay').html();
currentDay = moment().format(' M/D/YYYY');
var currentTime = moment().format('H:HH A')
var currentTimeDiv = $('<p id="currentTime">' + "Current Time: " + currentTime + '</p>;');
var timeCheck = moment().format('H'); // comment out for testing
// var timeCheck = 12; //sets hour used for testing

// displays current date and time at top of day planner
$('#currentDay').append(currentDay);  
$(".jumbotron").append(currentTimeDiv);

// sets array equal to LocalStorage array OR creates a pre-filled array if one does not exist.
var workDay = (JSON.parse(localStorage.getItem("workDay")) || [
  {
  time:"8:00 AM",
  task: "",
  timeValue:8
  },
  {
  time:"9:00 AM",
  task: "",
  timeValue:9
  },
  {
  time:"10:00 AM",
  task: "",
  timeValue:10
  },
  {
  time:"11:00 AM",
  task: "",
  timeValue:11
  },
  {
  time:"12:00 PM",
  task: "Lunch Time!",
  timeValue:12
  },
  {
  time:"1:00 PM",
  task: "",
  timeValue:13
  },
  {
  time:"2:00 PM",
  task: "",
  timeValue:14
  },
  {
  time:"3:00 PM",
  task: "",
  timeValue:15
  },]);

$(workDay).each(function(index){ // loop to create time-blocks

  // set time for each timeblock
  var timeBlock = document.createElement('div');
      $(timeBlock).addClass('time-block row');
  var hourBox = document.createElement('div')
      $(hourBox).addClass('col-md-1 hour');
  // sets time box to left of textarea
      hourBox.innerText = workDay[index].time;

  // set task for each text area
  var textArea = document.createElement('textarea');
      $(textArea).addClass('col-md-10 description');
      textArea.innerText = workDay[index].task;

  // create save button
  var save = document.createElement('button'); 
      save.innerHTML = "<img id='saveBtnImg' src='assets/save.png'></img>"
      save.setAttribute('class','col-md-1 saveBtn');
      save.setAttribute('id',index);

  // appending created elements
  $(timeBlock).append(hourBox)
  $(timeBlock).append(textArea);
  $(timeBlock).append(save);
  $('.container').append(timeBlock);

  // adjusting classes for past, present, future CSS styling based on time
  if(this.timeValue < timeCheck) {
    $(timeBlock).addClass("past");
  } else if (this.timeValue > timeCheck) {
    $(timeBlock).addClass("future");
  } else {
    $(timeBlock).addClass("present");
  }

})// add event listener to button, which grabs value from textarea to store in workDay array, and then local storage
  $("button").click(function() {
    value = $(this).siblings("textArea").val();
    workDay[this.id].task = value;
    localStorage.setItem("workDay", JSON.stringify(workDay))
  });
 


