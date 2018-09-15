const initialState = {
    number: 0,
    button: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                number: state.number + 1,
                button: 'ADD'
            }
        case 'SUB':
            return {
                ...state,
                number: state.number - 1,
                button: 'SUB'
            }
        default:
            return state
    }
}