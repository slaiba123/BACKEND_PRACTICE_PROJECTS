import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UrlShortener from './frontend'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UrlShortener/>
    </>
  )
}

export default App
