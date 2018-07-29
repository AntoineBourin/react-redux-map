import { combineReducers } from 'redux';
import stations from '../components/Home/reducers/stations';
import userData from '../components/Home/reducers/userdata';
import common from '../components/common/reducers/common';

export default combineReducers({
    stations,
    userData,
    common,
});