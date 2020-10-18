export function selectThemeAction(name) {
    return { type: 'SELECT_THEME', name: name };
}

export function setDrawerControl(status) {
    return { type: 'DRAWER_CONTROL', status: status };
}

export function setDrawerControlFix(status) {
    return { type: 'DRAWER_CONTROL_FIX', status: status };
}

export function setDrawerFloat(status) {
    return { type: 'DRAWER_FLOAT', status: status };
}

export function setDrawerTransition(status) {
    return { type: 'DRAWER_TRANSITION', status: status };
}