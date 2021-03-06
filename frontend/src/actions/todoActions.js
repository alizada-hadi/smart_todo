import axios from "axios"
import {
    TODO_LIST_REQUEST,
    TODO_LIST_SUCCESS,
    TODO_LIST_FAIL
} from '../constants/todoConstants'


export const listTodos = () => async (dispatch) => {
    try{
        dispatch({
            type: TODO_LIST_REQUEST
        })
        const {data} = await axios.get('http://127.0.0.1:8000/todos')
        dispatch({
            type: TODO_LIST_SUCCESS,
            payload:data
        })
    }catch(error){
        dispatch({
            type:TODO_LIST_FAIL,
            payload:error.response && error.response.data.message ? error.response.data.message:error.message
        })
    }
}


