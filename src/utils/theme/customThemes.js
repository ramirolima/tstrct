import { createMuiTheme } from '@material-ui/core/styles';
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

import {
  themeIhNove,
  themePatyKill,
  themeFuseClassic,
  themeFuseVariant,
  themeFuseNeutral,
  themeEnthusiastic,
  themePurpleGloss,
  themeBlueLime,
  themeNavyShort,
  themeDarkness,
  themeChimera,
  themeNephilim,
} from 'utils/baseImages';

import {
  calendarBlueLime,
  calendarPurpleGloss,
  calendarEnthusiastic,
  calendarNavyShort,
  calendarTriider,
  calendarFuseClassic,
  calendarFuseVariant,
  calendarFuseNeutral,
  calendarPatyKill,
  calendarIhNove,
  calendarDarkness,
  calendarChimera,
  calendarNephilim,
} from './calendar/styleThemeCalendars';

const white = '#fff';

//-------------------------
//     HIGHCOLORS - THEMES
//-------------------------
//#region

//#region -- blueLime --

export const blueLime = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blue[500],
      hover: blue[200]
    },
    secondary: {
      main: lightGreen['A400'],
      hover: lightGreen['A100']
    },
    joker: {
      main: blue[500],
      hover: blue[200]
    },
    jokerDetail: {
      main: lightGreen['A400'],
      hover: lightGreen['A100']
    },
    combination: {
      main: '#FFF',
      hover: grey[300]
    },
    components: {
      main: blue[50],
      hover: blue[200]
    },
    text: {
      mainColor: blue[500],
      primary: blue[100],
      secondary: blue[800],
      joker: blue[100],
      jokerDetail: grey[600],
      combination: blue[300],
      components: blue[500],
    },
    textHover: {
      mainColor: blue[200],
      primary: blue[400],
      secondary: lightGreen[500],
      joker: blue[400],
      jokerDetail: lightGreen[500],
      combination: blue[200],
      components: blue[300],
    },
    background: '#FFF',
    backgroundOut: blue[50],
    details: blue[50],
    gradient: 'linear-gradient(45deg, ' + blue[500] + ' 30%, #6200ea 70%)',
    gradientTextA: blue[100],
    gradientTextB: blue[100],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: lightGreen['A400'],
        color: grey[600],
        borderTopLeftRadius: '20px !important',
        borderBottomLeftRadius: '20px !important',
        height: 30,
      }
    },
    ...calendarBlueLime,
  }
});

//#endregion

//#region -- purpleGloss --

export const purpleGloss = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: purple[900],
      hover: purple[800],
    },
    secondary: {
      main: pink['A400'],
      hover: pink[200],
    },
    joker: {
      main: purple[900],
      hover: purple[800],
    },
    jokerDetail: {
      main: pink['A400'],
      hover: pink[200],
    },
    combination: {
      main: pink[400],
      hover: pink[200],
    },
    components: {
      main: pink[50],
      hover: pink[200],
    },
    text: {
      mainColor: pink[500],
      primary: purple[50],
      secondary: pink[100],
      joker: purple[50],
      jokerDetail: pink[100],
      combination: pink[100],
      components: pink[500],
    },
    textHover: {
      mainColor: blue[200],
      primary: purple[200],
      secondary: pink[500],
      joker: purple[200],
      jokerDetail: pink[500],
      combination: pink[400],
      components: pink[300],
    },
    background: pink[100],
    backgroundOut: pink[100],
    details: pink[100],
    fixOne: 'rgba(255,255,255,0.3)',
    gradient: 'linear-gradient(45deg, ' + purple[900] + ' 35%, ' + pink[400] + ' 65%)',
    gradientTextA: purple[50],
    gradientTextB: pink[100],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: pink['A400'],
        color: '#FFF',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarPurpleGloss,
  },
});

//#endregion

//#region -- enthusiastic --

