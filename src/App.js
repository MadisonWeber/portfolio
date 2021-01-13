import React from 'react';
// import Landing from './components/Landing'
import NavBar from './components/NavBar';
import LandingTwo from './components/LandingTwo'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Error from './components/Error'
import AboutTwo from './components/AboutTwo'
import { Route, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
      
        <div >
            <NavBar />
            <AnimatePresence>
              <Switch>
                <Route path = '/' component = {LandingTwo}  exact />
                <Route path = '/about' component = {AboutTwo} />
                <Route path = '/portfolio' component = {Portfolio} />
                <Route path = '/skills' component = {Skills}/>
                <Route path = '/contact' component = {Contact} />
                <Route path = '/LandingTwo' component = {LandingTwo} />
                <Route component = {Error} />
             
              </Switch>
            </AnimatePresence>

        </div>
     
  );
}

export default App;
