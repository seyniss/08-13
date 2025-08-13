import { useState } from 'react'
import './App.css'
import PostForm from './component/PostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PostForm />
    </>
  )
}

export default App
