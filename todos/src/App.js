import React from 'react'
import Options from './components/Options'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import UndoRedo from './containers/UndoRedo'
import './App.css'

const App = () => (
  <div className="app_container">
    <AddTodo />
    <VisibleTodoList />
    <Options />
    <UndoRedo />
  </div>
)

export default App