export const enthusiastic = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFF',
      hover: purple[700],
    },
    secondary: {
      main: lime['A200'],
      hover: lime[700],
    },
    joker: {
      main: '#FFF',
      hover: purple[700],
    },
    jokerDetail: {
      main: purple[900],
      hover: purple[700],
    },
    combination: {
      main: pink['A400'],
      hover: pink[200],
    },
    components: {
      main: '#FFF',
      hover: purple[700],
    },
    text: {
      mainColor: purple[100],
      primary: purple[700],
      secondary: lime[800],
      joker: purple[700],
      jokerDetail: purple[100],
      combination: pink[100],
      components: purple[500],
    },
    textHover: {
      mainColor: blue[200],
      primary: purple[100],
      secondary: lime['A200'],
      joker: purple[100],
      jokerDetail: purple[300],
      combination: pink[400],
      components: purple[200],
    },
    background: purple[900],
    backgroundOut: pink[100],
    fixOne: 'rgba(255,255,255,0.4)',
    fixTwo: 'rgba(0,0,0,0.1)',
    details: purple[900],
    gradient: 'linear-gradient(45deg, ' + pink['A400'] + ' 35%, ' + lime['A200'] + ' 65%)',
    gradientTextA: pink[100],
    gradientTextB: purple[700],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: lime['A200'],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarEnthusiastic,
  }
});

//#endregion

//#region -- navyShort --

export const navyShort = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#000050',
      hover: '#000090',
    },
    secondary: {
      main: lightGreen['A400'],
      hover: lightGreen[200],
    },
    joker: {
      main: '#000050',
      hover: '#000090',
    },
    jokerDetail: {
      main: lightGreen['A400'],
      hover: lightGreen[200],
    },
    combination: {
      main: white,
      hover: grey[300],
    },
    components: {
      main: 'rgba(0,0,80,0.9)',
      hover: '#000050',
    },
    text: {
      mainColor: '#000050',
      primary: white,
      secondary: blue[900],
      joker: white,
      jokerDetail: white,
      combination: '#000050',
      components: white,
    },
    textHover: {
      mainColor: '#000090',
      primary: '#000050',
      secondary: '#000050',
      joker: lightGreen['A400'],
      jokerDetail: '#000050',
      combination: '#000090',
      components: '#000050',
    },
    background: white,
    backgroundOut: white,
    fixOne: 'rgba(0,0,0,0.3)',
    fixTwo: 'rgba(0,0,80,0.1)',
    details: '#000050',
    gradient: 'linear-gradient(45deg, #000050 35%, ' + white + ' 65%)',
    gradientTextA: white,
    gradientTextB: '#000050',
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: '#000050',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarNavyShort,
  }
});

//#endregion

//#region -- triider --

export const triider = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: deepOrange[500],
      hover: deepOrange[200]
    },
    secondary: {
      main: '#ddd',
      hover: lightGreen['A100']
    },
    joker: {
      main: deepOrange[300],
      hover: blue[200]
    },
    jokerDetail: {
      main: deepOrange[500],
      hover: lightGreen['A100']
    },
    combination: {
      main: '#FFF',
      hover: grey[300]
    },
    components: {
      main: deepOrange[100],
      hover: blue[200]
    },
    text: {
      mainColor: '#000',
      primary: deepOrange[900],
      secondary: deepOrange[900],
      joker: deepOrange[900],
      jokerDetail: deepOrange[900],
      combination: '#000',
      components: deepOrange[900],
    },
    textHover: {
      mainColor: deepOrange[100],
      primary: deepOrange[100],
      secondary: deepOrange[500],
      joker: deepOrange[500],
      jokerDetail: deepOrange[500],
      combination: deepOrange[200],
      components: deepOrange[300],
    },
    background: '#FFF',
    backgroundOut: deepOrange[100],
    fixTwo: 'rgba(0,0,0,0.03)',
    details: blue[50],
    gradient: 'linear-gradient(90deg, rgba(255,200,46,1) 0%, rgba(255,147,11,1) 22%, rgba(255,135,7,1) 50%, rgba(255,192,26,1) 85%, rgba(255,200,46,1) 100%)',
    gradientTextA: '#000',
    gradientTextB: deepOrange[900],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: deepOrange[700],
        color: deepOrange[100],
        borderTopLeftRadius: '20px !important',
        borderBottomLeftRadius: '20px !important',
        height: 30,
      }
    },
    ...calendarTriider,
  }
});

