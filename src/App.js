import React from "react";
import NavBar from "./components/NavBar";
import LandingTwo from "./pages/LandingTwo";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Error from "./pages/Error";
import About from "./pages/About";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <>
      <NavBar />
      <AnimatePresence>
        <Switch>
          <Route path="/" component={LandingTwo} exact />
          <Route path="/about" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />

          <Route component={Error} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
