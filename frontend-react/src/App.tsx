import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
      <a className="button mx-2">
            Login
      </a>
      <a className="button mx-2">
            Register
      </a>
      <a className="button mx-2">
            Blog
      </a>
      </div>
    </>
  )
}

export default App
