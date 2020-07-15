var currentDay = $('#currentDay').html();
    currentDay = moment().format(' M/D/YYYY');
var currentTime = moment().format('H:HH A')
var currentTimeDiv = $('<p id="currentTime">' + "Current Time: " + currentTime + '</p>;');
var timeCheck = moment().format('H');

$('#currentDay').append(currentDay);  
$(".jumbotron").append(currentTimeDiv);

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
$(workDay).each(function(index){ //loop to create time-blocks

 //set time for each timeblock
  var timeBlock = document.createElement('div');
      timeBlock.setAttribute('class','timeBlock'+index);
      timeBlock.innerText = workDay[index].time;

//set task for each text area
  var textArea = document.createElement('textArea');
      textArea.setAttribute('class','textArea')
      textArea.innerText = workDay[index].task;

//add a save button with an event listener
  var save = document.createElement('button'); 
      save.innerText = "save";
      save.setAttribute('class','save');
      save.setAttribute('id',index);
      // save.addEventListener('click',saveTask);

//appending elements
      timeBlock.append(textArea);
      timeBlock.append(save);
      $('.container').append(timeBlock);
//adjusting classes for past, present, future CSS 

      if(this.timeValue < timeCheck) {
        $(timeBlock).addClass("past-hour");
      } else if (this.timeValue > timeCheck) {
        $(timeBlock).addClass("future-hour");
      } else {
        $(timeBlock).addClass("present-hour");
      }
})
  $("button").click(function() {
    value = $(this).siblings("textArea").val();
    workDay[this.id].task = value;
    localStorage.setItem("workDay", JSON.stringify(workDay))
    
  });
 


