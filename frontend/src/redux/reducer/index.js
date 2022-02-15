
const initialState= {
    usuarios:[]
}
export default function (state = initialState, action){
    switch(action.type){
        case "ALGO": 
            return {...state, algo:action.payload}

        default:  return {...state}
    }
}