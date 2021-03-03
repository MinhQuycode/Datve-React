import {SIGN_IN} from '../constants/user.constant';
const initialState = {
    userSignIn :null,
};

const useReducer= (state = initialState, action)=>{
    const {type,payload} = action;
    switch (type) {
        case SIGN_IN:{
                return {...state, userSignIn :payload};
            }
        default:
            return state;
    }
}
export default useReducer;