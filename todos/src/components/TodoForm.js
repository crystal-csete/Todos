import React, { useReducer } from 'react'
import { reducer, initialState } from '../reducer/index';
import { setTitle, setEditing, setNewTitleText } from './../actions'


const TodoForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges= (e) => {
        dispatch(setNewTitleText(e.target.value));
    };

    console.log('current state', state);

    return (
        <div>
            <h2>Todos: </h2>
            <div>
                {!state.editing ? (
                    <h1>
                        {state.title}
                        <i
                            onClick={() => dispatch(setEditing(!state.editing))}
                            className="far fa-edit"
                        />
                    </h1>
                ) : (
                    <div>
                <input 
                    type="text"
                    name="newTitleText"
                    value={state.newTitleText}
                    onChange={handleChanges}
                />
                <button
                    onClick={() =>{
                        dispatch(setTitle(state.newTitleText))
                        dispatch(setEditing(false))
                    }}
                >
                    Update title
                </button>
            </div>
                )}
            </div>
        </div>          
        
    )
}

export default TodoForm
