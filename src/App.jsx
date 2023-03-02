import { useState } from 'react'
import reactLogo from './assets/react.svg'
import keenLogo from './assets/keen.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <div
      className="App"
      style={{
        backgroundImage: 'url(/assets/Keen_BG_Normal.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={keenLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>KEEN Organisational Ethics</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
