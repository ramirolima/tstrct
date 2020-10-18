import pink from '@material-ui/core/colors/pink';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import lightGreen from '@material-ui/core/colors/lightGreen';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import yellow from '@material-ui/core/colors/yellow';
import lime from '@material-ui/core/colors/lime';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import red from '@material-ui/core/colors/red';
const white = '#FFF';
const black = '#000';

//-------------------------
//     HIGHCOLORS - THEMES
//-------------------------
//#region

//#region -- calendarBlueLime --

export const calendarBlueLime =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: white,
        },
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + blue[500] + ',' + blue[100] + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundImage: 'linear-gradient(to right,' + blue[500] + ',' + blue[100] + ')',
        },
        dayLabel:{
            color: lightGreen['A400'],
        },
    },
    MuiPickersDay: {
        day: {
            color: blue[500]
        },
        daySelected: {
            backgroundColor: lightGreen['A400'],
            color: blue[500]
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: lightGreen['A400'],
        },
    },
}

//#endregion

//#region -- calendarPurpleGloss --

export const calendarPurpleGloss =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: white,
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + pink[400] + ',' + white + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundImage: 'linear-gradient(to right,' + purple[900] + ',' + pink[400] + ')',
        },
        dayLabel:{
            color: purple[900],
        },
    },
    MuiPickersDay: {
        day: {
            color: pink['A400'],
        },
        daySelected: {
            backgroundColor: purple[900],
            color: white
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: purple[900],
        },
    },
}

//#endregion

//#region -- enthusiastic --

export const calendarEnthusiastic =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundImage: 'linear-gradient(to right,' + white + ',' + lime['A200'] + ')',
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + pink['A400'] + ',' + white + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundImage: 'linear-gradient(to right,' + purple[900] + ',' + purple[900] + ')',
        },
        dayLabel:{
            color: pink['A400'],
        },
    },
    MuiPickersDay: {
        day: {
            color: purple[900],
        },
        daySelected: {
            backgroundColor: purple[900],
            color: lime['A200'],
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: pink['A400'],
        },
    },
}

//#endregion

//#region -- calendarNavyShort --

export const calendarNavyShort =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: grey[200],
        }
    },
    MuiPickersToolbar: { 
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + '#000050' + ',' + grey[200] + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: lightGreen['A400'],
            color: '#000050',
        },
        dayLabel:{
            color: '#000050',
        },
    },
    MuiPickersDay: {
        day: {
            color: blue[500]
        },
        daySelected: {
            backgroundColor: lightGreen['A400'],
            color: blue[500]
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: lightGreen['A400'],
        },
    },
}

//#endregion

//#region -- calendarTriider --

export const calendarTriider =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: '#FFF',
        }
    },
    MuiPickersToolbar: { 
        toolbar: {
            backgroundImage: 'linear-gradient(to right,'+ deepOrange[300] +', #FFF )',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: deepOrange[500],
            color: '#FFF',
        },
        dayLabel:{
            color: '#000',
        },
    },
    MuiPickersDay: {
        day: {
            color: '#777'
        },
        daySelected: {
            backgroundColor: deepOrange[500],
            color: '#FFF',
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: deepOrange[500],
        },
    },
}

//#endregion

//#endregion

//-------------------------
//     COTIDIANCLASSIC - THEMES
//-------------------------
//#region

//#region -- calendarFuseClassic --

export const calendarFuseClassic =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: grey[300],
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + white + ',' + grey[300] + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: '#61dafb',
        },
    },
    MuiPickersDay: {
        day: {
            color: black,
        },
        daySelected: {
            backgroundColor: '#61dafb',
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: '#61dafb',
        },
    },
}

//#endregion

//#region -- calendarFuseVariant --

export const calendarFuseVariant =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: grey[300],
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + white + ',' + grey[300] + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: '#192d3e',
        },
    },
    MuiPickersDay: {
        day: {
            color: black,
        },
        daySelected: {
            backgroundColor: '#f44336',
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: '#f44336',
        },
    },
}

//#endregion

//#region -- calendarFuseNeutral --

export const calendarFuseNeutral =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: grey[300],
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + white + ',' + grey[300] + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: '#192d3e',
            color: "white",
        },
    },
    MuiPickersDay: {
        day: {
            color: black,
        },
        daySelected: {
            backgroundColor: grey[500],
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: '#f44336',
        },
    },
}

//#endregion

//#region -- calendarPatyKill --

export const calendarPatyKill =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: white,
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + blueGrey[900] + ',' + blueGrey[400] + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundImage: 'linear-gradient(to right,' + blueGrey[900] + ',' + blueGrey[400] + ')',
            color: white,
        },
    },
    MuiPickersDay: {
        day: {
            color: blueGrey[900],
        },
        daySelected: {
            backgroundColor: teal['A400'],
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: teal['A400'],
        },
    },
}

//#endregion

//#region -- calendarIhNove --

export const calendarIhNove =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: blue[50],
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right, #2e3897, #25a9e3)',
            color: "white !important",
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: '#25a9e3',
            color: white,
        },
    },
    MuiPickersDay: {
        day: {
            color: black,
        },
        daySelected: {
            backgroundColor: '#25a9e3',
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: '#25a9e3',
        },
    },
}

//#endregion

//#endregion

// //-------------------------
// //      DARKMODE - THEMES
// //-------------------------
//#region

//#region -- calendarDarkness --

export const calendarDarkness =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: '#171717',
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right, #171717, #272727)',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: grey[900],
            color: grey[700],
        },
        dayLabel:{
            color:grey[800],
        },
    },
    MuiPickersDay: {
        day: {
            color: black,
        },
        daySelected: {
            backgroundColor: grey[800],
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: grey[800],
        },
    },
}

//#endregion

//#region -- calendarChimera --

export const calendarChimera =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: '#171717',
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + '#171717' + ',' + '#272727' + ')',
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: purple[900],
            color: grey[700],
        },
        dayLabel:{
            color:grey[800],
        },
    },
    MuiPickersDay: {
        day: {
            color: lime['A400'],
        },
        daySelected: {
            backgroundColor: grey[800],
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: grey[800],
        },
    },
}

//#endregion

//#region -- calendarNephilim --

export const calendarNephilim =
{
    MuiPickersBasePicker: {
        pickerView: {
            backgroundColor: '#171717',
        }
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundImage: 'linear-gradient(to right,' + '#171717' + ',' + '#272727' + ')',
            color: "white !important",
        },
    },
    MuiPickersCalendarHeader: {
        switchHeader: {
            borderRadius: 10,
            backgroundColor: red['A700'],
            color: black,
        },
        dayLabel:{
            color: grey[700],
        },
    },
    MuiPickersDay: {
        day: {
            color: lime['A400'],
        },
        daySelected: {
            backgroundColor: grey[800],
            color: black,
        },
        dayDisabled: {
            color: grey[700]
        },
        current: {
            color: red['A700'],
        },
    },
}

//#endregion

//#endregion