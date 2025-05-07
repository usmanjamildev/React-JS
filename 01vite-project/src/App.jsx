import { useState } from "react"

function App() {
  let [counter, setCounter] = useState(15);
  const addValue = () => {
    setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Here We are going to use useState Hook</h1>
      <h3>Counter : {counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
