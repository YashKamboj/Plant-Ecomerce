import React from 'react'
import {connect} from 'react-redux'
import {tooggleCartHidden} from '../../redux/cart/cart-actions'
import {ReactComponent as ShoppingIcon } from '../assets/shopping-cart.svg' 
import './cart-icon-style.scss'
import {selectCartItemsCount} from '../../redux/cart/cart-selectors'
import {createStructuredSelector} from 'reselect'

const ShoppingCartIcon = ({tooggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={tooggleCartHidden}>
        <ShoppingIcon className='Shopping-Icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    tooggleCartHidden : () => dispatch(tooggleCartHidden())
})

const mapStateToProps =createStructuredSelector ({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartIcon)