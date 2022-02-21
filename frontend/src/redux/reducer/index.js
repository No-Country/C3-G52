import { GET_SERVICES } from "../actions/actions"

const initialState= {
    usuarios:[]
}
export default function (state = initialState, action){
    switch(action.type){
        case "ALGO": 
            return {...state, algo:action.payload}

        case GET_SERVICES:
            return {
                ...state,
                services: action.payload
            }

        default:  return {...state}
    }
}