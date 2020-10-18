import React from 'react';
import { Route } from "react-router-dom";
import useStyles from './style';
import { ThemeProvider } from '@material-ui/styles';
import ContentMain from 'components/custom/mainScreen/content';
import AppBarMain from 'components/custom/mainScreen/appBar';
import DrawerMain from 'components/custom/mainScreen/drawer';
import { internRoutes } from 'utils/routers';
import { useSelector } from 'react-redux';

import { getTheme } from '../../utils/theme/customThemes'

export default function MainScreen(props) {

    var selectedTheme = useSelector(state => state.general.selectedTheme)
    {document.body.style = `background:${getTheme(selectedTheme).palette.background}`}

    return (
        <ThemeProvider theme={getTheme(selectedTheme)}>
            <div >
                <div style={{ display: "flex" }}>
                    <AppBarMain/>
                    <DrawerMain/>
                    <ContentMain>
                        {internRoutes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </ContentMain>
                </div>
            </div>
        </ThemeProvider>
    );
}