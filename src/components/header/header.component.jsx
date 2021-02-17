import React from "react";
import { connect } from "react-redux"; 
import { auth } from "../../firebase/firebase.utils";
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => {
  return (
    <>
    <HeaderContainer>


      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>


      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />

      </OptionsContainer>
      { hidden ? null : <CartDropdown /> }


    </HeaderContainer>
      </>
  );
}

// createStructuredSelector takes some of the headache out of structuring the selectors.
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);