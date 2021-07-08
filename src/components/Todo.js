import React,{ useState } from 'react'
import { addTodo, removeTodo, updateTodo } from '../redux/todo/todoActions'
import { connect } from 'react-redux'
import { FaEdit,FaTrash } from 'react-icons/fa'
import './todo.css'
const Todo = (props) => {
    const [todo,setTodo] = useState("")
    const [editing,setEditing] = useState(false)
    const [editId,setEditId] = useState(12)

    function addTodo() {
        console.log('hello')
        if (todo === ""){
            alert("todo is empty")
        }
        else if(todo.length > 0 && editing){
            props.updateTodo({
                id:editId,
                item:todo
            })
        }
        else{
            props.addTodo({
                id:Math.floor(Math.random() * 1000),
                item:todo
            })   
        }
        setTodo(" ")
    }
    return (
        <section className='section-center'>
                <h3>Todo</h3>
                <div className='form-control'>
                <input
                    type='text'
                    className='grocery'
                    placeholder='enter anything'
                    value={todo}
                    onChange ={(e) => setTodo(e.target.value)}
                />
                <button className='submit-btn' onClick={addTodo}>
                    submit
                </button>
                </div>
                <div className='grocery-list'>
                    {props.todos.todos.map((todo) => {
                        return (
                        <article className='grocery-item' key={todo.id}>
                            <p className='title'>{todo.item}</p>
                            <div className='btn-container'>
                            <button
                                type='button'
                                className='edit-btn'
                                onClick={() => {setTodo(todo.item);setEditing(true);setEditId(todo.id)}}
                            >
                                <FaEdit />
                            </button>
                            <button
                                type='button'
                                className='delete-btn'
                                onClick={() => {props.removeTodo(todo.id)}}
                            >
                                <FaTrash />
                            </button>
                            </div>
                        </article>
                        );
                    })}
                </div>
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        todos : state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addTodo : (obj) => dispatch(addTodo(obj)),
        removeTodo: (id) => dispatch(removeTodo(id)),
        updateTodo: (obj) => dispatch(updateTodo(obj)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);