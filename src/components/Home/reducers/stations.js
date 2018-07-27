import { createReducer } from '../../../lib/redux/helper';

const initialState = {
    stations: {},
    isMarker: false,
    contracts: {},
    contractFilter: {
      isFiltered: false,
      index: null,
    },
};

const actionHandlers = {
    'STATIONS_UPDATE': (state, { data }) => ({...state, stations: data}),
    'MARKER_VISIBLE': (state, { data }) => ({...state, isMarker: data}),
    'CONTRACTS_UPDATE': (state, { data }) => ({...state, contracts: data}),
    'FILTER_CONTRACT': (state, { index }) => ({...state, contractFilter: { isFiltered: true, index: index}}),
};

export default createReducer(initialState, actionHandlers);
