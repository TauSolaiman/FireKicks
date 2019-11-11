import React from 'react'
import {connect} from 'react-redux'
import {addToCartThunk, removeFromCartThunk} from '../store/cart'

export const Cart = props => {
  const cart = props.cart.items
  const total = props.cart.total

  return (
    <div id="cart">
      {cart.length === 0 || cart.length === undefined ? (
        <h3>Your cart is empty. </h3>
      ) : (
        <div className="cart">
          {cart.map(shoe => (
            <div className="cartItem" key={shoe.id}>
              <h4>{shoe.name}</h4>
              <div>
                <h4>
                  Price: ${shoe.price / 100} Quantity: {shoe.quantity}
                </h4>
              </div>
              <img className="cartImg" src={shoe.imageUrl} />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={() => props.removeItem(shoe)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h4>Total: ${total / 100}</h4>
          <button className="button" type="submit">
            Checkout
          </button>
        </div>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  cart: state.cart
})

const mapDispatchToProps = dispatch => ({
  removeItem: shoe => dispatch(removeFromCartThunk(shoe))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
