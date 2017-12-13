import axios from 'axios'
const initialState = {
    userData: {},
    isLoggedIn: false,
    quotes: []
}

const GET_USER = 'GET_USER'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'
const GET_QUOTES = 'GET_QUOTES'

export function getQuotes(){
    return {
        type: GET_QUOTES,
        payload: axios.get('/quotes').then( quotes => {
            console.log('quotesfrom redux, quotes.data: ',quotes.data)
            return quotes.data
        })
    }
}
export function toggleLogin(){
    return {
        type: TOGGLE_LOGIN,
        payload: !this.state.isLoggedIn
    }
}

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
        case TOGGLE_LOGIN : 
            return Object.assign({}, state, {isLoggedIn: action.payload})
        case GET_QUOTES + '_FULFILLED' : 
            return Object.assign({}, state, {quotes: action.payload})
        default:
            return state;
    }
}