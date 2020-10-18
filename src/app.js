import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { externRoutes } from '../src/utils/routers';
import { Provider } from 'react-redux';
import store from './fluxArchiteture/store/store'

import { ThemeProvider } from '@material-ui/styles';
import { fuseVariant } from './utils/theme/customThemes';

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={fuseVariant}>
                <BrowserRouter>
                    <Switch>
                        {externRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    )
}