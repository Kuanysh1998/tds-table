import { usersAPI } from '../api/api'

const SET_USERS = 'SET-USERS'
const SET_MALE_USERS = 'SET-MALE-USERS'
const SET_FEMALE_USERS = 'SET-FEMALE-USERS'
const SET_BY_AGES_INCREASING = 'SET-BY-AGES-INCREASING'
const SET_BY_AGES_DECREASING = 'SET-BY-AGES-DECREASING'
const SET_AMOUNT_USERS = 'SET-AMOUNT-USERS'
let initialState = {
    showAmountUsers: 20,
    usersData: []

}


const tdsTableReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USERS: 
            return {
                ...state,
                usersData: action.users
            }
        case SET_MALE_USERS:
            return {
                ...state,
                usersData: state.usersData.filter(user => user.gender === "male")

            }
        case SET_FEMALE_USERS:
            return {
                ...state,
                usersData: state.usersData.filter(user => user.gender === "female")
            }
        case SET_BY_AGES_INCREASING:
            return {
                ...state,
                usersData: action.sortedUsers
            }

        case SET_BY_AGES_DECREASING:
            return {
                ...state,
                usersData: action.sortedUsers
            }
        case SET_AMOUNT_USERS:
            return {
                ...state,
                showAmountUsers: action.amount
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
                dispatch(setAmountUsers(count))
                             
            })
    }
    }



export const setUsers = (users) => {
    return {type: SET_USERS, users}    
}

export const setMaleUsers = () => {
    return {type: SET_MALE_USERS}
}

export const setFemaleUsers = () => {
    return {type: SET_FEMALE_USERS}
}

export const setByAgesIncreasing = (sortedUsers) => {
    return {type: SET_BY_AGES_INCREASING, sortedUsers}
}

export const setByAgesDecreasing = (sortedUsers) => {
    return {type: SET_BY_AGES_DECREASING, sortedUsers}
}

export const setAmountUsers = (amount) => {
    return {type: SET_AMOUNT_USERS, amount}
}


export default tdsTableReducer