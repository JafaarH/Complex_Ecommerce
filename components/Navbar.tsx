import { Badge, Button, Container, Dropdown, Form, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"
import {FaShoppingCart} from "react-icons/fa"
import { useContext } from "react";
import {Cart} from "../Context/Context"
import { AiFillDelete } from "react-icons/ai";


const Header = () => {
  const {products, removeFromCart, searchQuery, productDispatch} = useContext(Cart)
    return (
        <Navbar className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="brand">
                Haddad's shop
            </Link>
          </Navbar.Brand>
          <Form.Control 
          type="text" 
          style={{width: 500}}
          placeholder="Search your product" 
          className="m-auto"
          onChange={(e) => productDispatch({
            type: "FILTER_BY_SEARCH",
            payload: e.target.value
          })}
          />
           <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic-button">
        <FaShoppingCart color="white" fontSize="25px" />
        <Badge>{products.length}</Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu align="end" className="menu" variant="light">
        {(products.length === 0)? (
          <p style={{padding: 10}}>cart is empty</p>
        ) : (
          products.map((product: {image: string, title: string, price: number},i) => (
            <div className="cartitem" key={i}>
              <img 
              src ={product.image}
              alt={product.title}
              className="cartItemImg"
              />
              <div className="cartItemDetail">
                <p>{product.title}</p>
                <p>${product.price}</p>
              </div>
              <AiFillDelete 
              fontSize="20px"
              style={{cursor: "pointer"}}
              onClick={() => removeFromCart(product)}
              />
            </div>
          ))
        )}
        <Link to="/cart">
        <Button className="bttn">Go to cart</Button>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
        </Container>
      </Navbar>
    )
}
export default Header;