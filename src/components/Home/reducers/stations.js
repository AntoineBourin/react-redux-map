import { createReducer } from '../../../lib/redux/helper';

const initialState = {
    stations: null,
};

const actionHandlers = {
  'STATIONS_UPDATE': (state, { data }) => ({...state, stations: data}),
};

export default createReducer(initialState, actionHandlers);
