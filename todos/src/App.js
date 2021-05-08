import React from 'react'
import Options from './components/Options'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import UndoRedo from './containers/UndoRedo'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'

const App = () => (
  <div className="app_container">
    <Navigation />
    <AddTodo />
    <VisibleTodoList />
    <Options />
    <UndoRedo />
    <Footer />
  </div>
)

export default App