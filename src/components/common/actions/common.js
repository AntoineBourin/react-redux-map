import { makeActionCreator } from '../../../lib/redux/helper';

export const setGlobalMessage = makeActionCreator('SET_GLOBAL_MESSAGE', 'text', 'className');
export const deleteGlobalMessage = makeActionCreator('HIDE_GLOBAL_MESSAGE');