import {
    ADD_DATA,
    GET_DATA,
    GET_DATA_TYPE,
    GET_DATA_KEY,
    DELETE_DATA
} from '../Types';

const initialState = {
    galaries: [],
    galarie: {}
};

export default function(state=initialState, action){
    switch(action.type){
        case ADD_DATA:
            return{
                ...state,
                galaries: action.payload
            };
        case GET_DATA:
            return{
                ...state,
                galaries: action.payload
            };
        case GET_DATA_TYPE:
            return{
                ...state,
                galaries:action.payload
            };
        case GET_DATA_KEY:
            return{
                ...state,
                galaries:action.payload
            };
        case DELETE_DATA:
            return{
                ...state,
                galaries:state.galaries.filter(galarie => galarie._id != action.payload)
            };
        default:
            return state;
    }
}