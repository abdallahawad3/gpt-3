import "./App.css"
import React from 'react'
import { Header, Blog, Possibility, WhatGPT3, Footer, Features } from './containers';
import { Action, Navbar, Brand } from './components';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Action />
      <Blog />
      <Footer />
    </div>
  )
}

export default App;