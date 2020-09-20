import React from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import Header from "./components/header/header.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInAndUpPage from "./pages/sign-in-and-up/sign-in-and-up.component";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>hats page yo</h1>
//     </div>
//   )
// }

function App() {
  return (
    <>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/signin">
            <SignInAndUpPage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
