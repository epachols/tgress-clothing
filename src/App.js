import React, { Component } from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignInAndUpPage from "./pages/sign-in-and-up/sign-in-and-up.component";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  //handling memory leak from unmount & listening for logged in state change
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      //  checking to see if db has changed/updated (moment instantiates, sends snapshot)
   
      userRef.onSnapshot(snapShot => {
        // setting current user state to the id from the snapshot along with user info from data.
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);

      });
      
    }
    else {this.setState({currentUser: userAuth})}
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Router>
        <Header currentUser={this.state.currentUser} />
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
