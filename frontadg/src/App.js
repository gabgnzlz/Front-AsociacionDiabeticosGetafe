import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/pageConect/Homepage';
import Footer from './components/footer/Footer';
import Aboutuspage from './components/pageConect/Aboutuspage';



function App() {
  return (


    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/nosotros' exact component={Aboutuspage} />
        </Switch>
        <Footer />
      </Router>
    </>


  );
}

export default App;
