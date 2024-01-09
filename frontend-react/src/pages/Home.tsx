import { useState } from 'react'
import { Link } from "react-router-dom";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
      <Link to="login" className="button mx-2">
            Login
      </Link>
      <Link to="register" className="button mx-2">
            Register
      </Link>
      <Link to="blog" className="button mx-2">
            Blog
      </Link>
      </div>
    </>
  )
}

export default Home