//#endregion

//#endregion

//-------------------------
//     COTIDIANCLASSIC - THEMES
//-------------------------
//#region

//#region -- fuseClassic --

export const fuseClassic = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFF',
      hover: grey[800],
    },
    secondary: {
      main: '#61dafb',
      hover: '#61caff',
    },
    joker: {
      main: '#1E2125',
      hover: grey[900],
    },
    jokerDetail: {
      main: '#1E2125',
      hover: grey[900],
    },
    combination: {
      main: '#192d3e',
      hover: '#192d36',
    },
    components: {
      main: grey[100],
      hover: grey[300],
    },
    text: {
      mainColor: grey[700],
      primary: grey[700],
      secondary: grey[700],
      joker: grey[200],
      jokerDetail: grey[200],
      combination: grey[100],
      components: grey[800],
    },
    textHover: {
      mainColor: grey[200],
      primary: grey[100],
      secondary: grey[500],
      joker: grey[800],
      jokerDetail: grey[800],
      combination: grey[600],
      components: grey[500],
    },
    background: '#FFF',
    backgroundOut: '#FFF',
    fixOne: 'rgba(255,255,255,0.5)',
    details: grey[500],
    gradient: 'linear-gradient(45deg, #1E2125 35%, #192d3e 65%)',
    gradientTextA: grey[200],
    gradientTextB: grey[200],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: '#61dafb',
        color: grey[200],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarFuseClassic,
  }
});

//#endregion

//#region -- fuseVariant --

export const fuseVariant = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFF',
      hover: grey[800],
    },
    secondary: {
      main: '#f44336',      
      hover: '#a04336',
    },
    joker: {
      main: '#1E2125',
      hover: grey[700],
    },
    jokerDetail: {
      main: '#FFF',
      hover: grey[200],
    },
    combination: {
      main: '#192d3e',
      hover: grey[300],
    },
    components: {
      main: grey[100],
      hover: grey[300],
    },
    text: {
      mainColor: grey[700],
      primary: grey[700],
      secondary: grey[400],
      joker: grey[500],
      jokerDetail: grey[800],
      combination: grey[500],
      components: grey[800],
    },
    textHover: {
      mainColor: grey[200],
      primary: grey[100],
      secondary: grey[600],
      joker: grey[600],
      jokerDetail: grey[400],
      combination: grey[800],
      components: grey[700],
    },
    background: '#FFF',
    backgroundOut: '#FFF',
    fixOne: 'rgba(255,255,255,0.5)',
    fixTwo: 'rgba(0,0,0,0.1)',
    gradient: 'linear-gradient(45deg, #1E2125 35%, #192d3e 65%)',
    gradientTextA: grey[200],
    gradientTextB: grey[200],
    details: grey[500],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: '#192d3e',
        color: grey[200],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarFuseVariant,
  }
});

//#endregion

//#region -- fuseNeutral --

export const fuseNeutral = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFF',
      hover: grey[300],
    },
    secondary: {
      main: '#192d3e',
      hover: grey[800],
    },
    joker: {
      main: '#FFF',
      hover: grey[300],
    },
    jokerDetail: {
      main: '#FFF',
      hover: grey[300],
    },
    combination: {
      main: '#192d3e',
      hover: grey[100],
    },
    components: {
      main: grey[100],
      hover: grey[300],
    },
    text: {
      mainColor: grey[600],
      primary: grey[700],
      secondary: grey[500],
      joker: grey[700],
      jokerDetail: grey[700],
      combination: grey[200],
      components: grey[800],
    },
    textHover: {
      mainColor: grey[300],
      primary: grey[100],
      secondary: grey[100],
      joker: grey[400],
      jokerDetail: grey[100],
      combination: grey[800],
      components: grey[400],
    },
    background: '#FFF',
    backgroundOut: '#FFF',
    fixOne: 'rgba(255,255,255,0.5)',
    gradient: 'linear-gradient(45deg, #1E2125 35%, #192d3e 65%)',
    gradientTextA: grey[200],
    gradientTextB: grey[200],
    details: grey[500],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: '#192d3e',
        color: grey[200],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarFuseNeutral,
  }
});

