import { createReducer } from '../../../lib/redux/helper';

const initialState = {
    stations: {},
    isMarker: false,
    contracts: {},
    contractFilter: {
        isFiltered: false,
        contractName: null,
        position: {},
    },
};

const actionHandlers = {
    'STATIONS_UPDATE': (state, { data }) => ({...state, stations: data}),
    'MARKER_VISIBLE': (state, { data }) => ({...state, isMarker: data}),
    'CONTRACTS_UPDATE': (state, { data }) => ({...state, contracts: data}),
    'FILTER_CONTRACT': (state, { index, nbStations }) => ({...state, contractFilter: { isFiltered: true, contractName: index, nbStations}}),
    'CANCEL_CONTRACT_FILTER': (state) => ({...state, contractFilter: { isFiltered: false, contractName: null, position: null}}),
    'CONTRACT_COORDS_UPDATED': (state, { data }) => ({...state, contractFilter: {...state.contractFilter, position: data}}),
};

export default createReducer(initialState, actionHandlers);
