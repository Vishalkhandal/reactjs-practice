import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = async ()=> {
    setCount(count => count + 1)
    await delay(3000);
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={handleClick}>Increase after 1s</button>
    </>
  )
}

export default App

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
