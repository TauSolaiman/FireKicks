import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectedProductsThunk} from '../store/products'
import {Link} from 'react-router-dom'

class SingleProduct extends Component {
  constructor() {
    super()
  }
  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.fetchProduct(id)
  }
  render() {
    const selectedProduct = this.props.selectedProduct
    //Checking for an id works better because an empty obj would still be truthy
    if (selectedProduct === null) {
      return <h1>No shoes for you!</h1>
    }
    if (selectedProduct.id) {
      return (
        <div className="single_component">
          <h1>{selectedProduct.name}</h1>
          <h2>Brand: {selectedProduct.brand}</h2>
          <img src={selectedProduct.imageUrl} />
          <h3>Gender: {selectedProduct.gender}</h3>
          <h3>Sizes: {selectedProduct.size.join(', ')}</h3>
        </div>
      )
    } else {
      return 'Loading'
    }
  }
}
//with a sub reducer it goes a level deep
const productMapStateToProps = state => ({
  selectedProduct: state.products.selectedProduct
})

const productMapDispacthToProps = dispatch => ({
  fetchProduct: id => dispatch(selectedProductsThunk(id))
})

const connectSingleProduct = connect(
  productMapStateToProps,
  productMapDispacthToProps
)(SingleProduct)

export default connectSingleProduct
