import { ADD_TODO,REMOVE_TODO,UPDATE_TODO } from "./todoTypes"

const initialState = {
    todos : [{
        id:345,
        item:'shrey'
    },]
}

const todoReducer = ( state = initialState , action) => {
    switch(action.type){
        case ADD_TODO:{
            return{
                todos : [...state.todos,action.payload]
            }
        }
        case REMOVE_TODO:{
            return{
                todos : state.todos.filter((todo) => todo.id !== action.payload)
            }
        }
        case UPDATE_TODO:{
            return{
                todos: state.todos.map((todo) => {
                    if(todo.id === action.payload.id){
                        return{
                            ...todo,
                            item:action.payload.item
                        }
                    }
                    return todo;
                })
            }
        }
        default: {
            return state
        }
    }
}

export default todoReducer;