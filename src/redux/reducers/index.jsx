import {combineReducers} from 'redux';
import movieReducer from './movie.reducer'
import userReducer from './user.reducer'
import bookingReducer from "./booking.reducer";
const rootReducer = combineReducers({ 
    movie : movieReducer,
    user : userReducer,
    booking : bookingReducer,

})
export default rootReducer;