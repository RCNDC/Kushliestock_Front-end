import { Col, Row } from "react-bootstrap";

const CartListHeader = () => {

   return <div className="cart-list-header">
        <Row>
            <Col lg={5}>
              Product
            </Col>
            <Col lg={1}>
              Price
            </Col>
            <Col lg={2}>
              Quantity
            </Col>
            <Col lg={1}>
              Color
            </Col>
            <Col lg={1}>
              Size
            </Col>
            <Col lg={1} style={{textAlign:'right'}}>
              Total
            </Col>
        </Row>
       
    </div>

}
export default CartListHeader;