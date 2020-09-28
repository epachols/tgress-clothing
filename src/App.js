import React, { Component } from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth } from './firebase/firebase.utils';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInAndUpPage from "./pages/sign-in-and-up/sign-in-and-up.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //handling memory leak from unmount & listening for looged in state change
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

export default App;
