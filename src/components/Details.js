import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <React.Fragment>
        <ProductConsumer>
          {(values) => {
            const {
              id,
              title,
              img,
              price,
              company,
              info,
              inCart,
            } = values.detailProduct;
            return (
              <div className="container py-5">
                <div className="row">
                  <div className="col-10 mx-auto text-slanted text-center text-blue my-5">
                    <h1>{title}</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    <img class="img-fluid mx-auto" src={img} alt="" />
                  </div>
                  <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                    {/* {Product Text} */}
                    <h2>model: {title}</h2>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                      made by : {company}
                    </h4>
                    <h4 className="text-blue">
                        <strong>
                            price: <span>$</span>{price}
                        </strong>
                    </h4>
                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                        Some info about the product
                    </p>
                    <p className="text-muted lead">
                        {info}
                    </p>
                    <div>
                        <Link to='/'>
                            <ButtonContainer>
                                Back To Product
                            </ButtonContainer>
                        </Link>
                        <ButtonContainer cart
                            disabled={inCart?true:false}
                            onClick={()=>{
                                values.addToCart(id);
                                values.openModal(id);
                            }}
                        >
                            {inCart?'inCart':'add to cart'}
                        </ButtonContainer >
                    </div>
                  </div>
                </div>
              </div>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}
