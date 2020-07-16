# DayPlanner
Day Planner

For this assignment I was tasked with creating a day plannner that met the following requirements:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

Using moment.js the day planner pulls the current date and time which are then displayed at the top of the planner.
Colors for each time block are adjusted according to whether they are in the past, present, or future. 
The User can enter their daily tasks into the associated time block and click "save task" to save their task to local storage.
When the User refreshes the page the added tasks are loaded from local storage.

Take a look at the deployed application here: https://ubern00bie.github.io/DayPlanner/


