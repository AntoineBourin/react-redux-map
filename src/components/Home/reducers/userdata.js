import { createReducer } from '../../../lib/redux/helper';

const initialState = {};

const actionHandlers = {
    'SET_USER_COORDS': (state, { coords }) => ({...state, lat: coords.lat, lng: coords.lng}),
};

export default createReducer(initialState, actionHandlers);