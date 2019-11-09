import React from 'react'
import {connect} from 'react-redux'
import {updateStatusThunk, removeFromCartThunk} from '../store/cart'
import {Link} from 'react-router-dom'

export const Cart = props => {
  const cart = props.cart.items
  const total = props.cart.total
  const changeStatus = props.changeStatus
  const userId = props.userId
  const removeItem = props.removeItem

  return (
    <div id="cart">
      {cart.length === 0 ? (
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
                  onClick={() => removeItem(shoe.id)}
                  className="button"
                  type="submit"
                >
                  Remove From Cart
                </button>
                <Link to="/checkout">
                  <button
                    className="button"
                    type="submit"
                    onClick={() => changeStatus(userId)}
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </div>
          ))}
          <h4>Total: ${total / 100}</h4>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  cart: state.cart,
  userId: state.user.id
})

const mapDispatchToProps = dispatch => ({
  changeStatus: id => dispatch(updateStatusThunk(id)),
  removeItem: productId => dispatch(removeFromCartThunk(productId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