//#endregion

//#region -- patyKill --

export const patyKill = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blueGrey[900],
      hover: blueGrey[800]
    },
    secondary: {
      main: teal['A400'],
      hover: teal['A700']
    },
    joker: {
      main: blueGrey[900],
      hover: blueGrey[700]
    },
    jokerDetail: {
      main: blueGrey[400],
      hover: blueGrey[300]
    },
    combination: {
      main: blueGrey[50],
      hover: blueGrey[200]
    },
    components: {
      main: grey[50],
      hover: blueGrey[200]
    },
    text: {
      mainColor: blueGrey[500],
      primary: blueGrey[100],
      secondary: teal[700],
      joker: blueGrey[100],
      jokerDetail: blueGrey[600],
      combination: blueGrey[500],
      components: blueGrey[500],
    },
    textHover: {
      mainColor: blueGrey[600],
      primary: blueGrey[700],
      secondary: teal[500],
      joker: teal['A400'],
      jokerDetail: blueGrey[400],
      combination: blueGrey[300],
      components: blueGrey[300],
    },
    background: blueGrey[50],
    backgroundOut: blueGrey[50],
    details: blueGrey[100],
    gradient: 'linear-gradient(45deg, ' + blueGrey[900] + ' 35%, ' + blueGrey[400] + ' 65%)',
    gradientTextA: blueGrey[100],
    gradientTextB: blueGrey[600],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: blueGrey[900],
        color: grey[600],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarPatyKill,
  }
});

//#endregion

//#region -- ihNove --

export const ihNove = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FFF',
      hover: blue[200]
    },
    secondary: {
      main: '#2e3897',
      hover: lightGreen['A100']
    },
    joker: {
      main: '#25a9e3',
      hover: blue[200]
    },
    jokerDetail: {
      main: '#2888cd',
      hover: lightGreen['A100']
    },
    combination: {
      main: '#2e3897',
      hover: grey[300]
    },
    components: {
      main: blue[50],
      hover: blue[200]
    },
    text: {
      mainColor: blue[500],
      primary: blue[300],
      secondary: blue[700],
      joker: blue[100],
      jokerDetail: grey[600],
      combination: blue[200],
      components: blue[500],
    },
    textHover: {
      mainColor: blue[200],
      primary: blue[400],
      secondary: lightGreen[500],
      joker: blue[400],
      jokerDetail: lightGreen[500],
      combination: blue[200],
      components: blue[300],
    },
    background: '#FFF',
    backgroundOut: blue[50],
    details: blue[500],
    fixOne: 'rgba(40,136,205,0.6)',
    gradient: 'linear-gradient(45deg, #2e3897 30%, #25a9e3 70%)',
    gradientTextA: blue[100],
    gradientTextB: blue[100],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: '#2e3897',
        color: grey[600],
        borderTopLeftRadius: '20px !important',
        borderBottomLeftRadius: '20px !important',
        height: 30,
      }
    },
    ...calendarIhNove,
  }
});

//#endregion

//#endregion

// //-------------------------
// //      DARKMODE - THEMES
// //-------------------------
//#region

//#region -- darkness --

