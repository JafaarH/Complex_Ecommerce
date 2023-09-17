import {  useContext, useEffect, useState } from "react";
import {Cart} from "../Context/Context"
import { Button, Col, ListGroup, Row, Image, FormControl, Form } from "react-bootstrap";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {
    const {total, products, removeFromCart} = useContext(Cart)

    return (
         <div className="home">
            <div className="productContainer">
                <ListGroup>
                    {
                        products.map((product: {image: string, id: number, rate: number, price: number, title: string})=> (
                            <ListGroup.Item key={product.id}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={product.image} alt={product.title} fluid rounded />
                                    </Col>
                                    <Col md={3}>
                                <span>{product.title}</span>
                                </Col>
                                <Col md={2}>
                                    ${product.price}
                                </Col>
                                <Col md={3}>
                                    <Rating rate={product.rate} style={undefined} onClick={function (i: number): void {
                                            throw new Error("Function not implemented.");
                                        } } />
                                </Col>
                                
                                <Col md={2}>
                                    <Button 
                                    type="button"
                                    variant="light"
                                    onClick={() => removeFromCart(product)}
                                    >
                                        <AiFillDelete fontSize="20px" />
                                    </Button>
                                </Col>
                                </Row>
                            </ListGroup.Item>
                        ))
                    }
                </ListGroup>
            </div>
            <div className="filters summary">
                <span className="title" style={{fontSize: 25}}>Subtotal ({products.length}) items</span>
                <span style={{fontWeight: 700, fontSize: 20}}>Total: ${total}</span>
                <Button type="button" disabled={products.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
         </div>
    )
}
export default CartPage;