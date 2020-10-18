const INITIAL_STATE = {
    data: [
        'teste1',
        'teste2'
    ],
}

export default function test(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TEST':
            return {...state, ...state.desc}
        default:
            return state;
    }
}