import React from 'react';
import './App.css';
import Landing from './components/Landing'
import NavBar from './components/NavBar';
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Error from './components/Error'
import { Route, Switch } from 'react-router-dom';

function App() {


  

  return (
      
        <div >
            <NavBar />
            <Switch>
              <Route path = '/' component = {Landing}  exact />
              <Route path = '/about' component = {About} />
              <Route path = '/portfolio' component = {Portfolio} />
              <Route path = '/skills' component = {Skills}/>
              <Route path = '/contact' component = {Contact} />
              <Route component = {Error} />
            </Switch>
            
        </div>
     
  );
}

export default App;
