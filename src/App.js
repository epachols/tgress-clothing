import React, { Component } from "react";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

// redux imports
import { connect } from "react-redux"; 
import { setCurrentUser } from './redux/user/user.actions';

// reselect library imports
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SignInAndUpPage from "./pages/sign-in-and-up/sign-in-and-up.component";

class App extends Component {
   //handling memory leak from unmount & listening for logged in state change
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
     if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);
      //  checking to see if db has changed/updated (moment instantiates, sends snapshot)
   
      userRef.onSnapshot(snapShot => {
        // setting current user state to the id from the snapshot along with user info from data.
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

      });
      
    }
    setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/shop">
              <ShopPage />
            </Route>
            <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInAndUpPage />} />
          </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