export const darkness = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#171717',
      hover: grey[700],
    },
    secondary: {
      main: grey[900],
      hover: purple[300],
    },
    joker: {
      main: '#171717',
      hover: grey[800],
    },
    jokerDetail: {
      main: '#171717',
      hover: grey[900],
    },
    combination: {
      main: grey[900],
      hover: grey[800],
    },
    components: {
      main: '#171717',
      hover: grey[900],
    },
    text: {
      mainColor: grey[800],
      primary: grey[800],
      secondary: grey[800],
      joker: grey[800],
      jokerDetail: grey[800],
      combination: grey[800],
      components: grey[800],
    },
    textHover: {
      mainColor: grey[200],
      primary: grey[100],
      secondary: grey[900],
      joker: grey[900],
      jokerDetail: grey[700],
      combination: grey[900],
      components: grey[700],
    },
    background: grey[900],
    backgroundOut: grey[900],
    fixOne: 'rgba(0,0,0,0.4)',
    details: '#171717',
    gradient: 'linear-gradient(45deg, #272727 20%, ' + grey[800] + ' 80%)',
    gradientTextA: grey[800],
    gradientTextB: grey[900],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: '#171717',
        color: grey[600],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarDarkness,
  }
});

//#endregion

//#region -- chimera --

export const chimera = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#171717',
      hover: grey[900],
    },
    secondary: {
      main: lime['A400'],
      hover: lime[300],
    },
    joker: {
      main: '#171717',
      hover: grey[900],
    },
    jokerDetail: {
      main: '#171717',
      hover: grey[900],
    },
    combination: {
      main: '#111',
      hover: grey[800],
    },
    components: {
      main: '#171717',
      hover: grey[900],
    },
    text: {
      mainColor: grey[600],
      primary: deepPurple['A400'],
      secondary: grey[800],
      joker: deepPurple[600],
      jokerDetail: deepPurple[600],
      combination: deepPurple[600],
      components: grey[800],
    },
    textHover: {
      mainColor: grey[200],
      primary: grey[700],
      secondary: grey[500],
      joker: grey[900],
      jokerDetail: grey[700],
      combination: grey[900],
      components: grey[700],
    },
    background: purple[900],
    backgroundOut: grey[900],
    fixTwo: 'rgba(0,0,0,0.3)',
    details: '#171717',
    gradient: 'linear-gradient(45deg, #161616 45%, #191919 55%)',
    gradientTextA: lime['A400'],
    gradientTextB: deepPurple['A400'],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: lime['A400'],
        color: grey[600],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarChimera,
  }
});

//#endregion

//#region -- nephilim --

export const nephilim = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: '#000',
      hover: grey[900],
    },
    secondary: {
      main: lightGreen['A400'],
      hover: lime[300],
    },
    joker: {
      main: '#000',
      hover: grey[900],
    },
    jokerDetail: {
      main: '#000',
      hover: grey[900],
    },
    combination: {
      main: '#171717',
      hover: grey[900],
    },
    components: {
      main: grey[900],
      hover: grey[700],
    },
    text: {
      mainColor: grey[600],
      primary: red['A700'],
      secondary: grey[800],
      joker: red['A700'],
      jokerDetail: red['A700'],
      combination: grey[700],
      components: grey[800],
    },
    textHover: {
      mainColor: grey[200],
      primary: grey[700],
      secondary: grey[500],
      joker: grey[900],
      jokerDetail: grey[700],
      combination: grey[900],
      components: grey[700],
    },
    background: '#171717',
    backgroundOut: grey[900],
    fixTwo: 'rgba(0,0,0,0.4)',
    details: '#000',
    gradient: 'linear-gradient(45deg, #161616 45%, #191919 55%)',
    gradientTextA: lightGreen['A400'],
    gradientTextB: lightGreen['A400'],
  },
  typography: {
    fontFamily: 'Calibri, Didot',
    fontSize: 13,
  },
  overrides: {
    PrivateTabScrollButton: {
      vertical: {
        background: red['A700'],
        color: grey[600],
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        height: 30,
      }
    },
    ...calendarNephilim,
  }
});

//#endregion

//#endregion















//#region  OLD


