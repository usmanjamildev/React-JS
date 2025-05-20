import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Manage Your Tasks</h1>
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-lg">
        <AddTodo />
        <Todos />
      </div>
    </div>
  )
}

export default App