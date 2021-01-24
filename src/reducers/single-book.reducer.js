export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SINGLE_BOOK':
            return action.payload;
        default:
            return state;
    }
}; 