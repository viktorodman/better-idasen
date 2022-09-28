import React from 'react'
import logo from './logo.svg'
import { Counter } from './features/counter/Counter'
import './App.css'
import SideNav from './layout/side-nav/SideNav'
import Content from './layout/content/Content'
import RightAside from './layout/right-aside/RightAside'
import Header from './layout/header/Header'

function App() {
  return (
    <div className='min-h-screen w-full flex flex-col bg-primary'>
      <Header />
      <Content />
      {/* <SideNav /> */}
      {/* <Content /> */}
      {/* <RightAside /> */}
    </div>
  )
}

export default App
