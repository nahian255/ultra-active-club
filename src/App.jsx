import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <Main></Main>
    </div>
  )
}

export default App
