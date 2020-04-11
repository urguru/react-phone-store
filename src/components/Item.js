import React from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
export default function Item(props) {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <React.Fragment>
            <div className="row align-items-center">
              <div className="col-2 p-1">
                <img src={props.item.img} className="img-fluid" alt="Product" />
              </div>
              <div className="col-2 p-1">{props.item.title}</div>
              <div className="col-2 p-1">
                <strong>$ {props.item.price}</strong>
              </div>
              <div className="col-2 p-1">
                <Box
                  onClick={() => {
                    value.addItem(props.item.id, -1);
                  }}
                >
                  -
                </Box>
                <Box>1</Box>
                <Box
                  onClick={() => {
                    value.addItem(props.item.id, 1);
                  }}
                >
                  +
                </Box>
              </div>
              <div className="col-2 p-1 ">
                <i
                  onClick={() => {
                    value.addItem(props.item.id, 0);
                  }}
                  className="fa-2x fa fa-trash text-align-center"
                ></i>
              </div>
              <div className="col-2 p-1">
                <strong>Item Total ${props.item.total}</strong>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </ProductConsumer>
  );
}

const Box = styled.span`
  border: 2px solid black;
  padding: 1px 4px;
  margin: 2px;
  cursor: pointer;
`;
