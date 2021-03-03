import {GET_MOVIE_DETAIL, GET_MOVIE_LIST,GET_USER_LIST} from "../constants/movie.constant";
import {SIGN_IN} from "../constants/user.constant";
const initialState ={
    movieList : [],
    movieDetail:[],
    userList :[],
}
const movieReducer = (state = initialState, action) =>{
    let {type, payload} = action;
    switch(type){
        case GET_MOVIE_LIST :{
            //C1
            // state.movieList = payload;
            // return{...state};
            //c2
            return {...state,movieList : payload};
        }
        case GET_MOVIE_DETAIL :{
            return {...state,movieDetail : payload};
        }
        case GET_USER_LIST :{
            return {...state,userList : payload};
        }
        case SIGN_IN :{
            
        }
        default : 
        return state;
    }
}
export default movieReducer;