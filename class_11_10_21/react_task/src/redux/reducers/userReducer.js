import { ActionTypes } from '../constants/action_types';
import {} from '../actions/userActions';
import { users } from "../../users_db.json";

const initialState = users.map(({id,username,name,email,phone,website,address}) =>{
    return ({id,username,name,email,phone,website,address: `${address.street} ${address.city}`})
  })

export const userReducer =(state=initialState,{type,payload})=>{
    switch(type){
        case ActionTypes.CREATE_USER:
            state.push({...payload,id:state.length+1})
            return state;

        case ActionTypes.SET_USER : 
        for(let i=0;i<state.length;i++){
            if(state[i].id === payload.id){
                state[i] = payload;
                break;
            }
        }
        return state;

        case ActionTypes.SELECTED_USER:
            return state;

        case ActionTypes.GET_USERS:
            return state;
        
        case ActionTypes.REMOVE_SELECTED_USER:
            for(let i=0;i<state.length;i++){
                if(state[i].id === payload){
                    state.splice(i,1)
                    break;
                }
            }
            return state;

        default:
            return state;
    }

}