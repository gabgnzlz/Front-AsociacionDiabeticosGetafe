import React from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/pageConect/Homepage';
import Footer from './components/footer/Footer';
import Aboutuspage from './components/pageConect/Aboutuspage';
import Contacto from './components/formularios/form_contacto/Contacto.jsx'
import Suscripcion from './components/formularios/form_suscribete/Suscripcion.jsx';
import Noticiaspage from './components/pageConect/Noticiaspage';

function App() {
  return (


    <>
      <Router>
        <Header/>
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/nosotros' exact component={Aboutuspage} />
          <Route path='/contact' exact component={Contacto} />
          <Route path='/suscribete' exact component={Suscripcion} />
          <Route path='/noticias' exact component={Noticiaspage} />


        </Switch>
        <Footer />
      </Router>
    </>


  );
}

export default App;
