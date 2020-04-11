import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    subtotal: 0,
    tax: 0,
    total: 0,
  };
  componentDidMount() {
    this.setProducts();
  }

  addItem = (id, val) => {
    const productItem = this.getItem(id);
    const tempProductItems = [...this.state.products];
    const index = tempProductItems.indexOf(productItem);
    let tempCartItems = [...this.state.cart];
    const cartItem = this.state.cart.find((item) => item.id === id);
    const cartIndex = tempCartItems.indexOf(cartItem);
    const tempPrice = productItem.price;
    let subtotal = this.state.subtotal;
    let tax = this.state.tax;
    let total = this.state.total;
    console.log(tempCartItems, id);
    if (val === 0 || (val === -1 && tempCartItems[cartIndex].count === 1)) {
      subtotal -= tempCartItems[cartIndex].count * productItem.price;
      tempProductItems[index].count = 0;
      tempProductItems[index].total = 0;
      tempProductItems[index].inCart = false;
      tempCartItems = tempCartItems.filter((item) => item.id != id);
    } else if (val == -1) {
      tempCartItems[cartIndex].count -= 1;
      tempCartItems[cartIndex].total -= tempCartItems[cartIndex].price;
      subtotal -= tempCartItems[cartIndex].price;
    } else {
      tempCartItems[cartIndex].count += 1;
      tempCartItems[cartIndex].total += tempCartItems[cartIndex].price;
      subtotal += tempCartItems[cartIndex].price;
    }
    this.setState({
      products: tempProductItems,
      cart: tempCartItems,
      subtotal: subtotal,
      tax: subtotal * 0.1,
      total: subtotal + tax,
    });
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  setProducts = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts, cart: [],subtotal:0 };
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        ...this.state.products,
        detailProduct: product,
      };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product],
          subtotal: this.state.subtotal + price,
          tax: (this.state.subtotal + price) * 0.1,
          total: (this.state.subtotal + price) * 1.1,
        };
      },
      () => console.log(this.state)
    );
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          addItem: this.addItem,
          setProducts:this.setProducts
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
