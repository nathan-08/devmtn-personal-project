import axios from 'axios'
const initialState = {
    userData: {}
}

const GET_USER = 'GET_USER'

export function getUser(){    
    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then( user => user.data)
    }
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case GET_USER + '_PENDING':
            return Object.assign({}, state, {userData: 'pending'})
        case GET_USER + '_FULFILLED':
            return Object.assign({}, state, {userData: action.payload[0]})
        case GET_USER + '_REJECTED':
            return Object.assign({}, state, {userData: action.payload})
        default:
            return state;
    }
}