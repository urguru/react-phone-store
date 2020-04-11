import React, { Component } from "react";
import { ProductConsumer } from "../context";
import Item from "./Item";
import Title from "./Title";
import {ButtonContainerCart} from './Button'
import PaypalButton from './PaypalButton'
export default class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(values) => {
            const Items = values.cart.map(item => <Item item={item} key={item.id} />)
            if (values.cart.length == 0) {
              return (
                <div className="container">
                  <div className="row mx-auto">
                    <div className="col-10 py-2 ">
                      <h1 style={{ textAlign: "center" }}>The cart is empty</h1>
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="container">
                  <Title name="your" title=" cart" />
                  <div className="row py-4">
                    <div className="col-2  p-1">
                      <h5>Products</h5>
                    </div>
                    <div className="col-2 p-1">
                      <h5>Name of Product</h5>
                    </div>
                    <div className="col-2 p-1">
                      <h5>Price</h5>
                    </div>
                    <div className="col-2 p-1">
                      <h5>Quantity</h5>
                    </div>
                    <div className="col-2 p-1">
                      <h5>Remove</h5>
                    </div>
                    <div className="col-2 p-1">
                      <h5>Total</h5>
                    </div>
                  </div>
                  {
                    Items
                  }
                  <div className="row d-flex justify-content-end">
                    <div className="col-4 text-right">
                      <ButtonContainerCart onClick={()=>{
                        values.setProducts()
                      }}>
                        Clear Cart
                      </ButtonContainerCart>
                      <h3>Subtotals : $ {values.subtotal.toFixed(2)}</h3>
                      <h3>Tax : $ {values.tax.toFixed(2)}</h3>
                      <h3>Total: $ {values.total.toFixed(2)}</h3>
                      <PaypalButton total={values.total} clearCart={values.setProducts} history={this.props.history} />
                    </div>
                  </div>
                </div>
              );
            }
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
