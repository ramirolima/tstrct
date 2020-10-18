import React from 'react';

import Login from '../views/login';
import Signup from '../views/signup';
import PassRecovery from '../views/passRecovery';
import MainScreen from '../views/main';
import Settings from '../views/settings';
import ContactMaint from '../views/contactMaint';
import ContactSearch from '../views/contactSearch';

export const externRoutes = [
    {
        path: "/",
        exact: true,
        main: () => <Login/>
    },
    {
        path: "/main",
        main: () => <MainScreen/>
    },
    {
        path: "/signup",
        main: () => <Signup/>
    },
    {
        path: "/passRecovery",
        main: () => <PassRecovery/>
    },
];


export const internRoutes = [
    {
        path: "/main",
        exact: true,
        main: () => <h2>home</h2>
    },
    {
        path: "/main/contactSearch",
        main: () => <ContactSearch/>
    },
    {
        path: "/main/contactMaint",
        main: () => <ContactMaint/>
    },
    {
        path: "/main/tela3",
        main: () => <h2>Tela 3</h2>
    },
    {
        path: "/main/tela4",
        main: () => <h2>Tela 4</h2>
    },
    {
        path: "/main/settings",
        main: () => <Settings/>
    },
];
