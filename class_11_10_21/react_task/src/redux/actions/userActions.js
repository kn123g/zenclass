import {ActionTypes} from '../constants/action_types';

export const setUser =(user)=>{
    return {
        type:ActionTypes.SET_USER,
        payload:user
    };
}


export const createUser =(user)=>{
    return {
        type:ActionTypes.CREATE_USER,
        payload:user
    };
}


export const selectedUser =(user)=>{
    return {
        type:ActionTypes.SELECTED_USER,
        payload:user
    };
}

export const getUsers =()=>{
    return {
        type:ActionTypes.GET_USERS
    };
    
}

export const deleteUsers =(id)=>{
    return {
        type:ActionTypes.REMOVE_SELECTED_USER,
        payload:id
    };
}