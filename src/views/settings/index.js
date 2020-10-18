import React from 'react';
import VerticalTab from 'components/reusable/verticalTab'
import tabItens from './tabs/tabList'

function Settings() {
    return (
        <VerticalTab tabs={tabItens} ></VerticalTab>
    )
}

export default Settings;












// import { useDispatch } from 'react-redux';
    // import { selectThemeAction } from 'fluxArchiteture/actions/general/general_action'
    // const dispatch = useDispatch();

    // function selectTheme(index) {
    //     dispatch(selectThemeAction(index))
    // }
