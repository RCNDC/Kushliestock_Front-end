import { Col, Row } from "react-bootstrap";
import productImg from "../../images/product5.jpg";
import { faTrashAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "../../utils/url";
import { cartSlice } from "../../slices/cart";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import { useState } from "react";

// a single cart item in a cart list
const CartItem = ({ cartItem, productImage }) => {
  const removeIcon = <FontAwesomeIcon icon={faTrashAlt} />;
  const plusIcon = <FontAwesomeIcon icon={faPlus} />;
  const minusIcon = <FontAwesomeIcon icon={faMinus} />;
  const cartActions = cartSlice.actions;
  const dispatch = useDispatch();
  const [showEnterAmount, setShowEnterAmount] = useState(false);

  

  const removeCartItem = (id) => {
    dispatch(cartActions.removeCartItem(id));
  };
  const increaseQuantity = (id) => {
    dispatch(cartActions.increaseQuantity(id));
  };
  const decreaseQuantity = (id) => {
    dispatch(cartActions.decreaseQuantity(id));
  };

  return (
    <div className="cart-item">
      <Row>
        <Col lg={5}>
          <div className="product">
            <img className="img-fluid" src={productImage} alt="" />
            <div className="product-left">
              <div className="product-title">{cartItem.product.Name}</div>
              <div
                className="remove icon"
                onClick={() => {
                  removeCartItem(cartItem.product.id);
                }}
              >
                {removeIcon}
              </div>
            </div>
          </div>
        </Col>
        <Col lg={1}>
          <div className="price">{cartItem.product.Price + " birr"}</div>
        </Col>
        <Col lg={2}>
          <div className="quantity">
            <div className="inner">
              {" "}
              <div
                className="minus icon"
                onClick={() => {
                  decreaseQuantity(cartItem.product.id);
                }}
              >
                {minusIcon}
              </div>
              <div className="amount">
                {" "}
                {!showEnterAmount ? (
                  <div
                    className="amount-div"
                    onClick={() => {
                      setShowEnterAmount(true);
                    }}
                  >
                    {cartItem.quantity}
                  </div>
                ) : (
                  <input
                    type="text"
                    className="amount-input"
                    autoFocus
                    defaultValue={cartItem.quantity}
                    onBlur={(e) => {
                      if (e.target.value) {
                        dispatch(
                          cartActions.changeQuantity({
                            id: cartItem.product.id,
                            amount: e.target.value,
                          })
                        );
                      }
                      setShowEnterAmount(false);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (e.target.value) {
                          dispatch(
                            cartActions.changeQuantity({
                              id: cartItem.product.id,
                              amount: e.target.value,
                            })
                          );
                        }
                        setShowEnterAmount(false);
                      }
                    }}
                    // value={cartItem.quantity}
                    // onChange={(e) => {
                    //   if (e.target.value) {
                    //     dispatch(
                    //       cartActions.changeQuantity({
                    //         id: cartItem.product.id,
                    //         amount: e.target.value,
                    //       })
                    //     );
                    //   }
                    // }}
                  />
                )}
              </div>
              <div
                className="plus icon"
                onClick={() => {
                  increaseQuantity(cartItem.product.id);
                }}
              >
                {plusIcon}
              </div>
            </div>
          </div>
        </Col>
        <Col lg={1}>
          <div className="color">
            {cartItem.product.color ? (
              <CirclePicker
                width="20px"
                color={cartItem.selectedColor}
                onChange={(color, event) => {
                  console.log(color.hex);
                  dispatch(
                    cartActions.setColor({
                      id: cartItem.product.id,
                      color: color.hex,
                    })
                  );
                }}
                colors={cartItem.product.color.split(",")}
              />
            ) : (
              ""
            )}
          </div>
        </Col>
        <Col lg={1}>
          <div className="size">
            {cartItem.product.size ? (
              <div className="size-content">
                {" "}
                {cartItem.product.size.split(",").map((item) => {
                  return (
                    <div
                      className={
                        item === cartItem.selectedSize
                          ? "size-item selected"
                          : "size-item"
                      }
                      onClick={() => {
                        dispatch(
                          cartActions.setSize({
                            id: cartItem.product.id,
                            size: item,
                          })
                        );
                      }}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
            ) : (
              ""
            )}
          </div>
        </Col>
        <Col lg={1}>
          <div className="total">
            {cartItem.product.Price * cartItem.quantity} birr
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default CartItem;
