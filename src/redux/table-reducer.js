import { usersAPI } from '../api/api'

const SET_USERS = "SET-USERS"

let initialState = {
    usersData:[],

}


const tdsTableReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USERS: 
            return {
                ...state,
                usersData: action.users
            }
        
        default:
            return state;
    }
}

export const getUsers = (count = 20) => {
    return (dispatch) => {
          
        usersAPI.getUsers(count)
            .then(response=>{
                dispatch(setUsers(response.data.results));
                             
            })
    }
    }


export const setUsers = (users) => {
    return {type: SET_USERS, users}    
}


export default tdsTableReducer