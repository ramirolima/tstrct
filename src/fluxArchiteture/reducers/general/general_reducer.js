var INITIAL_STATE = {
    selectedTheme: 'triider',
    drawerControl: false,
    drawerControlFix: false,
    drawerFloat: false,
    drawerTransition: false,
};
export default function theme(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SELECT_THEME':
            return { ...state, selectedTheme: action.name }
        case 'DRAWER_CONTROL':
            return { ...state, drawerControl: action.status }
        case 'DRAWER_CONTROL_FIX':
            return { ...state, drawerControlFix: action.status }
        case 'DRAWER_FLOAT':
            return { ...state, drawerFloat: action.status }
        case 'DRAWER_TRANSITION':
            return { ...state, drawerTransition: action.status }
        default:
            return state;
    }
}