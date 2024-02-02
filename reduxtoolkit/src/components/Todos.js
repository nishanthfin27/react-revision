import React from 'react'
import {useSelector} from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import {useDispatch} from 'react-redux'

function Todos() {
    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
    
  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
            <ul key={todo}>
                <li key={todo.id}></li>
                <div>{todo.text}</div>
                <button
                onClick={() => dispatch(removeTodo(todo.id))}
                >remove todo</button>
            </ul>
        ))}
    </>
    )
}

export default Todos