import { createReducer } from '../../../lib/redux/helper';

const initialState = {
        globalMessage: {
            isVisible: false,
        }
};

const actionHandlers = {
    'SET_GLOBAL_MESSAGE': (state, { text, className }) => ({...state, globalMessage: { isVisible: true, text, className}}),
    'HIDE_GLOBAL_MESSAGE': (state) => ({...state, globalMessage: { isVisible: false}}),
};

export default createReducer(initialState, actionHandlers);