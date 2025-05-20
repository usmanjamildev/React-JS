import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim() === '') return
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div className="flex flex-col items-center justify-center mt-12">
      <form onSubmit={addTodoHandler} className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg space-y-4">
        <h2 className="text-2xl font-semibold text-white text-center">Add a New Task</h2>
        <input
          type="text"
          className="w-full bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-indigo-500 text-white py-2 px-4 leading-6 transition-transform duration-300 ease-in-out transform hover:scale-105"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          Add Todo
        </button>
      </form>
    </div>
  )
}

export default AddTodo