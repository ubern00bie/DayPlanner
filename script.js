var currentDay = $('#currentDay').html();
    currentDay = moment().format(' M/D/YYYY');
var currentTime = moment().format('H:HH A')
var currentTimeDiv = $('<p id="currentTime">' + "Current Time: " + currentTime + '</p>;');

$('#currentDay').append(currentDay);  
$(".jumbotron").append(currentTimeDiv);

var workDay = [
    {
    time:"8:00 AM",
    task: "",
    },
    {
    time:"9:00 AM",
    task: "",
    },
    {
    time:"10:00 AM",
    task: "",
    },
    {
    time:"11:00 AM",
    task: "",
    },
    {
    time:"12:00 PM",
    task: "Lunch Time!",
    },
    {
    time:"1:00 PM",
    task: "",
    },
    {
    time:"2:00 PM",
    task: "",
    },
    {
    time:"3:00 PM",
    task: "",
    },
]

$(document).ready(function(){
var workDay = JSON.parse(localStorage.getItem("workDay"));
if (!localStorage.getItem('workDay')) {
    taskUpdate(workDay);
}
else { 
  workDay = new Array(8);
  workDay[5] = "Lunch Time!";
}
})
var blockIndex = 0;
for (var hour = 8; hour <= 16; hour++) {
    // var index = hour - 8
    var textArea = document.createElement('textArea');
    textArea.setAttribute('class','timeBlock'+blockIndex)
    console.log("outside if " + blockIndex)
    $('textArea'[blockIndex]).text("");
    console.log($('textArea'[blockIndex]));
    $('textArea').text(workDay[blockIndex]);
    var timeBlock = document.createElement('div');
    timeBlock.setAttribute('class','workHour'+blockIndex);
    var save = document.createElement('button'); 
    save.innerText = "save";
    save.setAttribute('class','save');
    save.setAttribute('id',blockIndex);
    save.addEventListener('click',saveTask);

    var blockHour;
    if (hour === 12) { //sets time to AM or PM
    blockHour = hour;
    timeBlock.innerText = blockHour + "PM"; 
    }
    else if (hour>12) {
    blockHour = hour - 12;
    timeBlock.innerText = blockHour + "PM"; 
    }
    else {
    blockHour = hour;
    timeBlock.innerText = blockHour + "AM"; 
    }
   
    timeBlock.append(textArea);
    timeBlock.append(save);
    $('.container').append(timeBlock);

    blockIndex++;
  }

  function taskUpdate(timeblock) {
    $('textArea').each(function(index){
        $(this).text(workDay[index].task)
    })
  }
  function saveTask () {
    alert ('is workin')
  }