// export const lightTealPink = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: teal['A200'],
//       colorText: pink['A400'],
//       hover: teal['A100'],
//       hoverText: pink[300],
//     },
//     secondary: {
//       main: pink['A400'],
//       colorText: teal['A200'],
//       hover: pink['A200'],
//       hoverText: teal[100],
//     },
//     extra: {
//       main: '#1E2125',
//       colorText: '#FFF',
//       hover: lightGreen[200],
//       hoverText: lightGreen[800],
//     },
//     combination: {
//       main: pink['A100'],
//       colorText: teal['A200'],
//       hover: pink[100],
//       hoverText: teal[300],
//     },
//     colorText: grey[700],
//     background: pink[50],
//     backgroundOut: pink[50],
//     details: grey[300],
//     joker: pink[300],
//     gradient: 'linear-gradient(45deg, #64ffda 85%, #f50057 15%)',
//   },
// });

// export const lightPurpleCyan = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: purple['A700'],
//       colorText: cyan['A200'],
//       hover: purple[300],
//       hoverText: cyan[300],
//     },
//     secondary: {
//       main: cyan['A200'],
//       colorText: purple['A700'],
//       hover: cyan[200],
//       hoverText: purple[400],
//     },
//     extra: {
//       main: '#1E2125',
//       colorText: '#FFF',
//       hover: lightGreen[200],
//       hoverText: lightGreen[800],
//     },
//     combination: {
//       main: purple[600],
//       colorText: cyan['A200'],
//       hover: purple[300],
//       hoverText: cyan[300],
//     },
//     colorText: grey[700],
//     background: '#FFF',
//     backgroundOut: '#FFF',
//     details: grey[300],
//     gradient: 'linear-gradient(45deg, #aa00ff 30%, #e040fb 70%)',
//   }
// });

// export const lightGrayLime = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: blueGrey[500],
//       colorText: lightGreen['A400'],
//       hover: blueGrey[200],
//       hoverText: lightGreen[800],
//     },
//     secondary: {
//       main: lightGreen['A400'],
//       colorText: blueGrey[500],
//       hover: lightGreen['200'],
//       hoverText: blueGrey[300],
//     },
//     extra: {
//       main: '#1E2125',
//       colorText: '#FFF',
//       hover: lightGreen[200],
//       hoverText: lightGreen[800],
//     },
//     combination: {
//       main: '#FFF',
//       colorText: grey[600],
//       hover: blueGrey[50],
//       hoverText: grey[400],
//     },
//     colorText: grey[700],
//     background: '#FFF',
//     backgroundOut: '#FFF',
//     details: grey[300],
//     gradient: 'linear-gradient(45deg, #607d8b 50%, #90a4ae 50%)',
//   },
// });

// export const lightPurplePink = createMuiTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: purple[900],
//       colorText: '#FFF',
//       hover: purple[400],
//       hoverText: '#FFF',
//     },
//     secondary: {
//       main: pink['A400'],
//       colorText: '#FFF',
//       hover: pink[200],
//       hoverText: '#FFF',
//     },
//     extra: {
//       main: '#1E2125',
//       colorText: '#FFF',
//       hover: lightGreen[200],
//       hoverText: lightGreen[800],
//     },
//     combination: {
//       main: pink[400],
//       colorText: '#FFF',
//       hover: pink[200],
//       hoverText: '#FFF',
//     },
//     colorText: grey[700],
//     background: pink[100],
//     backgroundOut: pink[100],
//     details: pink[100],
//     joker: pink[300],
//     gradient: 'linear-gradient(45deg, #4a148c 80%, #f50057 20%)',
//   },
// });

// //-------------------------
// //      DARK - THEMES
// //-------------------------

