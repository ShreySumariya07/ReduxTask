import { REMOVE_TODO,ADD_TODO,UPDATE_TODO } from "./todoTypes"

export const addTodo = (item) => {
    return {
        type:ADD_TODO,
        payload:item
    }
}

export const removeTodo = (id) =>{
    return{
        type:REMOVE_TODO,
        payload:id
    }
}

export const updateTodo = (item) =>{
    return{
        type:UPDATE_TODO,
        payload:item
    }
}

