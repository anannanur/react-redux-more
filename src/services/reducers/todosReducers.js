import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstants";

const initialState = {
    todos : [],
    isLoading : false,
    error : null
}

const todosReducer = (state = initialState , action)=>{
    switch (action.type) {
        case GET_TODOS_REQUEST:            
            return {
                ...state,
                isLoading : true
            };
        case GET_TODOS_SUCCESS:           
            return {
                todos : action.payload,
                isLoading : false,
                error : null
            };
        case GET_TODOS_FAILED:           
            return {
                isLoading : false,
                todos : [],
                error: action.payload
            };
    
        default:
            return state;
    }
}
export default todosReducer;