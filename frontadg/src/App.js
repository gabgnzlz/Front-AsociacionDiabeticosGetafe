import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Homepage from './components/pageConect/Homepage';


function App() {
  return (


    <>       
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={Homepage} />
          
        </Switch>
        <Footer />
      </Router>
    </>
    


  );
}

export default App;
