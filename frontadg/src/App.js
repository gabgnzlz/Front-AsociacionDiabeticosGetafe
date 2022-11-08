import React from 'react';
import './App.css';
import Cardblog from './components/blog/Cardblog';
import './components/blog/cardblog.css';
import Blog from './components/blog/Blog';
import './components/blog/Blog.css';
import  Menu_Items from "./components/menu/Menu_Items"
import Nav from './components/Menu/Nav';
import Dropdown from './components/Menu/Dropdown';
import "./components/Menu/menu.css";
  



function App() {
  return (


    <div className="App">
    <Blog/>
    <Cardblog/>
    <Dropdown/>
    <Menu_Items/>
    <Nav/>
      </div>


  );
}

export default App;
