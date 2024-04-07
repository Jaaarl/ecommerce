import { useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/footer'
import Login from './components/login/Login'
import Content from './components/content/Content'
import Carousel from './components/content/Carousel'



function App() {


  return (
    <>
      <Header />
      {/* <h1 className='text-3xl bg-green-400'>HI PO</h1> */}
      {/* <Login/> */}
 <Content/>
      <Footer />
    </>
  )
}

export default App
