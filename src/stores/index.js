import { combineReducers } from 'redux';
import stations from '../components/Home/reducers/stations';
import userData from '../components/Home/reducers/userdata';

export default combineReducers({
    stations,
    userData,
});