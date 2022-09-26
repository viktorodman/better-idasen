import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import SideNav from './layout/side-nav/SideNav';
import Content from './layout/content/Content';
import RightAside from './layout/right-aside/RightAside';

function App() {
  return (
    <div className="min-h-screen w-full flex">
     <SideNav/>
     <Content/>
     <RightAside/>
    </div>
  );
}

export default App;
