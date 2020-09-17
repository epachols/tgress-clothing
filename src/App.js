import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const HatsPage = () => {
  return (
    <div>
      <h1>hats page yo</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop/hats">
            <HatsPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
