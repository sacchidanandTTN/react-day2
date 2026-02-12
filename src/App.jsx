import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ControlCounter from './components/ControlCounter'
import Parent from './components/Parent'
import TodoList from './components/TodoList'
import ViewsToggle from './components/ViewsToggle'

function App() {
  

  return (
    <>
      <Counter/>
      <ControlCounter/>
      <Parent/>
      <TodoList/>
      <ViewsToggle/>
    </>
  )
}

export default App
