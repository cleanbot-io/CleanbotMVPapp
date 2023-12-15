## React Native MVP app for consumers/users

## temporary place for notes
Schedule screen notes:
@todo: show choose date if one isn't planned. <Button title='Choose Date' style={styles.btns} /> 

like wise, hide date for next clean and show choose date button, when one is not
scheduled. Will hide "next clean date" on the top of the screen, and start adding
the functionality to set a date from the button. 

For SchedulerDatePicker "SchedulerDP" figure out how to parse the selected date
and time and save it to the db for a client's selected time and date for the
next clean. Afterwards pull the data from the collection and show it in the
ScheduleScreen in the upcoming next clean. 

https://github.com/react-native-datetimepicker/datetimepicker 
Datepicker Docs::

I now have the time and date logging into the console, getting from "date" state
pressing the "done" btn and now, will start getting the DB collections structure
into place. Then on the displaying in the "Schedule" screen