// export const darkGreyLime = createMuiTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: blueGrey[900],
//       colorText: blueGrey[300],
//       hover: blueGrey[800],
//       hoverText: blueGrey[500],
//     },
//     secondary: {
//       main: lightGreen['A400'],
//       colorText: blueGrey[300],
//       hover: lightGreen[400],
//       hoverText: blueGrey[400],
//     },
//     extra: {
//       main: '#1E2125',
//       colorText: '#FFF',
//       hover: lightGreen[200],
//       hoverText: lightGreen[800],
//     },
//     combination: {
//       main: grey[800],
//       colorText: blueGrey[300],
//       hover: grey[600],
//       hoverText: blueGrey[700],
//     },
//     colorText: blueGrey[300],
//     background: grey[800],
//     backgroundOut: grey[800],
//     details: grey[700],
//     gradient: 'linear-gradient(45deg, #263238 80%, #76ff03 20%)',
//   },
// });



// export const darkIndigoLime = createMuiTheme({
//   palette: {
//     type: 'dark',
//     primary: {
//       main: '#003',
//       colorText: grey[400],
//       hover: '#005',
//       hoverText: grey[700],
//     },
//     secondary: {
//       main: lightGreen['A400'],
//       colorText: grey[600],
//       hover: lightGreen[300],
//       hoverText: grey[500],
//     },
//     extra: {
//       main: '#1E2125',
//       colorText: '#FFF',
//       hover: lightGreen[200],
//       hoverText: lightGreen[800],
//     },
//     combination: {
//       main: indigo[900],
//       colorText: grey[400],
//       hover: indigo[600],
//       hoverText: grey[500],
//     },
//     colorText: grey[100],
//     background: indigo[900],
//     backgroundOut: indigo[900],
//     details: indigo[800],
//     gradient: 'linear-gradient(45deg, #003 85%, #76ff03 15%)',
//   },
// });

// export const allThemes = [

// lightTealPink,
// lightPurpleCyan,
// lightGrayLime,
// lightPurplePink,
// darkGreyLime,
// darkGreyPurple,
// darkIndigoLime
// ];

//#endregion

export const allThemes =
  [
    {
      category: 'Cotidian Classic',
      themes:
        [
          {
            name: 'ihNove',
            label: 'IhNove',
            theme: ihNove,
            thumb: themeIhNove,
          },
          {
            name: 'patyKill',
            label: 'PatyKill',
            theme: patyKill,
            thumb: themePatyKill,
          },
          {
            name: 'fuseClassic',
            label: 'FuseClassic',
            theme: fuseClassic,
            thumb: themeFuseClassic,
          },
          {
            name: 'fuseVariant',
            label: 'FuseVariant',
            theme: fuseVariant,
            thumb: themeFuseVariant,
          },
          {
            name: 'fuseNeutral',
            label: 'FuseNeutral',
            theme: fuseNeutral,
            thumb: themeFuseNeutral,
          },
        ]
    },
    {
      category: 'High Colors',
      themes: [
        {
          name: 'enthusiastic',
          label: 'Enthusiastic',
          theme: enthusiastic,
          thumb: themeEnthusiastic,
        },
        {
          name: 'purpleGloss',
          label: 'PurpleGloss',
          theme: purpleGloss,
          thumb: themePurpleGloss,
        },
        {
          name: 'blueLime',
          label: 'BlueLime',
          theme: blueLime,
          thumb: themeBlueLime,
        },
        {
          name: 'navyShort',
          label: 'NavyShort',
          theme: navyShort,
          thumb: themeNavyShort,
        },
        {
          name: 'triider',
          label: 'Triider',
          theme: triider,
          thumb: triider,
        },
      ]
    },
    {
      category: 'Dark Mode',
      themes: [
        {
          name: 'darkness',
          label: 'Darkness',
          theme: darkness,
          thumb: themeDarkness,
        },
        {
          name: 'chimera',
          label: 'Chimera',
          theme: chimera,
          thumb: themeChimera,
        },
        {
          name: 'nephilim',
          label: 'Nephilim',
          theme: nephilim,
          thumb: themeNephilim,
        },
      ]
    }]

export function getTheme(name) {
  for (var i = 0; i < allThemes.length; i++) {
    for (var x = 0; x < allThemes[i].themes.length; x++) {
      if (allThemes[i].themes[x].name === name)
        return allThemes[i].themes[x].theme;
    }
  }
}