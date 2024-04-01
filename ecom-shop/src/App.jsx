import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Login from './components/login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {/* <h1 className='text-3xl bg-green-400'>HI PO</h1> */}
      <Login/>
      <Footer />
    </>
  )
}

export default App
