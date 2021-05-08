import React from "react";
import "./header-style.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/HKcB1u01.svg";
import { auth } from "../../firebase/firebase-utils";
import { connect } from "react-redux";
import ShoppingCartIcon from '../cart-icon/cart-icon-component'
import CartDropdown from '../cart-dropdown/cart-dropdown-components'
import { createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import {selectCurrentUser} from '../../redux/user/user-selector'

const Header = ({ currentUser,hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          Sign Out
        </div>
      ) : (
        <Link className="option" to="/signin">
          Sign In
        </Link>
      )}
      <ShoppingCartIcon />
    </div>
    {hidden ? null: <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden : selectCartHidden
});
export default connect(mapStateToProps)(Header);
