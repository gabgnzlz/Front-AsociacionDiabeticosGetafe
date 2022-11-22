import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './components/pageConect/Homepage';
import Footer from './components/footer/Footer';
import Aboutuspage from './components/pageConect/Aboutuspage';
// import BlogNoticias from './components/pageConect/BlogNoticias';
import RevConect from './components/pageConect/RevConect';
import Noticiaspage from './components/pageConect/Noticiaspage';
import Suscripcion from './components/formularios/form_suscribete/Suscripcion.jsx'
import Contactpage from './components/pageConect/Contactpage';
import Ingresar from './components/formularios/form_ingresar/Ingresar.jsx'

function App() {
  return (

    <>
      <Router>
        <Header/>
        <Switch>

        
          <Route path='/' exact component={HomePage} />
          <Route path='/nosotros' exact component={Aboutuspage} />
          <Route path='/contact' exact component={Contactpage} />
          <Route path='/suscribete' exact component={Suscripcion} />
          <Route path='/noticias' exact component={Noticiaspage} />
          {/* <Route path='/revista' exact component={Revistapage} /> */}
          <Route path='/ingresar' exact component={Ingresar} />

{/* 
          <Route path='/blog' exact component={BlogNoticias} /> */}
          <Route path='/revista' exact component={RevConect} />
        </Switch>
        <Footer />
      </Router>
    </>


  );
}

export default App;
