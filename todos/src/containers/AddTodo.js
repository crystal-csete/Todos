import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import './AddTodo.css'

let AddTodo = ({ dispatch }) => {
    let input

    return (
        <div className="addTodo_container">
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ""
            }}>
                <input className="addTodo_input" ref={node => {
                    input = node
                }} />
                <button className="addTodo_btn" type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}
AddTodo = connect()(AddTodo)

export default AddTodo
